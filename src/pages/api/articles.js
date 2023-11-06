import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://ovnsgrllmcmvhjqxkdga.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92bnNncmxsbWNtdmhqcXhrZGdhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTI3OTYzNywiZXhwIjoyMDE0ODU1NjM3fQ.FUaj167g_UmIlYRQ0xCN-Dd8nrw1bR2N-gdF0mXjzuE')



export default async function handler(
    req,
    res
) {
    try {
        /*const { body, query, method } = req
        const { locale='fr' } = body*/

        const { data, error } = await supabase
            .from('articles')
            .select()

        res.status(200).json(data)
    } catch (error) {
        res.status(400).json({ ok: false })
    }
}
