-- Migration: Setup Chats and Messages tables
-- Enables RLS and links chats to users

-- 1. Create Chats table
CREATE TABLE IF NOT EXISTS public.chats (
  id TEXT PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  mode TEXT NOT NULL,
  title TEXT NOT NULL,
  updated_at BIGINT NOT NULL
);

-- 2. Create Messages table
CREATE TABLE IF NOT EXISTS public.messages (
  id TEXT PRIMARY KEY,
  chat_id TEXT NOT NULL REFERENCES public.chats(id) ON DELETE CASCADE,
  role TEXT NOT NULL,
  text TEXT NOT NULL,
  created_at BIGINT NOT NULL
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.chats ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS Policies
-- Users can only view and modify their own chats
CREATE POLICY "Users can view own chats" 
ON public.chats FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own chats" 
ON public.chats FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own chats" 
ON public.chats FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own chats" 
ON public.chats FOR DELETE USING (auth.uid() = user_id);

-- Users can only view and modify messages in their own chats
CREATE POLICY "Users can view own messages" 
ON public.messages FOR SELECT 
USING (EXISTS (SELECT 1 FROM public.chats WHERE chats.id = messages.chat_id AND chats.user_id = auth.uid()));

CREATE POLICY "Users can insert own messages" 
ON public.messages FOR INSERT 
WITH CHECK (EXISTS (SELECT 1 FROM public.chats WHERE chats.id = messages.chat_id AND chats.user_id = auth.uid()));

CREATE POLICY "Users can delete own messages" 
ON public.messages FOR DELETE 
USING (EXISTS (SELECT 1 FROM public.chats WHERE chats.id = messages.chat_id AND chats.user_id = auth.uid()));
