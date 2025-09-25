import About from "@/components/About";
import Contact from "@/components/Contact";
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

type StrapiArticleResponse = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    featuredImage?: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      } | null;
    };
  };
};


const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";
 
async function getArticles(): Promise<Article[]> {
  const res = await fetch(
    `${API_URL}/api/articles?populate=featuredImage&sort=createdAt:desc&pagination[limit]=3`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error("Failed to fetch articles:", res.statusText);
    return [];
  }
  const data =  await res.json();
  return data.data

  // const json: { data: StrapiArticleResponse[] } = await res.json();

  // return json.data.map((article) => ({
  //   id: article.id,
  //   title: article.attributes?.title,
  //   slug: article.attributes?.slug,
  //   excerpt: article.attributes?.excerpt,
  //   content: article.attributes?.content,
  //   featuredImage: article.attributes?.featuredImage?.data
  //     ? {
  //         url: article.attributes.featuredImage.data.attributes?.url,
  //         alternativeText: article.attributes.featuredImage.data.attributes?.alternativeText,
  //       }
  //     : undefined,
  // }));
}



export default async function Page() {
  const articles = await getArticles();
  console.log("ARTICLE:",articles)

  const data = await fetch(`${API_URL}/api/home-page?populate[blocks][on][layout.hero][populate]=*`)
  const homes = await data.json()
  console.log(homes.data.blocks[2])
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
