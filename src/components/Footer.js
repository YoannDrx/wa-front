import Link from "next/link";

const Footer = () => {
    return <div className={'bg-primary mt-6'}>
        <footer className="footer py-10 container text-white">
            <div>
                <span className="footer-title">Weil associés</span>
                <Link href={'/animaux-a-adopter'}>Adopter un animal</Link>
                <Link href='/qui-sommes-nous'>Qui sommes-nous</Link>
                <Link href='/nous-contacter'>Nous contacter</Link>
                <Link href='/faq'>FAQ</Link>
            </div>
            <div>
                <span className="footer-title">Articles</span>
                <Link href='/mentions-legales'>Adopter un chien</Link>
                <Link href='/cgu'>Adopter un chat</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link href='/mentions-legales' className="link link-hover">Mentions légales</Link>
                <Link href='/cgu' className="link link-hover">CGU</Link>
            </div>
        </footer></div>;
};

export default Footer;
