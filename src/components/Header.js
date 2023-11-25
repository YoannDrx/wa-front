import Image from "next/image";
import { Button, Drawer, Dropdown, Menu, Navbar } from "react-daisyui";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { readableLocale } from "../services/i18n";
import FR from "@/components/lang/FR";
import UK from "@/components/lang/UK";
import DE from "@/components/lang/DE";

const actualPathname = (pathname, query) => {
  const actualPath = pathname.replace(/\[([^\]]+)\]/g, (_, paramName) => query[paramName] || "");

  return actualPath;
};

const LangMenu = () => {
  const router = useRouter();

  const { t } = useTranslation();

  return (
    <Dropdown className="p-0" hover vertical="bottom">
      <Dropdown.Toggle button={false} className="px-4 z-50">
        {readableLocale(router.locale)}
      </Dropdown.Toggle>
      <Dropdown.Menu className="z-50">
        <Link href={actualPathname(t(router.pathname, { lng: "fr" }), router.query)} locale="fr" className="p-2 gap-2 flex">
          <FR id={354816541} /> Français
        </Link>
        <Link href={actualPathname(t(router.pathname, { lng: "en" }), router.query)} locale="en" className="p-2 gap-2 flex">
          <UK id={35481645622} /> English
        </Link>
        <Link href={actualPathname(t(router.pathname, { lng: "de" }), router.query)} locale="de" className="p-2 gap-2 flex">
          <DE id={354816683} /> Deutsch
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const MenuItemLink = ({ href, label }) => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <Menu.Item>
      <Link href={t(href)} className={`font-semibold text-lg ${router.pathname === href ? "underblueNav" : ""}`}>
        {t(label)}
      </Link>
    </Menu.Item>
  );
};

const MenuItems = () => {
  const { t } = useTranslation();
  const menuData = [
    { href: "/", label: "Accueil" },
    { href: "/qui-sommes-nous", label: "Qui sommes-nous" },
    { href: "/team/partenaires", label: "Nos associés" },
    { href: "/expertise", label: "Expertise" },
    { href: "/carriere", label: "Carrière" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {menuData.map((item, index) => (
        <MenuItemLink key={index} {...item} />
      ))}
    </>
  );
};

export default function Header({ children, light = false, ...args }) {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  return (
    <Drawer
      {...args}
      open={visible}
      onClickOverlay={toggleVisible}
      side={
        <Menu className={`bg-base-100  ${light ? "text-white" : "text-base-content"}`}>
          <MenuItems />
          <LangMenu />
        </Menu>
      }>
      <div>
        <div>
          <Navbar className={`container ${light ? "text-white" : "text-base-content"}`}>
            <div className="flex-none lg:hidden">
              <Button shape="square" color="ghost" onClick={toggleVisible}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
            <div className="flex-none px-2 mx-2">
              <Link href={"/"}>
                <Image
                  src={"/assets/logo.png"}
                  alt={"Weil associés avocats"}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-[168px] h-auto"
                  placeholder="blur"
                  blurDataURL={"/assets/logo.png"}
                />
              </Link>
            </div>
            <div className="flex-1 hidden lg:flex flex-row justify-between">
              <Menu horizontal={true}>
                <MenuItems />
              </Menu>
              <LangMenu />
            </div>
          </Navbar>
        </div>
      </div>
      {children}
    </Drawer>
  );
}
