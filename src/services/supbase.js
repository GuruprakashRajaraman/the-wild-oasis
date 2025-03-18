
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://gqccwvjkpnppluglkttz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxY2N3dmprcG5wcGx1Z2xrdHR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyNDg4NzEsImV4cCI6MjA1NTgyNDg3MX0.5z9oqpPLCOofnaaz_kIpPsZF7yVZbAr5YkAZd1IkPow'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;