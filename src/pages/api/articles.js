import { apiAuthCheck } from "@/utils/apiAuthCheck";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
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
