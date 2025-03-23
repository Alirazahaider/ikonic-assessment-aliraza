import GetYourWebsite from "./components/GetYourWebsite";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurWebsites from "./components/OurWebsites";
import TopBar from "./components/TopBar";
import About from "./components/About";
import WhatToExpect from "./components/WhatToExpect";
import GivingBack from "./components/GivingBack";
import ClientSays from "./components/ClientSays";
import FollowUs from "./components/FollowUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="">
     <TopBar/>
     <Header/>
     <Hero/>
     <OurWebsites/>
     <GetYourWebsite/>
     <About/>
     <WhatToExpect/>
     <GivingBack/>
     <ClientSays/>
     <FollowUs/>
     <Footer/>
    </main>
  );
}
