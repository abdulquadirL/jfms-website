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
async function getAllArticles(): Promise<Article[]> {
  const res = await fetch(
    `${API_URL}/api/articles?populate=featuredImage&sort=createdAt:desc`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    console.error("Failed to fetch all articles:", res.statusText);
    return [];
  }

  const json: { data: StrapiArticleResponse[] } = await res.json();

  return json.data.map((article) => ({
    id: article.id,
    title: article.attributes.title,
    slug: article.attributes.slug,
    excerpt: article.attributes.excerpt,
    content: article.attributes.content,
    featuredImage: article.attributes.featuredImage?.data
      ? {
          url: article.attributes.featuredImage.data.attributes.url,
          alternativeText:
            article.attributes.featuredImage.data.attributes.alternativeText,
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
