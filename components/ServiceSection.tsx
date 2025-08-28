import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tractor, Wrench, Truck, Users, Settings, Headphones } from "lucide-react";

export default function ServiceSection({ data }: { data: any }) {
  if (!data) return null;
  console.log(data);
  const services = [
    {
      icon: Tractor,
      title: "Agricultural Machinery",
      description: "Premium tractors, harvesters, and specialized farming equipment from leading manufacturers.",
      features: ["Latest technology", "Fuel efficient", "High productivity"]
    },
    {
      icon: Wrench,
      title: "Equipment Maintenance",
      description: "Professional maintenance and repair services to keep your machinery running at peak performance.",
      features: ["Preventive care", "Expert technicians", "Genuine parts"]
    },
    {
      icon: Truck,
      title: "Equipment Rental",
      description: "Flexible rental solutions for seasonal needs or equipment trials before purchase.",
      features: ["Short & long term", "Delivery included", "Operator training"]
    },
    {
      icon: Users,
      title: "Training Programs",
      description: "Comprehensive training for operators and maintenance staff on modern agricultural equipment.",
      features: ["Certified instructors", "Hands-on training", "Safety focused"]
    },
    {
      icon: Settings,
      title: "Custom Solutions",
      description: "Tailored mechanization solutions designed specifically for your farm's unique requirements.",
      features: ["Site assessment", "Custom design", "Implementation support"]
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support and emergency services to minimize downtime.",
      features: ["Emergency response", "Remote diagnostics", "Parts availability"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {/* Comprehensive Agricultural Solutions */}
            {data.heading}
          </h2>
          <p className="text-lg text-muted-foreground">
            {data.subheading}
            {/* From cutting-edge machinery to expert support, we provide everything you need 
            to modernize your agricultural operations and maximize productivity. */}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/5 rounded-2xl p-8 border border-primary/10">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Transform Your Farm?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let our experts help you choose the right mechanization solutions for your specific needs. 
            Get a personalized consultation and quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg">
              Request Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
