import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function HeroSection({ data }: { data: any }) {
  if (!data) return null;
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-agricultural-earth-light">
      <div className="container space-y-8 mx-auto px-2 sm:px-6 lg:px-8 py-20">
        {/* Mobile Hero Image*/}
        <div className="lg:hidden relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={`http://localhost:1337${data.image.url}`}
                alt={data.image.alternativeText || "Hero Image"}
                className="w-full h-[250px] lg:h-[300px] object-cover"
              />
              <div className="bg-white flex justify-between items-center p-2 ">
                <Image
                src="/ytodisc-plough.jpg"
                alt="YTO plough"
                className=" w-[100px] h-[50px] object-cover"
                />
                <Image
                  src="/ytoplanter.jpg"
                  alt="YTO Planter"
                  className="w-[100px] h-[50px] object-cover"
                />
                <Image
                  src="/grain-harvester.jpg"
                  alt="YTO Harvester"
                  className="w-[100px] h-[50px] object-cover"
                />
                <Image
                  src="/dump-trailer.jpg"
                  alt="Dump Trailer"
                  className="w-[100px] h-[50px] object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-agricultural-earth font-bold text-foreground leading-tight">
                {data.heading}
                
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                {data.text}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              {[
                "Advanced farming equipment",
                "Professional installation & support",
                "Increased crop yields",
                "Cost-effective solutions"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Our Services
              </Button>
            </div>
          </div>

          {/* Desktop Hero Image */}
          <div className="hidden relative lg:block ">

            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={`http://localhost:1337${data.image.url}`}
                alt={data.image.alternativeText || "Hero Image"}
                className="w-full h-[300px] object-cover"
                width={600}
                height={400}
              />
              <div className="bg-white flex justify-between items-center p-2 ">
                <Image
                src="/ytodisc-plough.jpg"
                alt="YTO plough"
                className=" w-[100px] h-[50px] object-cover"
                width={100}
                height={50}
                />
                <Image
                  src="/ytoplanter.jpg"
                  alt="YTO Planter"
                  className="w-[100px] h-[50px] object-cover"
                  width={100}
                  height={50}
                />
                <Image
                  src="/grain-harvester.jpg"
                  alt="YTO Harvester"
                  className="w-[100px] h-[50px] object-cover"
                  width={100}
                  height={50}
                />
                <Image
                  src="/dump-trailer.jpg"
                  alt="Dump Trailer"
                  className="w-[100px] h-[50px] object-cover"
                  width={100}
                  height={50}
                />
              </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-12 -left-12 bg-card p-3 rounded-xl shadow-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10k+</div>
                <div className="text-sm sm:text-xsm text-muted-foreground">Hectres <span className="text-primary block">Targeted</span></div>
              </div>
            </div>

            <div className="absolute -top-12 -right-6 bg-card p-3 rounded-xl shadow-lg border">
              <div className="text-center">
                <div className="text-2xl font-bold text-agricultural-earth">300+</div>
                <div className="text-sm sm:text-xsm text-muted-foreground">Tractors &<span className="text-primary block">Implements</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


