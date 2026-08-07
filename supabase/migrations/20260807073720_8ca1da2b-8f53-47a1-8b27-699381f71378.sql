CREATE TYPE public.job_type AS ENUM ('full_time','part_time','contract','internship','temporary');

CREATE TABLE public.products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  name text NOT NULL,
  description text,
  price numeric NOT NULL DEFAULT 0,
  currency text NOT NULL DEFAULT 'ETB',
  image text,
  category text,
  is_available boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.products TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.products TO authenticated;
GRANT ALL ON public.products TO service_role;

ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read available products" ON public.products
FOR SELECT TO anon USING (
  is_available AND EXISTS (SELECT 1 FROM public.businesses b WHERE b.id = business_id AND b.status = 'approved')
);

CREATE POLICY "Authenticated read available products" ON public.products
FOR SELECT TO authenticated USING (
  (is_available AND EXISTS (SELECT 1 FROM public.businesses b WHERE b.id = business_id AND b.status = 'approved'))
  OR EXISTS (SELECT 1 FROM public.businesses b WHERE b.id = business_id AND b.owner_id = auth.uid())
);

CREATE POLICY "Owners manage their products" ON public.products
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.businesses b WHERE b.id = business_id AND b.owner_id = auth.uid()))
WITH CHECK (EXISTS (SELECT 1 FROM public.businesses b WHERE b.id = business_id AND b.owner_id = auth.uid()));

CREATE TRIGGER update_products_updated_at BEFORE UPDATE ON public.products
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TABLE public.job_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id uuid NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL,
  employment_type public.job_type NOT NULL DEFAULT 'full_time',
  location text,
  salary_min numeric,
  salary_max numeric,
  currency text NOT NULL DEFAULT 'ETB',
  apply_contact text,
  closes_at date,
  is_open boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.job_posts TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.job_posts TO authenticated;
GRANT ALL ON public.job_posts TO service_role;

ALTER TABLE public.job_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read open jobs" ON public.job_posts
FOR SELECT TO anon USING (
  is_open AND EXISTS (SELECT 1 FROM public.businesses b WHERE b.id = business_id AND b.status = 'approved')
);

CREATE POLICY "Authenticated read open jobs" ON public.job_posts
FOR SELECT TO authenticated USING (
  (is_open AND EXISTS (SELECT 1 FROM public.businesses b WHERE b.id = business_id AND b.status = 'approved'))
  OR EXISTS (SELECT 1 FROM public.businesses b WHERE b.id = business_id AND b.owner_id = auth.uid())
);

CREATE POLICY "Owners manage their job posts" ON public.job_posts
FOR ALL TO authenticated
USING (EXISTS (SELECT 1 FROM public.businesses b WHERE b.id = business_id AND b.owner_id = auth.uid()))
WITH CHECK (EXISTS (SELECT 1 FROM public.businesses b WHERE b.id = business_id AND b.owner_id = auth.uid()));

CREATE TRIGGER update_job_posts_updated_at BEFORE UPDATE ON public.job_posts
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE INDEX idx_products_business ON public.products(business_id);
CREATE INDEX idx_job_posts_business ON public.job_posts(business_id);