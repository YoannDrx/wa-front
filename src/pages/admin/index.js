import { useState, useEffect, useCallback } from "react";
import { createSupabaseBrowserClient } from "@/services/supabase";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import Head from "next/head";
import { useTranslation } from "react-i18next";
import Image from "next/image";

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
      className="flex min-h-screen items-center justify-center bg-cover px-4"
      style={{ backgroundImage: "url('/assets/home/rectangle29.png')" }}>
      <Head>
        <title>Admin</title>
        <meta name="description" content={t("admin.pageDescriptionSEO")} />
      </Head>

      <div className="w-full max-w-md border border-primary/15 bg-white p-8 shadow-[0_28px_80px_rgba(17,50,72,0.16)]">
        <div className="mb-8 flex justify-center">
          <Image src="/assets/logo.png" alt="Weil associés avocats" width={162} height={70} className="h-auto w-36" priority />
        </div>
        <div>
          <h2 className="mb-8 text-center">Admin Login</h2>
          <div className="mb-5">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="wa-form-field border-primary/20"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-7">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="wa-form-field border-primary/20"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <Button onClick={handleLogin} size="lg" className="min-w-36">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

New.getLayout = function getLayout(page) {
  return page;
};
