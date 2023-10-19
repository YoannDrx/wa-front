import Image from "next/image";
import { Button, Drawer, Dropdown, Menu, Navbar } from "react-daisyui";
import { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { readableLocale, reversePathnameTranslate } from '../services/i18n';
import FR from '@/components/lang/FR';
import UK from '@/components/lang/UK';
import DE from '@/components/lang/DE';

const LangMenu = () => {
    const router = useRouter()
    const { t } = useTranslation();

    return <Dropdown className="p-0" hover vertical="bottom">
        <Dropdown.Toggle button={false} className="py-2 px-4">
            {readableLocale(router.locale)}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Link href={t(router.pathname, { lng: 'fr' })} locale='fr' className="p-2 gap-2 flex"><FR/> Français</Link>
            <Link href={t(router.pathname, { lng: 'en' })} locale='en' className="p-2 gap-2 flex"><UK /> English</Link>
            <Link href={t(router.pathname, { lng: 'de' })} locale='de' className="p-2 gap-2 flex"><DE /> Deutsch</Link>
        </Dropdown.Menu>
    </Dropdown>
}

export default function Header({ children, light = false, ...args }) {
    const [visible, setVisible] = useState(false);
    const { t } = useTranslation();

    const toggleVisible = () => {
        setVisible(!visible);
    };

    const MenuItems = () => <>
        <Menu.Item>
            <Link href={"/"} className="font-semibold text-lg">{t('Accueil')}</Link>
        </Menu.Item>
        <Menu.Item>
            <Link href={t("/qui-sommes-nous")} className="font-semibold text-lg">{t('Qui sommes-nous')}</Link>
        </Menu.Item>
        <Menu.Item>
            <Link href={t("/partenaires")} className="font-semibold text-lg">{t('Partenaires')}</Link>
        </Menu.Item>
        <Menu.Item>
            <Link href={t("/expertise")} className="font-semibold text-lg">{t('Expertise')}</Link>
        </Menu.Item>
        <Menu.Item>
            <Link href={t("/carriere")} className="font-semibold text-lg">{t('Carriere')}</Link>
        </Menu.Item>
        <Menu.Item>
            <Link href={t("/contact")} className="font-semibold text-lg">{t('Contact')}</Link>
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
                    <LangMenu />
                </Menu>
            }
        >
            <div>
                <div>
                    <Navbar className={`container ${light ? "text-white" : "text-base-content"}`}>
                        <div className="flex-none lg:hidden">
                            <Button shape="square" color="ghost" onClick={toggleVisible}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </Button>
                        </div>
                        <div className="flex-none px-2 mx-2">
                            <Link href={"/"}>
                                <Image src={"/assets/logo.png"} alt={"Weil associés avocats"} width={168} height={68} />
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
};