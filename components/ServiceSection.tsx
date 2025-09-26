"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tractor, Wrench, Truck, Users, Settings, Headphones } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

type ServiceSectionProps = {
  data: {
    heading: string;
    subheading: string;
  };
};

interface QuoteFormData {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}


  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export default function ServiceSection({ data }: ServiceSectionProps) {
  if (!data) return null;
  console.log(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

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

    // Handle input changes
  const handleChange = (field: keyof QuoteFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };


  // Submit form to Strapi


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      toast.success("Quote request submitted successfully!");
      setFormData({ name: "", phone: "", service: "", message: "" });
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit quote request");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {data.heading}
          </h2>
          <p className="text-lg text-muted-foreground">
            {data.subheading}
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
            <Button 
              size="lg" 
              onClick={() => window.location.href = "/schedule-consultation"}
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => setIsModalOpen(true)} 
            >
              Request Quote
            </Button>
          </div>
          {/* Modal for Quote Request */}
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle>Request a Quote</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={e => handleChange("name", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={e => handleChange("phone", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="service">Service Interested In</Label>
                <Input
                  id="service"
                  value={formData.service}
                  onChange={e => handleChange("service", e.target.value)}
                  placeholder="e.g., Tractor purchase, Equipment rental"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={e => handleChange("message", e.target.value)}
                  placeholder="Tell us about your specific needs..."
                />
              </div>

              <DialogFooter className="flex justify-end gap-2">
                <Button type="submit" size="lg" disabled={loading}>
                  {loading ? "Submitting..." : "Send Request"}
                </Button>
                <Button
                  type="button"
                  size="lg"
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
        </div>
      </div>
    </section>
  );
};
