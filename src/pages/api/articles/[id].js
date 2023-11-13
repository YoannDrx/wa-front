import { apiAuthCheck } from "@/utils/apiAuthCheck";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ovnsgrllmcmvhjqxkdga.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92bnNncmxsbWNtdmhqcXhrZGdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk2MzcsImV4cCI6MjAxNDg1NTYzN30.BzufAu0K8RNkj2NB0wkAfMHV1Cza2tE40nsyhsfEWtU";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req, res) {
  const { id } = req.query;

  await apiAuthCheck(supabase, req);

  switch (req.method) {
    case "GET":
      try {
        const { data, error } = await supabase.from("articles").select("*").eq("id", id).single();

        if (error) throw error;

        return res.status(200).json(data);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }

    case "PUT":
      try {
        const { data, error } = await supabase.from("articles").update(req.body).eq("id", id).single();

        if (error) throw error;

        return res.status(200).json(data);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }

    case "DELETE":
      try {
        const { data, error } = await supabase.from("articles").delete().eq("id", id);

        if (error) throw error;

        return res.status(200).json(data);
      } catch (error) {
        return res.status(400).json({ error: error.message });
      }
    default:
      res.setHeader("Allow", ["GET", "PUT", "DELETE"]);
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
