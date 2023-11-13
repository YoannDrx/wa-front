import { apiAuthCheck } from "@/utils/apiAuthCheck";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ovnsgrllmcmvhjqxkdga.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im92bnNncmxsbWNtdmhqcXhrZGdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkyNzk2MzcsImV4cCI6MjAxNDg1NTYzN30.BzufAu0K8RNkj2NB0wkAfMHV1Cza2tE40nsyhsfEWtU";

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "GET":
        const { data: getData, error: errorData } = await supabase.from("articles").select();

        res.status(200).json(getData);
        break;
      case "POST":
        const parameters = req.body;
        await apiAuthCheck(supabase, req);

        const { data: dataPost, error: errorPost } = await supabase.from("articles").insert(parameters);

        if (errorPost) throw errorPost;
        res.status(201).json(dataPost);

        break;
    }
  } catch (error) {
    console.log(`0823 `, error);
    res.status(400).json({ ok: false, error });
  }
}
