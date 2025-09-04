//interface HomePageProps {
  //        Any props if needed
   //data: {
     //_component: string;
     //id: number;
     //heading: string;
     //subheading?: string;
     //image?: { url: string; alternativeText?: string };
     //link?: { url: string; label: string };
  // }
/// }

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import News from "@/components/News";
import ServiceSection from "@/components/ServiceSection";


export default async function Page() {

  const data = await fetch('http://localhost:1337/api/home-page?populate[blocks][on][layout.hero][populate]=*')
  const homes = await data.json()

  if (!homes) {
    return <div>Loading...</div>;
  }
  return (
    <div className="min-h-screen">
      <Header />
    <main className="w-[85vw] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* <h1 className="pt-6">{homes.data.title}</h1>
        <p>{homes.data.description}</p> */}
        <HeroSection data={homes.data.blocks[0]} />
        <ServiceSection data={homes.data.blocks[1]} />
        <News data={homes.data.blocks[2]} />
        <About />
        <Contact data={homes.data.blocks[3]}/> 
    </main> 
    <Footer/>
    </div>
    
  )
}
