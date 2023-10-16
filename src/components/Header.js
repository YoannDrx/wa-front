import Image from "next/image";
import { Button, Drawer, Dropdown, Menu, Navbar } from "react-daisyui";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { readableLocale, reversePathnameTranslate } from '../services/i18n';

export default function Header({ children, light = false, ...args }) {
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();
    const router = useRouter()

    const toggleVisible = () => {
        setVisible(!visible);
    };

    const MenuItems = () => <>
        <Menu.Item>
            <Link href={"/"}>Home</Link>
        </Menu.Item>
        <Menu.Item>
            <Link href={t("/qui-sommes-nous")}>{t('Qui sommes-nous')}</Link>
        </Menu.Item>
        <Menu.Item>
            <Link href={t("/partenaires")}>{t('Partenaires')}</Link>
        </Menu.Item>
        <Menu.Item>
            <Link href={t("/expertise")}>{t('Expertise')}</Link>
        </Menu.Item>
        <Menu.Item>
            <Link href={t("/carriere")}>{t('Carriere')}</Link>
        </Menu.Item>
        <Menu.Item>
            <Link href={t("/contact")}>{t('Contact')}</Link>
        </Menu.Item>
        <Menu.Item>
            <Dropdown className="p-0" hover horizontal="left">
                <Dropdown.Toggle button={false} className="py-2 px-4">
                    {readableLocale(router.locale)}
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-52 mt-4">
                    <Link href={t(router.pathname, {lng:'fr'})} locale='fr' className="p-2">Français</Link>
                    <Link href={t(router.pathname, {lng:'en'})} locale='en' className="p-2">English</Link>
                    <Link href={t(router.pathname, {lng:'de'})} locale='de' className="p-2">Deutsch</Link>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
    </>

    return (
        <Drawer
            {...args}
            open={visible}
            onClickOverlay={toggleVisible}
            side={
                <Menu className={`w-80 bg-base-100 ${light ? "text-white" : "text-base-content"}`}>
                    <MenuItems />
                </Menu>
            }
        >
            <div className={"mb-6"}>
                <div>
                    <Navbar className={`container ${light ? "text-white" : "text-base-content"}`}>
                        <div className="flex-none lg:hidden">
                            <Button shape="square" color="ghost" onClick={toggleVisible}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </Button>
                        </div>
                        <div className="flex-1 px-2 mx-2">
                            <Link href={"/"}>
                                <Image src={"/assets/logo_white.png"} alt={"Weil associés avocats"} width={84} height={34} />
                            </Link>
                        </div>
                        <div className="flex-none hidden lg:block">
                            <Menu horizontal={true}>
                                <MenuItems />
                            </Menu>
                        </div>
                    </Navbar>
                </div>
            </div>
            {children}
        </Drawer>
    );
};