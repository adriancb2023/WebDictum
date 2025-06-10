const SUPABASE_URL = 'https://mxflflxofhuvzskfiyvx.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmJhc2UiLCJyZWYiOiJteGZsZmx4b2ZodXZ6c2tmaXl2eCIsInyb2xlIjoiYW5vbiIsImlhdCI6MTcxNTg3Nzk0MiwiZXhwIj0yMDMxNDUzOTQyfQ.I4rP92hXQ2V5wY_Jz28wL0W2x_Zf8k0d4tN-s2Gk9pI';

let supabase;

function initializeSupabase() {
    console.log("Attempting to initialize Supabase...");
    if (typeof Supabase !== 'undefined' && Supabase.createClient) {
        supabase = Supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        console.log("Supabase client initialized:", supabase);
    } else {
        console.error("ERROR: Supabase global object or createClient not available in config.js");
    }
}

// Ensure Supabase is initialized once the DOM is fully loaded and Supabase library is available
document.addEventListener('DOMContentLoaded', () => {
    initializeSupabase();
});