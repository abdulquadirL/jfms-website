import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact({ data }: { data: any }) {  //{ data }: { data: any }
   if (!data) return null;
   console.log(data);
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Facility",
      content: "Agricultural Drive, Dutse, Jigawa State, Nigeria",
      description: "Main headquarters and equipment showroom"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+234 800 0000 111",
      description: "24/7 emergency support available"
    },
    {
      icon: Mail,
      title: "Email Us",
      content: "info@jfms.com",
      description: "We respond within 24 hours"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 8AM-6PM, Sat: 8AM-4PM",
      description: "Emergency services available 24/7"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {/* Get in Touch with Our Experts */}
            {data.heading}
          </h2>
          <p className="text-lg text-muted-foreground">
            {/* Ready to modernize your agricultural operations? Contact our experts for 
            personalized solutions and competitive pricing. */}
            {data.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Bello" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Ilya" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="bello@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+234 800 0000 111" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="farmSize">Farm Size (ha)</Label>
                <Input id="farmSize" placeholder="e.g., 500" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="service">Service Interested In</Label>
                <Input id="service" placeholder="e.g., Tractor purchase, Equipment rental" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your specific needs and requirements..."
                  rows={4}
                />
              </div>
              
              <Button size="lg" className="w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-border hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                          <p className="text-foreground font-medium mb-1">{info.content}</p>
                          <p className="text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle>Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We proudly serve agricultural communities across the state:
                </p>
                <ul className="space-y-2 text-sm">
                  {[
                    "Midwest Agricultural Belt",
                    "Great Plains Region", 
                    "Pacific Northwest",
                    "Southeastern Farming Communities",
                    "Southwest Agricultural Areas"
                  ].map((area, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      <span className="text-muted-foreground">{area}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  Don't see your area listed? Contact us to discuss service availability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
