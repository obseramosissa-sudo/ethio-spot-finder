CREATE TYPE public.business_status AS ENUM ('pending', 'approved', 'rejected');

CREATE TABLE public.businesses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  category_slug TEXT NOT NULL,
  city TEXT NOT NULL,
  address TEXT NOT NULL,
  description TEXT NOT NULL,
  phone TEXT,
  website TEXT,
  rating NUMERIC(2,1) NOT NULL DEFAULT 0,
  reviews_count INTEGER NOT NULL DEFAULT 0,
  price_level INTEGER NOT NULL DEFAULT 1,
  lat NUMERIC(10,6) NOT NULL,
  lng NUMERIC(10,6) NOT NULL,
  featured BOOLEAN NOT NULL DEFAULT false,
  verified BOOLEAN NOT NULL DEFAULT false,
  status public.business_status NOT NULL DEFAULT 'pending',
  hours JSONB DEFAULT '[]',
  payment_methods TEXT[] DEFAULT '{}',
  languages TEXT[] DEFAULT '{}',
  tags TEXT[] DEFAULT '{}',
  menu_items JSONB DEFAULT '[]',
  services TEXT[] DEFAULT '{}',
  owner_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  image TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.business_photos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  business_id UUID NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  caption TEXT,
  is_primary BOOLEAN NOT NULL DEFAULT false,
  uploaded_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.reviews (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  business_id UUID NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  text TEXT,
  helpful_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.collections (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  cover_image TEXT,
  curated_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.collection_items (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  collection_id UUID NOT NULL REFERENCES public.collections(id) ON DELETE CASCADE,
  business_id UUID NOT NULL REFERENCES public.businesses(id) ON DELETE CASCADE,
  note TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  UNIQUE(collection_id, business_id)
);

GRANT SELECT ON public.businesses TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.businesses TO authenticated;
GRANT ALL ON public.businesses TO service_role;

GRANT SELECT ON public.business_photos TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.business_photos TO authenticated;
GRANT ALL ON public.business_photos TO service_role;

GRANT SELECT ON public.reviews TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.reviews TO authenticated;
GRANT ALL ON public.reviews TO service_role;

GRANT SELECT ON public.collections TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.collections TO authenticated;
GRANT ALL ON public.collections TO service_role;

GRANT SELECT ON public.collection_items TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.collection_items TO authenticated;
GRANT ALL ON public.collection_items TO service_role;

ALTER TABLE public.businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.business_photos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collection_items ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read businesses" ON public.businesses FOR SELECT TO anon USING (status = 'approved');
CREATE POLICY "Public read all approved businesses" ON public.businesses FOR SELECT TO authenticated USING (status = 'approved');
CREATE POLICY "Owners can manage their businesses" ON public.businesses FOR ALL TO authenticated USING (owner_id = auth.uid()) WITH CHECK (owner_id = auth.uid());

CREATE POLICY "Public read business photos" ON public.business_photos FOR SELECT TO anon USING (true);
CREATE POLICY "Authenticated read business photos" ON public.business_photos FOR SELECT TO authenticated USING (true);
CREATE POLICY "Photo uploaders can manage their photos" ON public.business_photos FOR ALL TO authenticated USING (uploaded_by = auth.uid()) WITH CHECK (uploaded_by = auth.uid());

CREATE POLICY "Public read reviews" ON public.reviews FOR SELECT TO anon USING (true);
CREATE POLICY "Authenticated read reviews" ON public.reviews FOR SELECT TO authenticated USING (true);
CREATE POLICY "Review authors can manage their reviews" ON public.reviews FOR ALL TO authenticated USING (user_id = auth.uid()) WITH CHECK (user_id = auth.uid());

CREATE POLICY "Public read collections" ON public.collections FOR SELECT TO anon USING (true);
CREATE POLICY "Authenticated read collections" ON public.collections FOR SELECT TO authenticated USING (true);
CREATE POLICY "Curators can manage their collections" ON public.collections FOR ALL TO authenticated USING (curated_by = auth.uid()) WITH CHECK (curated_by = auth.uid());

CREATE POLICY "Public read collection items" ON public.collection_items FOR SELECT TO anon USING (true);
CREATE POLICY "Authenticated read collection items" ON public.collection_items FOR SELECT TO authenticated USING (true);
CREATE POLICY "Curators can manage collection items" ON public.collection_items FOR ALL TO authenticated USING (EXISTS (SELECT 1 FROM public.collections WHERE id = collection_items.collection_id AND curated_by = auth.uid())) WITH CHECK (EXISTS (SELECT 1 FROM public.collections WHERE id = collection_items.collection_id AND curated_by = auth.uid()));

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_businesses_updated_at BEFORE UPDATE ON public.businesses FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_business_photos_updated_at BEFORE UPDATE ON public.business_photos FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_reviews_updated_at BEFORE UPDATE ON public.reviews FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_collections_updated_at BEFORE UPDATE ON public.collections FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();