import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL || (process.env.SUPABASE_URL as string)
const supabaseKey = process.env.VITE_SUPABASE_KEY || (process.env.SUPABASE_KEY as string)

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseKey)
