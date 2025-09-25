"use client"
import React from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";

type FeaturedImage = {
  id: number;
  url: string;
  alternativeText?: string | null;
};

type Article = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: FeaturedImage;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

async function getArticle(slug: string): Promise<Article | null> {
  const res = await fetch(
    `${API_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return null;

  const json = await res.json();
  if (json.data.length === 0) return null;

  return json.data[0] as Article;
}

async function getSuggestedArticles(slug: string): Promise<Article[]> {
  const res = await fetch(
    `${API_URL}/api/articles?filters[slug][$ne]=${slug}&populate=*&pagination[limit]=3&sort=createdAt:desc`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return [];

  const json = await res.json();
  return json.data as Article[];
}

export default async function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const article = await getArticle(params.slug);

  if (!article) {
    return notFound();
  }

  const suggested = await getSuggestedArticles(params.slug);

  return (
    <article className="max-w-4xl mx-auto px-6 py-12">
      {/* Article Header */}
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

      {article.featuredImage?.url && (
        <Image
          width={1200}
          height={600}
          src={`${API_URL}${article.featuredImage.url}`}
          alt={article.featuredImage.alternativeText || ""}
          className="w-full max-h-[500px] object-cover rounded mb-6"
        />
      )}

      {/* Content */}
      <div
        className="prose prose-lg"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Suggested Reads */}
      {suggested.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Suggested Reads</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {suggested.map((s) => (
              <div
                key={s.id}
                className="border rounded-lg shadow p-4 flex flex-col"
              >
                {s.featuredImage?.url && (
                  <Image
                    width={400}
                    height={200}
                    src={`${API_URL}${s.featuredImage.url}`}
                    alt={s.featuredImage.alternativeText || ""}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                )}

                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-600 mb-3">{s.excerpt}</p>

                <Link
                  href={`/news/${s.slug}`}
                  className="mt-auto inline-block text-green-700 font-medium hover:underline"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
