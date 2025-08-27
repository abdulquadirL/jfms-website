"use client";
import HeroSection, { HeroProps } from "@/components/HeroSection";
import News from "@/components/News";
import ServiceSection from "@/components/ServiceSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type HomePageData = {
  data: {
    id: number;
    heading: string;
    text: string;
    image: {
      src: string;
      alt: string;
    },
    _components: {
      HeroSection: HeroProps;
      // add other components if needed
    };
  };
  // add other properties if needed
};

export default function Home() {

  const [data, setData] = useState<HomePageData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:1337/api/home-page");
      const result = await response.json();
      console.log(result);
      setData(result);
    };
    fetchData();
  }, []);

  const heroBlock = data?.data?._components?.HeroSection ?? null;


  return (
    <div  className="w-[85vw] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <HeroSection data={heroBlock} />
      <ServiceSection/>
      <News/>
      {data ? (
        <>
          {/* <HeroSection data={data.data._components.HeroSection} /> */}
          <HeroSection data={heroBlock} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
