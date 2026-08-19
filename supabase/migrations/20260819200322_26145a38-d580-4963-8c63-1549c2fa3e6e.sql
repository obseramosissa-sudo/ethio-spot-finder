-- ROLES ------------------------------------------------------------------
create type public.app_role as enum ('admin','moderator','user');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  phone text,
  avatar_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update on public.profiles to authenticated;
grant all on public.profiles to service_role;
alter table public.profiles enable row level security;
create policy "Users manage own profile" on public.profiles for all to authenticated using (id = auth.uid()) with check (id = auth.uid());
create trigger update_profiles_updated_at before update on public.profiles for each row execute function public.update_updated_at_column();

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create policy "Users read own roles" on public.user_roles for select to authenticated using (user_id = auth.uid());

create or replace function public.has_role(_user_id uuid, _role public.app_role)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.user_roles where user_id = _user_id and role = _role)
$$;

create or replace function public.owns_business(_business_id uuid)
returns boolean language sql stable security definer set search_path = public as $$
  select exists (select 1 from public.businesses b where b.id = _business_id and b.owner_id = auth.uid())
$$;

-- CATEGORIES ---------------------------------------------------------------
create table public.categories (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  icon text,
  sort_order integer not null default 0,
  created_at timestamptz not null default now()
);
grant select on public.categories to anon, authenticated;
grant all on public.categories to service_role;
alter table public.categories enable row level security;
create policy "Public read categories" on public.categories for select to anon, authenticated using (true);

create table public.subcategories (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.categories(id) on delete cascade,
  slug text not null,
  name text not null,
  sort_order integer not null default 0,
  unique (category_id, slug)
);
grant select on public.subcategories to anon, authenticated;
grant all on public.subcategories to service_role;
alter table public.subcategories enable row level security;
create policy "Public read subcategories" on public.subcategories for select to anon, authenticated using (true);

-- BUSINESS EXTENSIONS -------------------------------------------------------
alter table public.businesses
  add column if not exists subcategory_slug text,
  add column if not exists logo text,
  add column if not exists cover_image text,
  add column if not exists whatsapp text,
  add column if not exists email text,
  add column if not exists established_year integer,
  add column if not exists employees_count integer,
  add column if not exists social_links jsonb not null default '{}'::jsonb,
  add column if not exists is_demo boolean not null default false;

create policy "Owners read their businesses" on public.businesses for select to authenticated using (owner_id = auth.uid());

-- PRODUCT EXTENSIONS --------------------------------------------------------
alter table public.products
  add column if not exists brand text,
  add column if not exists model text,
  add column if not exists condition text not null default 'new',
  add column if not exists warranty text,
  add column if not exists specifications jsonb not null default '{}'::jsonb,
  add column if not exists images text[] not null default '{}'::text[],
  add column if not exists price_on_request boolean not null default false;

create policy "Owners read their products" on public.products for select to authenticated using (public.owns_business(business_id));

-- SERVICES ------------------------------------------------------------------
create table public.services (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  name text not null,
  description text,
  images text[] not null default '{}'::text[],
  price_min numeric,
  price_max numeric,
  currency text not null default 'ETB',
  duration text,
  location text,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select on public.services to anon;
grant select, insert, update, delete on public.services to authenticated;
grant all on public.services to service_role;
alter table public.services enable row level security;
create policy "Public read active services" on public.services for select to anon
  using (is_active and exists (select 1 from public.businesses b where b.id = business_id and b.status = 'approved'));
create policy "Authenticated read services" on public.services for select to authenticated
  using ((is_active and exists (select 1 from public.businesses b where b.id = business_id and b.status = 'approved')) or public.owns_business(business_id));
create policy "Owners manage services" on public.services for all to authenticated
  using (public.owns_business(business_id)) with check (public.owns_business(business_id));
create trigger update_services_updated_at before update on public.services for each row execute function public.update_updated_at_column();

-- OFFERS --------------------------------------------------------------------
create table public.offers (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  title text not null,
  description text,
  image text,
  original_price numeric,
  discount_price numeric,
  discount_percent integer,
  starts_at date not null default current_date,
  ends_at date,
  terms text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select on public.offers to anon;
grant select, insert, update, delete on public.offers to authenticated;
grant all on public.offers to service_role;
alter table public.offers enable row level security;
create policy "Public read active offers" on public.offers for select to anon
  using (is_active and exists (select 1 from public.businesses b where b.id = business_id and b.status = 'approved'));
create policy "Authenticated read offers" on public.offers for select to authenticated
  using ((is_active and exists (select 1 from public.businesses b where b.id = business_id and b.status = 'approved')) or public.owns_business(business_id));
create policy "Owners manage offers" on public.offers for all to authenticated
  using (public.owns_business(business_id)) with check (public.owns_business(business_id));
create trigger update_offers_updated_at before update on public.offers for each row execute function public.update_updated_at_column();

-- QUOTE REQUESTS ------------------------------------------------------------
create type public.quote_status as enum ('new','in_progress','answered','closed');

create table public.quote_requests (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  customer_id uuid references auth.users(id) on delete set null,
  product_id uuid references public.products(id) on delete set null,
  service_id uuid references public.services(id) on delete set null,
  subject text not null,
  quantity integer,
  budget numeric,
  currency text not null default 'ETB',
  location text,
  description text,
  contact_name text not null,
  contact_method text not null default 'phone',
  contact_value text not null,
  status public.quote_status not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update on public.quote_requests to authenticated;
grant all on public.quote_requests to service_role;
alter table public.quote_requests enable row level security;
create policy "Customers manage own quotes" on public.quote_requests for select to authenticated using (customer_id = auth.uid());
create policy "Customers create quotes" on public.quote_requests for insert to authenticated with check (customer_id = auth.uid());
create policy "Owners read quotes for their business" on public.quote_requests for select to authenticated using (public.owns_business(business_id));
create policy "Owners update quotes for their business" on public.quote_requests for update to authenticated
  using (public.owns_business(business_id)) with check (public.owns_business(business_id));
create trigger update_quote_requests_updated_at before update on public.quote_requests for each row execute function public.update_updated_at_column();

-- MESSAGES ------------------------------------------------------------------
create table public.messages (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  customer_id uuid not null references auth.users(id) on delete cascade,
  quote_request_id uuid references public.quote_requests(id) on delete set null,
  product_id uuid references public.products(id) on delete set null,
  sender_role text not null default 'customer',
  body text not null,
  read_at timestamptz,
  created_at timestamptz not null default now()
);
grant select, insert, update on public.messages to authenticated;
grant all on public.messages to service_role;
alter table public.messages enable row level security;
create policy "Participants read messages" on public.messages for select to authenticated
  using (customer_id = auth.uid() or public.owns_business(business_id));
create policy "Participants send messages" on public.messages for insert to authenticated
  with check ((sender_role = 'customer' and customer_id = auth.uid()) or (sender_role = 'owner' and public.owns_business(business_id)));
create policy "Participants update messages" on public.messages for update to authenticated
  using (customer_id = auth.uid() or public.owns_business(business_id))
  with check (customer_id = auth.uid() or public.owns_business(business_id));

-- VERIFICATION --------------------------------------------------------------
create type public.verification_status as enum ('pending','approved','rejected');

create table public.verification_requests (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  submitted_by uuid references auth.users(id) on delete set null,
  legal_name text not null,
  registration_number text,
  document_url text,
  notes text,
  status public.verification_status not null default 'pending',
  review_notes text,
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert on public.verification_requests to authenticated;
grant update on public.verification_requests to authenticated;
grant all on public.verification_requests to service_role;
alter table public.verification_requests enable row level security;
create policy "Owners read own verification" on public.verification_requests for select to authenticated
  using (public.owns_business(business_id) or public.has_role(auth.uid(),'admin'));
create policy "Owners submit verification" on public.verification_requests for insert to authenticated
  with check (public.owns_business(business_id) and submitted_by = auth.uid());
create policy "Admins review verification" on public.verification_requests for update to authenticated
  using (public.has_role(auth.uid(),'admin')) with check (public.has_role(auth.uid(),'admin'));
create trigger update_verification_updated_at before update on public.verification_requests for each row execute function public.update_updated_at_column();

-- SIGNUP TRIGGER ------------------------------------------------------------
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, full_name, email)
  values (new.id, new.raw_user_meta_data ->> 'full_name', new.email)
  on conflict (id) do nothing;
  insert into public.user_roles (user_id, role) values (new.id, 'user') on conflict do nothing;
  return new;
end;
$$;
create trigger on_auth_user_created after insert on auth.users for each row execute function public.handle_new_user();

-- CATEGORY SEED -------------------------------------------------------------
insert into public.categories (slug, name, sort_order) values
  ('healthcare','Healthcare',1),
  ('medical-equipment','Medical Equipment',2),
  ('pharmacies','Pharmacies',3),
  ('laboratories','Laboratories',4),
  ('hospitals','Hospitals',5),
  ('restaurants','Restaurants',6),
  ('hotels','Hotels',7),
  ('construction','Construction',8),
  ('real-estate','Real Estate',9),
  ('electronics','Electronics',10),
  ('computers','Computers',11),
  ('telecommunications','Telecommunications',12),
  ('automotive','Automotive',13),
  ('education','Education',14),
  ('training-centers','Training Centers',15),
  ('financial-services','Financial Services',16),
  ('banks','Banks',17),
  ('insurance','Insurance',18),
  ('manufacturing','Manufacturing',19),
  ('importers','Importers',20),
  ('wholesalers','Wholesalers',21),
  ('retail','Retail',22),
  ('agriculture','Agriculture',23),
  ('tourism','Tourism',24),
  ('transportation','Transportation',25),
  ('logistics','Logistics',26),
  ('professional-services','Professional Services',27),
  ('beauty-personal-care','Beauty & Personal Care',28),
  ('fashion','Fashion',29),
  ('furniture','Furniture',30),
  ('home-services','Home Services',31),
  ('government-organizations','Government & Organizations',32),
  ('other','Other',33)
on conflict (slug) do nothing;

insert into public.subcategories (category_id, slug, name, sort_order)
select c.id, s.slug, s.name, s.ord from public.categories c
join (values
  ('healthcare','general-clinics','General Clinics',1),
  ('healthcare','specialty-clinics','Specialty Clinics',2),
  ('healthcare','dental','Dental',3),
  ('healthcare','diagnostics','Diagnostics & Imaging',4),
  ('medical-equipment','lab-equipment','Laboratory Equipment',1),
  ('medical-equipment','hospital-furniture','Hospital Furniture',2),
  ('medical-equipment','consumables','Medical Consumables',3),
  ('medical-equipment','maintenance','Equipment Maintenance',4),
  ('pharmacies','retail-pharmacy','Retail Pharmacy',1),
  ('pharmacies','wholesale-pharmacy','Wholesale Pharmacy',2),
  ('laboratories','medical-lab','Medical Laboratory',1),
  ('laboratories','industrial-lab','Industrial Testing',2),
  ('hospitals','general-hospital','General Hospital',1),
  ('hospitals','specialized-hospital','Specialized Hospital',2),
  ('restaurants','ethiopian','Ethiopian Cuisine',1),
  ('restaurants','international','International Cuisine',2),
  ('restaurants','cafes','Cafés & Coffee',3),
  ('restaurants','fast-food','Fast Food',4),
  ('hotels','hotels','Hotels',1),
  ('hotels','guest-houses','Guest Houses',2),
  ('hotels','lodges','Lodges & Resorts',3),
  ('construction','contractors','General Contractors',1),
  ('construction','building-materials','Building Materials',2),
  ('construction','cement-steel','Cement & Steel',3),
  ('construction','consultants','Engineering Consultants',4),
  ('real-estate','agencies','Real Estate Agencies',1),
  ('real-estate','developers','Property Developers',2),
  ('real-estate','rentals','Rentals',3),
  ('electronics','mobile-phones','Mobile Phones',1),
  ('electronics','tvs-audio','TVs & Audio',2),
  ('electronics','accessories','Accessories',3),
  ('electronics','repair-services','Repair Services',4),
  ('computers','laptops','Laptops',1),
  ('computers','desktops','Desktops',2),
  ('computers','printers','Printers & Scanners',3),
  ('computers','networking','Networking & CCTV',4),
  ('computers','it-services','IT Services',5),
  ('telecommunications','isp','Internet Providers',1),
  ('telecommunications','equipment','Telecom Equipment',2),
  ('automotive','car-dealers','Car Dealers',1),
  ('automotive','spare-parts','Spare Parts',2),
  ('automotive','garages','Garages & Repair',3),
  ('education','schools','Schools',1),
  ('education','universities','Colleges & Universities',2),
  ('training-centers','it-training','IT Training',1),
  ('training-centers','language','Language Training',2),
  ('training-centers','vocational','Vocational Training',3),
  ('financial-services','microfinance','Microfinance',1),
  ('financial-services','accounting','Accounting & Audit',2),
  ('banks','commercial-banks','Commercial Banks',1),
  ('insurance','general-insurance','General Insurance',1),
  ('insurance','life-insurance','Life Insurance',2),
  ('manufacturing','food-beverage','Food & Beverage',1),
  ('manufacturing','plastics','Plastics & Packaging',2),
  ('manufacturing','textile','Textile',3),
  ('importers','general-import','General Import',1),
  ('importers','machinery-import','Machinery Import',2),
  ('wholesalers','food-wholesale','Food Wholesale',1),
  ('wholesalers','general-wholesale','General Wholesale',2),
  ('retail','supermarkets','Supermarkets',1),
  ('retail','shops','Specialty Shops',2),
  ('agriculture','inputs','Seeds & Inputs',1),
  ('agriculture','machinery','Farm Machinery',2),
  ('agriculture','coffee','Coffee & Export',3),
  ('tourism','tour-operators','Tour Operators',1),
  ('tourism','travel-agencies','Travel Agencies',2),
  ('transportation','taxi-ride','Taxi & Ride Services',1),
  ('transportation','bus','Bus & Coach',2),
  ('logistics','freight','Freight Forwarding',1),
  ('logistics','courier','Courier & Delivery',2),
  ('logistics','warehousing','Warehousing',3),
  ('professional-services','legal','Legal Services',1),
  ('professional-services','marketing','Marketing & Advertising',2),
  ('professional-services','consulting','Business Consulting',3),
  ('beauty-personal-care','salons','Salons & Barbers',1),
  ('beauty-personal-care','spa','Spa & Wellness',2),
  ('beauty-personal-care','cosmetics','Cosmetics',3),
  ('fashion','clothing','Clothing',1),
  ('fashion','shoes','Shoes & Leather',2),
  ('fashion','traditional','Traditional Wear',3),
  ('furniture','home-furniture','Home Furniture',1),
  ('furniture','office-furniture','Office Furniture',2),
  ('home-services','cleaning','Cleaning',1),
  ('home-services','plumbing-electrical','Plumbing & Electrical',2),
  ('home-services','moving','Moving Services',3),
  ('government-organizations','government','Government Offices',1),
  ('government-organizations','ngo','NGOs & Associations',2),
  ('other','other','Other',1)
) as s(cat, slug, name, ord) on s.cat = c.slug
on conflict (category_id, slug) do nothing;