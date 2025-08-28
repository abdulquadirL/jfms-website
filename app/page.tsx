// import { fetchStrapiData } from "@/lib/strapi";
// import Header from "@/components/Header";
// import HeroSection from "@/components/HeroSection";
// import ServiceSection from "@/components/ServiceSection";
// import News from "@/components/News";
// //import About from "../components/About";
// import Footer from "@/components/Footer";
// import HeroProps from "@/components/HeroSection";
// interface HomePageProps {
//   // Any props if needed
//   data: {
//     _component: string;
//     id: number;
//     heading: string;
//     subheading?: string;
//     image?: { url: string; alternativeText?: string };
//     link?: { url: string; label: string };
//   }
// }

import About from "@/components/About";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import News from "@/components/News";
import NewsAndEvents from "@/components/News";
import ServiceSection from "@/components/ServiceSection";

// export default async function HomePage(HomePageProps: Readonly<HomePageProps>) {
//   const home = await fetchStrapiData("home-page?populate[blocks][on][layout.hero][populate][image][fields][0]=url&populate[blocks][on][layout.hero][populate][image][fields][1]=alternativeText&populate[blocks][on][layout.hero][populate][link]=true");

//   if (!home?.data) return <p className="text-center mt-20">Failed to load content.</p>;

//   const hero = home.data.hero;
//   console.log("Hero Data:", hero);
//   const services = home.data.services || [];
//   const posts = home.data.news || [];
//   const about = home.data.about || "";

//   return (
//     <main>
//       <Header />
//       <HeroSection heading={""} text={""}  />
      
//       {/* <ServiceSection services={services} />
//       <News posts={posts} /> */}
    
//       <Footer />
//     </main>
//   );
// }

export default async function Page() {
  const data = await fetch('http://localhost:1337/api/home-page?populate[blocks][on][layout.hero][populate]=*')
  const homes = await data.json()
  console.log(homes.data.title);
  console.log(homes.data.blocks[0]);
  if (!homes) {
    return <div>Loading...</div>;
  }
  return (
    <main>
    <div className="w-[85vw] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="pt-6">{homes.data.title}</h1>
        <p>{homes.data.description}</p>
        <HeroSection data={homes.data.blocks[0]} />
        <ServiceSection data={homes.data.blocks[1]} />
        <News data={homes.data.blocks[3]} />
        <About />
        {/* <Contact /> */}
    </div>
    <Footer/>
    </main>
    
  )
}
