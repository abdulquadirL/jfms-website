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

type Article = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: {
    url: string;
    alternativeText?: string;
  };
};

async function getArticles(): Promise<Article[]> {
  const res = await fetch(
    "http://localhost:1337/api/articles?populate=featuredImage&sort=createdAt:desc&pagination[limit]=3",
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error("Failed to fetch articles:", res.statusText);
    return [];
  }

  const json = await res.json();

  // Flatten response: extract only the fields we need
  return json.data.map((article: any) => ({
    id: article.id,
    title: article.title,
    slug: article.slug,
    excerpt: article.excerpt,
    content: article.content,
    featuredImage: article.featuredImage
      ? {
          url: article.featuredImage.url,
          alternativeText: article.featuredImage.alternativeText,
        }
      : undefined,
  }));
}


export default async function Page() {
  const articles = await getArticles();

  const data = await fetch('http://localhost:1337/api/home-page?populate[blocks][on][layout.hero][populate]=*')
  const homes = await data.json()
//data={homes.data.blocks[2]}
  if (!homes) {
    return <div>Loading...</div>;
  }
  return (
    <div className="min-h-screen">
    <main className="w-[85vw] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* <h1 className="pt-6">{homes.data.title}</h1>
        <p>{homes.data.description}</p> */}
        <HeroSection data={homes.data.blocks[0]} />
        <ServiceSection data={homes.data.blocks[1]} />
        <News articles={articles} />
        <About />
        <Contact data={homes.data.blocks[3]} />
    </main>
    
    </div>
    
  )
}
