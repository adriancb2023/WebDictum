import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ddwyrkqxpmwlznjfjrwv.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkd3lya3F4cG13bHpuamZqcnd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzOTcwNjQsImV4cCI6MjA1OTk3MzA2NH0.G2LzHWbC09LC69bj9wONzhD_a6AfFI1ZYFuQ3KD7XhI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);