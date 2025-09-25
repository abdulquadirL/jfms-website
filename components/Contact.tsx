// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { MapPin, Phone, Mail, Clock } from "lucide-react";


// interface ContactInfo {
//   icon: string; // from Strapi ("MapPin", "Phone", etc.)
//   title: string;
//   content: string;
//   description: string;
// }

// interface ContactProps {
//   data: {
//     title: string;
//     description: string;
//     contactInfo: ContactInfo[];
//   };
// }

// // map string values from Strapi to Lucide icons
// const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
// };

// export default function Contact({ data }: ContactProps) {
//   if (!data) return null;

//   return (
//     <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             {data.title}
//           </h2>
//           <p className="text-lg text-muted-foreground">{data.description}</p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <Card className="border-border">
//             <CardHeader>
//               <CardTitle className="text-2xl">Send Us a Message</CardTitle>
//             </CardHeader>
//             <CardContent className="space-y-6">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-2">
//                   <Label htmlFor="firstName">First Name</Label>
//                   <Input id="firstName" placeholder="Bello" />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="lastName">Last Name</Label>
//                   <Input id="lastName" placeholder="Ilya" />
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="email">Email Address</Label>
//                 <Input id="email" type="email" placeholder="bello@example.com" />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="phone">Phone Number</Label>
//                 <Input id="phone" type="tel" placeholder="+234 800 0000 111" />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="farmSize">Farm Size (ha)</Label>
//                 <Input id="farmSize" placeholder="e.g., 500" />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="service">Service Interested In</Label>
//                 <Input id="service" placeholder="e.g., Tractor purchase, Equipment rental" />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="message">Message</Label>
//                 <Textarea
//                   id="message"
//                   placeholder="Tell us about your specific needs and requirements..."
//                   rows={4}
//                 />
//               </div>

//               <Button size="lg" className="w-full">
//                 Send Message
//               </Button>
//             </CardContent>
//           </Card>

//           {/* Contact Information */}
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-2xl font-bold text-foreground mb-6">
//                 Contact Information
//               </h3>
//               <div className="space-y-6">
//                 {Array.isArray(data?.contactInfo) && data.contactInfo.length > 0 ? (
//                   data.contactInfo.map((info, index) => {
//                   const Icon = iconMap[info.icon] || MapPin; // fallback icon
//                   return (
//                     <Card key={index} className="border-border hover:shadow-md transition-shadow">
//                       <CardContent className="p-6">
//                         <div className="flex items-start space-x-4">
//                           <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                             <Icon className="h-5 w-5 text-primary" />
//                           </div>
//                           <div>
//                             <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
//                             <p className="text-foreground font-medium mb-1">{info.content}</p>
//                             <p className="text-sm text-muted-foreground">{info.description}</p>
//                           </div>
//                         </div>
//                       </CardContent>
//                     </Card>
//                   );
//                 })) : (
//                         <p className="text-muted-foreground">No contact info available</p>
//                       )}
//               </div>
//             </div>

//             {/* Service Areas */}
//             <Card className="border-border">
//               <CardHeader>
//                 <CardTitle>Service Areas</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground mb-4">
//                   We proudly serve agricultural communities across the state:
//                 </p>
//                 <ul className="space-y-2 text-sm">
//                   {[
//                     "Midwest Agricultural Belt",
//                     "Great Plains Region",
//                     "Pacific Northwest",
//                     "Southeastern Farming Communities",
//                     "Southwest Agricultural Areas",
//                   ].map((area, index) => (
//                     <li key={index} className="flex items-center">
//                       <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
//                       <span className="text-muted-foreground">{area}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <p className="text-sm text-muted-foreground mt-4">
//                   Don't see your area listed? Contact us to discuss service availability.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useState } from "react";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { MapPin, Phone, Mail, Clock } from "lucide-react";
// import { toast } from "sonner";

// interface ContactInfo {
//   icon: string; // from Strapi ("MapPin", "Phone", etc.)
//   title: string;
//   content: string;
//   description: string;
// }

// interface ContactProps {
//   data: {
//     title: string;
//     description: string;
//     contactInfo: ContactInfo[];
//   };
// }

// const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
//   MapPin,
//   Phone,
//   Mail,
//   Clock,
// };

// export default function Contact({ data }: ContactProps) {
//   if (!data) return null;

//   // --- form state ---
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     farmSize: "",
//     service: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);

//   // --- input handler ---
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//   };

//   // --- submit handler ---
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Example: POST to Strapi or your API route
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (!res.ok) throw new Error("Failed to send message");

//       toast.success("Message sent successfully!");
//       setForm({
//         firstName: "",
//         lastName: "",
//         email: "",
//         phone: "",
//         farmSize: "",
//         service: "",
//         message: "",
//       });
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to send message. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="py-20 bg-gradient-to-b from-muted/30 to-background"
//     >
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//             {data.title}
//           </h2>
//           <p className="text-lg text-muted-foreground">{data.description}</p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <Card className="border-border">
//             <CardHeader>
//               <CardTitle className="text-2xl">Send Us a Message</CardTitle>
//             </CardHeader>
//             <CardContent>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div className="space-y-2">
//                     <Label htmlFor="firstName">First Name</Label>
//                     <Input
//                       id="firstName"
//                       value={form.firstName}
//                       onChange={handleChange}
//                       placeholder="Bello"
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <Label htmlFor="lastName">Last Name</Label>
//                     <Input
//                       id="lastName"
//                       value={form.lastName}
//                       onChange={handleChange}
//                       placeholder="Ilya"
//                       required
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="email">Email Address</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={form.email}
//                     onChange={handleChange}
//                     placeholder="bello@example.com"
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="phone">Phone Number</Label>
//                   <Input
//                     id="phone"
//                     type="tel"
//                     value={form.phone}
//                     onChange={handleChange}
//                     placeholder="+234 800 0000 111"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="farmSize">Farm Size (ha)</Label>
//                   <Input
//                     id="farmSize"
//                     value={form.farmSize}
//                     onChange={handleChange}
//                     placeholder="e.g., 500"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="service">Service Interested In</Label>
//                   <Input
//                     id="service"
//                     value={form.service}
//                     onChange={handleChange}
//                     placeholder="e.g., Tractor purchase, Equipment rental"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="message">Message</Label>
//                   <Textarea
//                     id="message"
//                     value={form.message}
//                     onChange={handleChange}
//                     placeholder="Tell us about your specific needs and requirements..."
//                     rows={4}
//                   />
//                 </div>

//                 <Button type="submit" size="lg" className="w-full" disabled={loading}>
//                   {loading ? "Sending..." : "Send Message"}
//                 </Button>
//               </form>
//             </CardContent>
//           </Card>

//           {/* Contact Information */}
//           <div className="space-y-6">
//             <div>
//               <h3 className="text-2xl font-bold text-foreground mb-6">
//                 Contact Information
//               </h3>
//               <div className="space-y-6">
//                 {Array.isArray(data?.contactInfo) && data.contactInfo.length > 0 ? (
//                   data.contactInfo.map((info, index) => {
//                     const Icon = iconMap[info.icon] || MapPin;
//                     return (
//                       <Card
//                         key={index}
//                         className="border-border hover:shadow-md transition-shadow"
//                       >
//                         <CardContent className="p-6">
//                           <div className="flex items-start space-x-4">
//                             <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                               <Icon className="h-5 w-5 text-primary" />
//                             </div>
//                             <div>
//                               <h4 className="font-semibold text-foreground mb-1">
//                                 {info.title}
//                               </h4>
//                               <p className="text-foreground font-medium mb-1">
//                                 {info.content}
//                               </p>
//                               <p className="text-sm text-muted-foreground">
//                                 {info.description}
//                               </p>
//                             </div>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     );
//                   })
//                 ) : (
//                   <p className="text-muted-foreground">No contact info available</p>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client'

import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { toast } from "sonner";

interface ContactInfo {
  icon: string; // from Strapi ("MapPin", "Phone", etc.)
  title: string;
  content: string;
  description: string;
}

interface ContactProps {
  data: {
    title: string;
    description: string;
    contactInfo: ContactInfo[];
  };
}

// Map Strapi icon string to Lucide icon component
const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  MapPin,
  Phone,
  Mail,
  Clock,
};

export default function Contact({ data }: ContactProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    farmSize: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: formData }),
      });

      if (!res.ok) throw new Error("Failed to submit form");

      toast.success("Message submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        farmSize: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!data) return null;

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{data.title}</h2>
          <p className="text-lg text-muted-foreground">{data.description}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={e => handleChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={e => handleChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={e => handleChange("email", e.target.value)}
                  
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={e => handleChange("phone", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="farmSize">Farm Size (ha)</Label>
                  <Input
                    id="farmSize"
                    value={formData.farmSize}
                    onChange={e => handleChange("farmSize", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Interested In</Label>
                  <Input
                    id="service"
                    value={formData.service}
                    onChange={e => handleChange("service", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={e => handleChange("message", e.target.value)}
                    rows={4}
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-6">
              {Array.isArray(data.contactInfo) && data.contactInfo.length > 0 ? (
                data.contactInfo.map((info, index) => {
                  const Icon = iconMap[info.icon] || MapPin;
                  return (
                    <Card key={index} className="border-border hover:shadow-md transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-foreground mb-1">{info.title}</h4>
                            <p className="text-foreground font-medium mb-1">{info.content}</p>
                            <p className="text-sm text-muted-foreground">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })
              ) : (
                <p className="text-muted-foreground">No contact info available</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
