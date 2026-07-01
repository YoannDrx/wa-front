import Image from "next/image";
import Link from "next/link";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F4F7F9] text-neutral">
      <header className="border-b border-primary/15 bg-white">
        <div className="container flex min-h-20 items-center justify-between gap-6 py-3">
          <Link href="/admin/articles" className="inline-flex items-center gap-3" aria-label="Administration Weil & Associés">
            <Image src="/assets/logo.png" alt="Weil associés avocats" width={162} height={70} className="h-auto w-32" priority />
            <span className="hidden border-l border-primary/20 pl-4 text-sm font-bold uppercase tracking-[0.18em] text-primary md:inline">
              Admin
            </span>
          </Link>
          <nav className="flex items-center gap-2 text-sm font-bold" aria-label="Navigation admin">
            <Link href="/admin/articles" className="px-3 py-2 text-neutral transition hover:bg-light-blue hover:text-primary">
              Articles
            </Link>
            <Link href="/" className="px-3 py-2 text-primary transition hover:bg-light-blue">
              Site public
            </Link>
          </nav>
        </div>
      </header>
      <main className="container py-10 md:py-12">{children}</main>
    </div>
  );
}
