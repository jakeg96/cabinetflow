import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || (import.meta.env.SUPABASE_URL as string)
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || (import.meta.env.SUPABASE_KEY as string)

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
