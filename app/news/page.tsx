import News from "@/components/News";

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

async function getAllArticles(): Promise<Article[]> {
  const res = await fetch(
    "http://localhost:1337/api/articles?populate=featuredImage&sort=createdAt:desc",
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error("Failed to fetch all articles:", res.statusText);
    return [];
  }

  const json = await res.json();

  // Flatten response
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

export default async function NewsPage() {
  const articles = await getAllArticles();

  return (
    <main className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">News & Events</h1>
      <News articles={articles} />
    </main>
  );
}
