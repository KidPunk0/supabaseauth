import { createClient } from '@supabase/supabase-js';

// Replace these with your actual environment variables or hard-coded values.
// In a Next.js environment, you might use NEXT_PUBLIC_SUPABASE_URL, etc.
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL || 'https://xyzcompany.supabase.co';
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY || 'public-anon-key';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
