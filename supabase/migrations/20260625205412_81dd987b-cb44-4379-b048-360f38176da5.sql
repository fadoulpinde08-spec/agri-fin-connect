
CREATE TYPE public.waitlist_role AS ENUM ('agriculteur', 'cooperative', 'acheteur', 'autre');

CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  province TEXT NOT NULL,
  role public.waitlist_role NOT NULL,
  crops TEXT,
  notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT INSERT ON public.waitlist TO anon, authenticated;
GRANT ALL ON public.waitlist TO service_role;

ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can join the waitlist"
  ON public.waitlist
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(full_name) BETWEEN 2 AND 120
    AND length(phone) BETWEEN 6 AND 30
    AND length(province) BETWEEN 2 AND 80
    AND (crops IS NULL OR length(crops) <= 300)
    AND (notes IS NULL OR length(notes) <= 500)
  );
