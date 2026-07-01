import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import DE from "@/components/lang/DE";
import FR from "@/components/lang/FR";
import UK from "@/components/lang/UK";
import { readableLocale } from "../services/i18n";

const menuData = [
  { href: "/", label: "Accueil" },
  { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
  { href: "/team/partenaires", label: "Nos associés" },
  { href: "/expertise", label: "Expertise" },
  { href: "/carriere", label: "Carrière" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

const languages = [
  { locale: "fr", label: "Français", icon: FR },
  { locale: "en", label: "English", icon: UK },
  { locale: "de", label: "Deutsch", icon: DE },
];

const actualPathname = (pathname, query) => pathname.replace(/\[([^\]]+)\]/g, (_, paramName) => query[paramName] || "");

const getLocalizedHref = ({ locale, pathname, query, t }) => actualPathname(t(pathname, { lng: locale }), query);

const HeaderLogo = () => (
  <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Weil & Associés - Accueil">
    <Image
      src="/assets/logo.png"
      alt="Weil associés avocats"
      width={162}
      height={70}
      sizes="162px"
      className="h-auto w-[132px] md:w-[150px]"
      priority
    />
  </Link>
);

const MenuItemLink = ({ href, label, onNavigate, mobile = false }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const isActive = router.pathname === href;

  return (
    <Link
      href={t(href)}
      onClick={onNavigate}
      className={[
        "relative font-semibold transition-colors duration-200",
        mobile ? "text-3xl text-white hover:text-light-blue" : "text-[15px] text-neutral hover:text-primary",
        isActive
          ? mobile
            ? "text-light-blue after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-full after:bg-light-blue"
            : "text-primary after:absolute after:-bottom-3 after:left-0 after:h-0.5 after:w-full after:bg-primary"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}>
      {t(label)}
    </Link>
  );
};

const MobileMenuItem = ({ href, label, index, onNavigate }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const isActive = router.pathname === href;

  return (
    <Link
      href={t(href)}
      onClick={onNavigate}
      className={[
        "group grid grid-cols-[3rem_1fr_auto] items-center gap-3 border-b border-white/[0.14] py-4 text-white transition duration-300",
        "hover:border-light-blue/70 hover:text-light-blue",
        isActive ? "border-light-blue text-light-blue" : "",
      ]
        .filter(Boolean)
        .join(" ")}>
      <span className="font-mono text-xs font-bold text-white/45 transition group-hover:text-light-blue/80">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="text-[clamp(1.75rem,9vw,3.75rem)] font-bold leading-none tracking-normal">{t(label)}</span>
      <span className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-white/18 text-xs transition group-hover:translate-x-1 group-hover:border-light-blue">
        <FaArrowRight aria-hidden="true" />
      </span>
    </Link>
  );
};

const LanguageLinks = ({ mobile = false, onNavigate }) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div className={mobile ? "mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap" : "flex flex-col gap-1 p-2"}>
      {languages.map(({ locale, label, icon: Icon }) => (
        <Link
          key={locale}
          href={getLocalizedHref({ locale, pathname: router.pathname, query: router.query, t })}
          locale={locale}
          onClick={onNavigate}
          className={[
            "inline-flex items-center gap-2 transition-colors",
            mobile
              ? "min-h-12 border border-white/30 px-4 py-3 text-sm text-white hover:border-white hover:bg-white hover:text-primary"
              : "px-3 py-2 text-sm text-neutral hover:bg-light-blue hover:text-primary",
            router.locale === locale ? "font-bold" : "",
          ]
            .filter(Boolean)
            .join(" ")}>
          <Icon id={`lang-${locale}`} />
          {label}
        </Link>
      ))}
    </div>
  );
};

const DesktopLanguageMenu = () => {
  const router = useRouter();

  return (
    <details className="group relative">
      <summary className="flex cursor-pointer list-none items-center gap-2 px-3 py-2 text-sm font-semibold text-neutral transition-colors hover:text-primary">
        {readableLocale(router.locale)}
        <span aria-hidden="true" className="text-xs transition-transform group-open:rotate-180">
          ▾
        </span>
      </summary>
      <div className="absolute right-0 top-full z-40 mt-3 min-w-44 border border-light-blue bg-white shadow-[0_18px_45px_rgba(17,50,72,0.14)]">
        <LanguageLinks />
      </div>
    </details>
  );
};

const MobileOverlay = ({ open, onClose }) => {
  const shouldReduceMotion = useReducedMotion();
  const overlayTransition = shouldReduceMotion ? { duration: 0 } : { duration: 0.25, ease: "easeOut" };
  const itemTransition = shouldReduceMotion ? { duration: 0 } : { duration: 0.35, ease: "easeOut" };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-navigation"
          className="fixed inset-0 z-50 overflow-y-auto bg-wa-ink text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={overlayTransition}>
          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
            <motion.div
              className="absolute -left-24 top-20 h-[38rem] w-[38rem] rounded-full border border-white/10"
              initial={{ scale: 0.82, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: "easeOut" }}
            />
            <div className="wa-blueprint absolute inset-0 opacity-[0.08]" />
            <div className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(90deg,transparent,rgba(55,116,158,0.18))]" />
          </div>
          <div className="container relative flex min-h-dvh flex-col py-6">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={onClose} className="inline-flex" aria-label="Weil & Associés - Accueil">
                <Image src="/assets/logo_white.png" alt="Weil associés avocats" width={168} height={67} className="h-auto w-36" />
              </Link>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-12 w-12 items-center justify-center rounded-[4px] border border-white/40 bg-white text-primary transition-colors hover:bg-light-blue"
                aria-label="Fermer le menu">
                <span aria-hidden="true" className="text-3xl leading-none">
                  ×
                </span>
              </button>
            </div>

            <nav aria-label="Navigation mobile" className="flex flex-1 flex-col justify-center py-10">
              <motion.div
                className="flex flex-col"
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.045 } },
                  closed: {},
                }}>
                {menuData.map((item, index) => (
                  <motion.div
                    key={item.href}
                    variants={{
                      closed: { opacity: 0, y: shouldReduceMotion ? 0 : 14 },
                      open: { opacity: 1, y: 0, transition: itemTransition },
                    }}>
                    <MobileMenuItem {...item} index={index} onNavigate={onClose} />
                  </motion.div>
                ))}
              </motion.div>

              <LanguageLinks mobile onNavigate={onClose} />
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default function Header({ children, light = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const router = useRouter();

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((current) => !current);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const onRouteChangeComplete = () => {
      setIsHidden(false);
      lastScrollY.current = 0;
    };

    router.events.on("routeChangeStart", closeMenu);
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", closeMenu);
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, [router.events]);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      setIsScrolled(currentY > 8);

      if (currentY < 120 || delta < -8 || isMenuOpen) {
        setIsHidden(false);
      } else if (delta > 8) {
        setIsHidden(true);
      }

      lastScrollY.current = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  return (
    <>
      <motion.header
        className={[
          "fixed left-0 top-0 z-40 w-full border-b transition-colors duration-300",
          isScrolled ? "border-primary/15 bg-white/90 shadow-[0_14px_40px_rgba(17,50,72,0.08)] backdrop-blur-xl" : "border-light-blue bg-white/95",
          light ? "text-white" : "text-base-content",
        ].join(" ")}
        animate={{ y: isHidden && !isMenuOpen ? "-100%" : "0%" }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        onFocus={() => setIsHidden(false)}>
        <div className="container flex min-h-20 items-center justify-between gap-6 py-3 md:min-h-[90px]">
          <HeaderLogo />

          <nav aria-label="Navigation principale" className="hidden flex-1 items-center justify-end gap-6 lg:flex">
            <div className="flex items-center gap-5">
              {menuData.map((item) => (
                <MenuItemLink key={item.href} {...item} />
              ))}
            </div>
            <DesktopLanguageMenu />
          </nav>

          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex h-12 w-12 items-center justify-center border border-primary text-primary transition-colors hover:bg-primary hover:text-white lg:hidden"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation">
            <span className="sr-only">{isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}</span>
            <span aria-hidden="true" className="flex w-6 flex-col gap-1.5">
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
            </span>
          </button>
        </div>
      </motion.header>
      <div className="h-20 md:h-[90px]" aria-hidden="true" />

      <MobileOverlay open={isMenuOpen} onClose={closeMenu} />
      {children}
    </>
  );
}
