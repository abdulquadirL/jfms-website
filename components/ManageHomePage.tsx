"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import About from "@/components/About";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import News from "@/components/News";
import ServiceSection from "@/components/ServiceSection";
import { useEffect, useState } from "react";

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

export default function ManageHomePage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [homes, setHomes] = useState<any>();

const fetchHome = async () => {
  try {
    const response = await fetch(`${API_URL}/api/home-page?populate=*`, {
      cache: "no-store",
    });
    
    if (!response.ok) throw new Error("Network response was not ok");
    
    const result = await response.json(); // THIS IS THE MISSING STEP
     console.log(result)
    setHomes(result); // result.data usually contains the content

    console.log(homes)
  } catch (err) {
    console.error("Fetch error:", err);
  }
};
  const fetchAticle = async () => {
    await fetch(
      `${API_URL}/api/articles?populate=featuredImage&sort=createdAt:desc&pagination[limit]=3`,
      { cache: "no-store" }
    ).then((data) => {
      data.json().then((datum) => {
        const articles = datum.data.map((item: any) => ({
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

        setArticles(articles)
        console.log("ARTICLES:",articles)
      });
    });
  };
  useEffect(() => {
    fetchHome();
    fetchAticle();
  }, []);

  const blocks = homes?.data?.blocks ?? [];

  const heroBlock = blocks.find(
    (block: any) => block.__component === "blocks.hero"
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
