import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ddwyrkqxpmwlznjfjrwv.supabase.co';
// ¡OJO! Usa tu clave de servicio, NO la anon key
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkd3lya3F4cG13bHpuamZqcnd2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDM5NzA2NCwiZXhwIjoyMDU5OTczMDY0fQ.RQtABRxoE_v2PNZH6EU6nhnGXeMQxVsTtgfL-fsF9TI';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

export default async function handler(req, res) {
  // Solo permitir GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  try {
    // Listar usuarios (máximo 10000, puedes paginar si tienes más)
    const { data, error } = await supabase.auth.admin.listUsers({ perPage: 10000, page: 1 });
    if (error) throw error;

    return res.status(200).json({ total: data.users.length });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
