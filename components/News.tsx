"use client";

import Link from "next/link";

type Article = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage?: {
    url: string;
    alternativeText?: string;
  };
};

export default function News({ articles }: { articles: Article[] }) {
  if (!articles || articles.length === 0) {
    return (
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Latest News & Events</h2>
          <p className="text-gray-500">No articles available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Latest News & Events</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <div key={article.id} className="border p-4 rounded-lg shadow hover:shadow-md transition">
              {article.featuredImage?.url && (
                <img
                  src={`http://localhost:1337${article.featuredImage.url}`}
                  alt={article.featuredImage.alternativeText || article.title}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.excerpt}</p>
              <Link
                href={`/news/${article.slug}`}
                className="text-green-700 font-medium hover:underline"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
