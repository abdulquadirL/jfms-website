import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

interface ImageProps {
  src: string;
  alt: string;
//   width: number;
//   height: number;
}

export interface HeroProps {
    id: number; 
    heading: string;
    text: string;
    image: ImageProps;

  // add other properties if needed
}

export default function HeroSection({ data }: { data: HeroProps | null }) {

    if (!data) return null;

    const { heading, text, image } = data;

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-background to-agricultural-earth-light">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                <span className="text-agricultural-earth">Jigawa</span>
                 <span className="text-primary block">Farm Mechanization</span>

                <span className="text-agricultural-earth">Services</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                {text}
                Revolutionizing farming with cutting-edge machinery and technology.
                Increase productivity, reduce costs, and maximize your agricultural potential. 
              </p>
  
            </div>
            <div>
              <h1>{data?.heading}</h1>
              <p>{data?.text}</p>
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
              {/* <Link href={link.url}>{link.text}</Link> */}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/YTOtractor.jpg"
                alt="Modern agricultural machinery in operation"
                width={300}
                height={200}
                className="w-full h-[300px] lg:h-[400px] object-cover"
              />
              <div className="bg-white flex justify-between items-center p-2 ">
                <Image
                src="/ytodisc-plough.jpg"
                alt="YTO plough"
                width={100}
                height={50}
                className="w-[100px] h-[30px] lg:h-[50px] object-cover"
                />
                <Image
                  src="/ytoplanter.jpg"
                  alt="YTO Planter"
                  width={100}
                  height={50}
                  className="w-[100px] h-[30px] lg:h-[50px] object-cover"
                />
                <Image
                  src="/grain-harvester.jpg"
                  alt="YTO Harvester"
                  width={100}
                  height={50}
                  className="w-[100px] h-[30px] lg:h-[50px] object-cover"
                />
                <Image
                  src="/dump-trailer.jpg"
                  alt="Dump Trailer"
                  width={100}
                  height={50}
                  className="w-[100px] h-[30px] lg:h-[50px] object-cover"
                />
              </div>
                
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
  )
}
