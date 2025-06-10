// Configuración de Supabase
// Reemplaza estos valores con tu configuración real de Supabase

const SUPABASE_CONFIG = {
    URL: 'https://ddwyrkqxpmwlznjfjrwv.supabase.co', // Ejemplo: 'https://tu-proyecto.supabase.co'
    ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkd3lya3F4cG13bHpuamZqcnd2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzOTcwNjQsImV4cCI6MjA1OTk3MzA2NH0.G2LzHWbC09LC69bj9wONzhD_a6AfFI1ZYFuQ3KD7XhI' // Tu clave anónima pública
};

// Función para obtener la configuración
function getSupabaseConfig() {
    return SUPABASE_CONFIG;
}

// Función para inicializar Supabase
function initializeSupabase() {
    if (typeof Supabase !== 'undefined' && typeof Supabase.createClient !== 'undefined') {
        const supabaseClient = Supabase.createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.ANON_KEY);
        console.log('Supabase client inicializado correctamente desde config.js', supabaseClient);
        return supabaseClient;
    } else {
        console.error('ERROR: Supabase global object o createClient no están disponibles en config.js. Asegúrate de que el script de Supabase CDN esté cargado.');
        return null;
    }
} 