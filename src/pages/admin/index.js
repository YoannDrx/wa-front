import { useState, useEffect, useCallback } from "react";
import { createSupabaseBrowserClient } from "@/services/supabase";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const supabase = createSupabaseBrowserClient();

supabase.auth.onAuthStateChange((event, session) => {
  // writes the cookies to a cookie on our own domain. required because cookie gets set to supabase domain by default
  if (event === "SIGNED_OUT" || event === "USER_DELETED") {
    // delete cookies on sign out
    const expires = new Date(0).toUTCString();
    document.cookie = `my-access-token=; path=/; expires=${expires}; SameSite=Lax; secure`;
    document.cookie = `my-refresh-token=; path=/; expires=${expires}; SameSite=Lax; secure`;
  } else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
    const maxAge = 100 * 365 * 24 * 60 * 60; // 100 years, never expires
    document.cookie = `my-access-token=${session.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`;
    document.cookie = `my-refresh-token=${session.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`;
  }
});

export default function New() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { t } = useTranslation();

  const onLogin = useCallback(() => {
    router.push("/admin/articles");
  }, [router]);

  useEffect(() => {
    (async () => {
      const session = await supabase.auth.getSession();
      if (session.data.session) {
        onLogin();
      }
    })();
  }, [onLogin]);

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      console.error("Error logging in:", error);
      alert("Login failed");
    } else {
      onLogin();
    }
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover"
      style={{ backgroundImage: "url('/assets/home/rectangle29.png')" }}>
      <Head>
        <title>Admin</title>
        <meta name="description" content={t("admin.pageDescriptionSEO")} />
      </Head>

      <div className="card w-96 bg-base-100 shadow-xl rounded-none">
        <div className="card-body">
          <h2 className="card-title justify-center">Admin Login</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mt-6 flex justify-center">
            <Button className="btn btn-primary" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
