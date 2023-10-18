import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return <div>
        <div className={'bg-[#1C3D54] mt-6'}>
            <footer className="footer py-10 container text-white">
                <div className="leading-6">
                    <Image src={'/assets/logo_white.png'} width={168} height={67} />
                    26 Avenue de La Grande Armée
                    <br />
                    75017 PARIS FRANCE
                    <br />
                    01 44 15 98 98 / 01 44 15 98 99
                    <br />
                    info@weil-paris.fr
                </div>
                <div>
                    <h3>Weil associés</h3>
                    <Link href={'/animaux-a-adopter'}>Mentions légales</Link>
                    <Link href='/qui-sommes-nous'>Mentions légales</Link>
                    <Link href='/nous-contacter'>Mentions légales</Link>
                    <Link href='/faq'>Mentions légales</Link>
                </div>
                <div>
                <h3>Weil associés</h3>
                    <Link href='/mentions-legales'>Mentions légales</Link>
                    <Link href='/cgu'>Mentions légales</Link>
                </div>
                <div>
                <h3>Weil associés</h3>
                    <Link href='/mentions-legales' className="link link-hover">Mentions légales</Link>
                    <Link href='/cgu' className="link link-hover">Mentions légales</Link>
                </div>
            </footer>
        </div>
        <div className="bg-[#113248] text-center text-white p-5">
            2023 Weil & Associés. Legal Informations. All Rights Reserved.
        </div>
    </div>;
};

export default Footer;
