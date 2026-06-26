import { apiAuthCheck } from "@/utils/apiAuthCheck";
import { createSupabaseAdminClient, createSupabaseAuthClient, createSupabaseServerClient } from "@/services/supabase";

export default async function handler(req, res) {
  try {
    switch (req.method) {
      case "GET":
        const supabase = createSupabaseServerClient();
        const { data: getData, error: errorData } = await supabase.from("articles").select();

        if (errorData) throw errorData;
        res.status(200).json(getData);
        break;
      case "POST":
        const parameters = req.body;
        await apiAuthCheck(createSupabaseAuthClient(), req);

        const supabaseAdmin = createSupabaseAdminClient();
        const { data: dataPost, error: errorPost } = await supabaseAdmin.from("articles").insert(parameters);

        if (errorPost) throw errorPost;
        res.status(201).json(dataPost);

        break;
      default:
        res.setHeader("Allow", ["GET", "POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.log(`0823 `, error);
    res.status(400).json({ ok: false, error: error.message });
  }
}
