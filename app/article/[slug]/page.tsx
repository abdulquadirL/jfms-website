import { notFound } from "next/navigation";

async function getArticle(slug: string) {
  const res = await fetch(`http://localhost:1337/api/articles/${slug}`, {
    next: { revalidate: 60 }, // ISR (optional)
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);

  if (!article) return notFound();

  return (
    <article className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>
      <div className="prose prose-lg" dangerouslySetInnerHTML={{ __html: article.content }} />
    </article>
  );
}
