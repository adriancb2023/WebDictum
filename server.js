import express from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';

const app = express();
const PORT = 3000; // Puedes cambiar el puerto si lo necesitas

app.use(cors());

const supabaseUrl = 'https://ddwyrkqxpmwlznjfjrwv.supabase.co';
// Usa tu service_role key aquí
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkd3lya3F4cG13bHpuamZqcnd2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDM5NzA2NCwiZXhwIjoyMDU5OTczMDY0fQ.RQtABRxoE_v2PNZH6EU6nhnGXeMQxVsTtgfL-fsF9TI';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

app.get('/api/total-users', async (req, res) => {
  try {
    const { data, error } = await supabase.auth.admin.listUsers({ perPage: 10000, page: 1 });
    if (error) throw error;
    res.json({ total: data.users.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/active-sessions', async (req, res) => {
  try {
    const minutes = 60; // Cambia a los minutos que consideres "activo"
    const since = new Date(Date.now() - minutes * 60 * 1000).toISOString();

    const { data, error } = await supabase
      .from('user_activity')
      .select('user_id', { count: 'exact', head: false })
      .gte('created_at', since);

    if (error) throw error;

    // Contar usuarios únicos
    const uniqueUsers = [...new Set(data.map(item => item.user_id))];

    res.json({ activeSessions: uniqueUsers.length });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/recent-activity', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('user_activity')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(3);
    if (error) throw error;
    res.json({ activities: data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});
