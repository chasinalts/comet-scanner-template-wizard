-- Add site_content table for managing editable site content
-- This table stores content that can be edited through the EditableSection component

CREATE TABLE IF NOT EXISTS public.site_content (
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY,
    key text NOT NULL UNIQUE,
    content text NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    updated_at timestamp with time zone DEFAULT now()
);

-- Add primary key constraint
ALTER TABLE public.site_content ADD CONSTRAINT site_content_pkey PRIMARY KEY (id);

-- Add unique constraint on key
ALTER TABLE public.site_content ADD CONSTRAINT site_content_key_unique UNIQUE (key);

-- Set table owner
ALTER TABLE public.site_content OWNER TO postgres;

-- Enable Row Level Security
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations for authenticated users
CREATE POLICY "Allow all operations for authenticated users" ON public.site_content
    FOR ALL USING (auth.role() = 'authenticated');

-- Insert initial content for COMET explanation
INSERT INTO public.site_content (key, content) VALUES (
    'comet_explanation',
    'COMET (Custom Options Management and Execution Template) is a powerful tool designed to help traders create sophisticated PineScript indicators and strategies. This wizard guides you through a series of questions to generate customized trading code based on your specific requirements.'
) ON CONFLICT (key) DO NOTHING;

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at on row updates
CREATE TRIGGER update_site_content_updated_at
    BEFORE UPDATE ON public.site_content
    FOR EACH ROW
    EXECUTE FUNCTION public.update_updated_at_column();