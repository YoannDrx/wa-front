import Button from "@/components/Button"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Image from "next/image"

const Jumbo = () => {
  return <div className="jumbo-background pt-[112px] mt-[-112px]">
    <div className="container">
      <div className="flex justify-between items-center pt-24 pb-36">
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

  return <div>
    <Header>
      <div className="min-h-screen">
        <Jumbo />

      </div>

      <Footer />
    </Header>
  </div>
}

Home.getLayout = Comp => Comp

export default Home