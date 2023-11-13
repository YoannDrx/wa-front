import { apiAuthCheck } from "@/utils/apiAuthCheck";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
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
