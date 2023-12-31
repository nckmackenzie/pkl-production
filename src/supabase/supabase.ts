import { createClient } from '@supabase/supabase-js';
import { Database } from './schema';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON;
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
