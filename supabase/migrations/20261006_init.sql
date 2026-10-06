-- Migration: Setup Profiles and User Settings tables
-- Enables RLS and auto-creation of profiles on user signup

-- 1. Create Profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  display_name TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Create User Settings table
CREATE TABLE IF NOT EXISTS public.user_settings (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email_reminders BOOLEAN DEFAULT true,
  check_in_cadence TEXT DEFAULT 'weekly',
  marketing_emails BOOLEAN DEFAULT false,
  conversation_history BOOLEAN DEFAULT true,
  theme TEXT DEFAULT 'system',
  text_size TEXT DEFAULT 'default',
  reduced_motion BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_settings ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS Policies
-- Users can only view and update their own profiles
CREATE POLICY "Users can view own profile" 
ON public.profiles FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" 
ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Users can only view and update their own settings
CREATE POLICY "Users can view own settings" 
ON public.user_settings FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own settings" 
ON public.user_settings FOR UPDATE USING (auth.uid() = id);


-- 5. Trigger to auto-create profile and settings on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  -- Insert into profiles
  INSERT INTO public.profiles (id, full_name, display_name)
  VALUES (
    new.id, 
    new.raw_user_meta_data->>'full_name', 
    new.raw_user_meta_data->>'full_name'
  );

  -- Insert into user_settings with defaults
  INSERT INTO public.user_settings (id)
  VALUES (new.id);

  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
