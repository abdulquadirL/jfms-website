
import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import News from "@/components/News";
import ServiceSection from "@/components/ServiceSection";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";


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
    `${API_URL}/api/articles?populate=featuredImage&sort=createdAt:desc&pagination[limit]=3`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error("Failed to fetch articles:", res.statusText);
    return [];
  }

  const json = await res.json();

  return json.data.map((item: any) => ({
    id: item.id,
    title: item.title,
    slug: item.slug,
    excerpt: item.excerpt,
    content: item.content,
    featuredImage: item.featuredImage
      ? {
          url: item.featuredImage.url,
          alternativeText: item.featuredImage.alternativeText,
        }
      : undefined,
  }));
}



export default async function Page() {
  const [articles, homeRes] = await Promise.all([
    getArticles(),
    fetch(
      `${API_URL}/api/home-page?populate[blocks][populate]=*`,
      { cache: "no-store" }
    ),
  ]);

  if (!homeRes.ok) {
    return <div>Failed to load homepage</div>;
  }

  const homes = await homeRes.json();

  const blocks = homes?.data?.blocks ?? [];

  const heroBlock = blocks.find(
  (block: any) => block.__component === 'blocks.hero'
);


  const serviceBlock = blocks.find(
    (block: any) => block.__component === "blocks.service-section"
  );

  const contactBlock = blocks.find(
    (block: any) => block.__component === "blocks.contact-section"
  );

  return (
    <main className="min-h-screen w-[85vw] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {heroBlock && <HeroSection data={heroBlock} />}
      {serviceBlock && <ServiceSection data={serviceBlock} />}
      {<News articles={articles} />}
      <About />
      <Contact data={contactBlock} />
    </main>
  );
}
