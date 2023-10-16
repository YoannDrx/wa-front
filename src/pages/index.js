import Button from "@/components/Button"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"
import { useTranslation } from 'react-i18next';

const Jumbo = () => {
  return <div className="jumbo-background">
    <div className="container">
      <div className="flex flex-col xl:flex-row justify-between items-center pt-24 pb-36 gap-24">
        <div className="flex-1">
          <h1>Your trust is our pride</h1>
          <p>
            A Boutique Law Firm dedicated To Support International Companies
          </p>
          <Button color='primary'>Contact Us</Button>
        </div>
        <div className="flex-1">
          <video src="/assets/home/cabinet.mp4" />
        </div>
      </div>
    </div>
  </div>
}

function Home() {
  const { t } = useTranslation()

  return <div>
    <Header>
      <div className="min-h-screen">
        <Jumbo />
        <div className="container py-20">
          <div className="flex flex-col xl:flex-row justify-between items-center gap-24">
            <div className="flex-1">
              <div className="flex gap-2">
                <Image src={"/assets/home/berlin.jpg"} width={200} height={200} alt="Avocat Berlin" />
                <Image src={"/assets/home/paris.jpg"} width={200} height={200} alt="Avocat Paris" />
                <Image src={"/assets/home/nyc.jpg"} width={200} height={200} alt="Avocat New York City" />
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-center underblue">{t('A propos')}</h2>
              <p>
                WEIL & ASSOCIES is a law firm dedicated to the service of international companies since 1974. Our firm is dedicated to assisting international companies, small and medium-sized, in their commercial or industrial activities in France or abroad through proactive legal advice as well as by the defense of our clients before the courts and arbitral tribunals.
                We think further, We work Smarter & We act Swiftly
                <br />
                <br />
                We represent & advise clients on a domestic and international level from corporate and commercial transactions including mergers and acquisitions, joint ventures, technology transfers, litigation & arbitration, White collar crime, employment and labor law, to corporate governance & law.
                Our team of about twenty people, focuses exclusively on your business needs to bring you excellent services & solutions in a more efficient & sustainable way.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[url('/assets/home/rectangle29.png')] bg-cover">
          <div className="container py-20">
            <div className="flex flex-col xl:flex-row justify-between items-center gap-24">
              <div>Further. Smarter. Swiftly</div>
              <div>
                Our firm is a member of an international network of law firms sharing its culture of excellence and efficiency. Our lawyers are also admitted to practice before foreign bars, including Germany or the New York Bar in the United States. In addition to French and English, the team also works in German, making the firm a high-level partner with expertise in cross-border business relations between France and Germany.
              </div>
            </div>
          </div>
        </div>
        <div className="container py-20">
          <h2 className="text-center underblue">Articles</h2>
        </div>
      </div>
      <Footer />
    </Header>
  </div>
}

Home.getLayout = Comp => Comp

export default Home