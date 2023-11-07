import { apiAuthCheck } from '@/utils/apiAuthCheck';
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://ovnsgrllmcmvhjqxkdga.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92bnNncmxsbWNtdmhqcXhrZGdhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTI3OTYzNywiZXhwIjoyMDE0ODU1NjM3fQ.FUaj167g_UmIlYRQ0xCN-Dd8nrw1bR2N-gdF0mXjzuE')

export default async function handler(req, res) {
    const { id } = req.query;

    await apiAuthCheck(supabase, req)

    switch (req.method) {
        case 'GET':
            try {
                const { data, error } = await supabase.from('articles').select('*').eq('id', id).single();

                if (error) throw error;

                return res.status(200).json(data);
            } catch (error) {
                return res.status(400).json({ error: error.message });
            }

        case 'PUT':
            try {
                const { data, error } = await supabase.from('articles').update(req.body).match({ id });

                if (error) throw error;

                return res.status(200).json(data);
            } catch (error) {
                return res.status(400).json({ error: error.message });
            }

        case 'DELETE':
            try {
                const { data, error } = await supabase.from('articles').delete().eq('id', id);

                if (error) throw error;

                return res.status(200).json(data);
            } catch (error) {
                return res.status(400).json({ error: error.message });
            }
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}