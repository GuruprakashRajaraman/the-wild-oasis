
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://gqccwvjkpnppluglkttz.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxY2N3dmprcG5wcGx1Z2xrdHR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MTY3MzgsImV4cCI6MjA1ODk5MjczOH0.lL6uvy73XpoCyG--NUEmdq6tCMFurOtLu7UbpBU1Hgo'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;