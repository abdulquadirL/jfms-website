import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Globe, TrendingUp } from "lucide-react";

export default function About() {

  //if (!data) return null;
  const stats = [
    {
      icon: Users,
      number: "15k+",
      label: "Annual Targeted Clients",
      description: "Farmers trust our solutions"
    },
    {
      icon: Award,
      number: "25+",
      label: "Years Experience",
      description: "Decades of expertise"
    },
    {
      icon: Globe,
      number: "50+",
      label: "Centers Established",
      description: "State-wide coverage"
    },
    {
      icon: TrendingUp,
      number: "98%",
      label: "Success Rate",
      description: "Target"
    }
  ];

  const values = [
    {
      title: "Innovation",
      description: "Constantly adopting the latest agricultural technologies to provide cutting-edge solutions."
    },
    {
      title: "Reliability",
      description: "Dependable equipment and services that farmers can count on season after season."
    },
    {
      title: "Sustainability",
      description: "Promoting eco-friendly farming practices through efficient and sustainable machinery."
    },
    {
      title: "Partnership",
      description: "Building long-term relationships with farmers to support their success and growth."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Leading Agricultural Innovation
          </h2>
          <p className="text-lg text-muted-foreground">
            Jigawa Farm Mechanization Services is set to be at the forefront of agricultural 
            mechanization, helping farmers increase productivity and profitability through 
            modern technology and expert support.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 border-border hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Company Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/jigawa.jpg"
                  alt="Track"
                  className="w-full h-full object-cover"
                />
              </div>
              <p>
                Jigawa Farm Mechanization Services was established in 2025 as part of a bold
                move by the current administration to tackle hunger and improve food security
                through smarter, more efficient farming evident in the Governor's 12-Point Agenda where Agriculture is a key focus.
                Inspired by Governor Umar Namadi’s vision for a self-sufficient and food-secure Jigawa,
                the company has grown into a trusted partner for farmers across the state.
                 From tractors to training, we provide the tools, support, and innovation needed to 
                 help Jigawa’s farmers thrive—one harvest at a time.
              </p>
              <p>
                Jigawa State Government led by Governor Umar Namadi, a visionary leader, understood the challenges faced by 
                agricultural communities. This deep-rooted connection to farming drives our 
                commitment to providing not just equipment, but complete solutions that transform 
                agricultural operations.
              </p>
              <p>
                Today, we combine traditional farming wisdom with cutting-edge technology, 
                offering everything from precision tractors to smart farming systems that 
                help optimize crop yields and reduce operational costs.
              </p>
            </div>
            <Button variant="outline" size="lg">
              Learn More About Us
            </Button>
          </div>

          {/* Values */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Our Values</h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <Card key={index} className="border-border">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

         {/* Our Expert Team */}
        <div className="py-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              name: "Dr. Ado Nasiru",
              role: "Managing Director",
              experience: "",
              specialties: ["", ""],
                image: "/person.png",
              }, 
             
              {
                name: "Muhammad Ado",
                role: "Fleet Manager",
                experience: "5 years",
                specialties: ["Equipment Maintenance", "Training"],
                image: "/person.png",
              },
              {
                name: "Jabir Wada Isah",
                role: "Chief Technical Officer",
                experience: "5 years",
                specialties: ["Equipment Maintenance", "Training"],
                image: "/person.png",
              },
              {
                name: "Nura Halilu",
                role: "Chief Operation Officer",
                experience: "5 years",
                specialties: ["Equipment Maintenance", "Training"],
                image: "/person.png",
              }, {
                name: "Muhammad Dauda Bulangu",
                role: "Store Officer",
                experience: "5 years",
                specialties: ["Equipment Maintenance", "Training"],
                image: "/person.png",
              }
            ].map((member, index) => (
              <Card
                key={index}
                className="border-border hover:shadow-lg transition-shadow h-full flex flex-col items-center text-center"
                aria-label={`Profile of ${member.name}, ${member.role}`}
              >
                <CardHeader className="pb-3 flex flex-col items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mb-3 border-2 border-primary shadow"
                    loading="lazy"
                  />
                  <CardTitle className="text-lg font-semibold">{member.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardHeader>
                <CardContent className="pt-0 flex-1 flex flex-col">
                  {/* <p className="text-muted-foreground mb-2">{member.experience} experience</p> */}
                  {/* <div className="flex flex-wrap justify-center gap-1 mb-2">
                    {member.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="inline-block bg-primary/10 text-primary text-xs font-medium py-1 px-2 rounded"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div> */}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-agricultural-earth/5 rounded-2xl p-8 lg:p-12 text-center border border-primary/10">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Our Mission
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            To empower farmers with innovative mechanization solutions that increase productivity, 
            reduce labor costs, and promote sustainable agricultural practices. We are committed 
            to being your trusted partner in agricultural success, providing not just equipment, 
            but comprehensive support that helps your farm thrive in the modern agricultural landscape.
          </p>
        </div>
         {/* achievement Statement */}
        {/* <div className="mt-16 bg-gradient-to-r from-primary/5 to-agricultural-earth/5 rounded-2xl p-8 lg:p-12 text-center border border-primary/10">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Our Achievement
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            10,000+ Farmers shall be empowered with cutting-edge machinery for small and large-scale farms, boosting yields by up to 40%.
            Labor costs targeted to be reduced by 30%. Introduction affordable mechanization solutions that minimize reliance on manual labor.
            Sustainable Practices Adopted  Over 500 farms transitioned to eco-friendly techniques using our precision equipment.
            Nationwide Training Programs  Conducted 200+ workshops on modern farming technologies and equipment maintenance.
            Industry Recognition  Awarded *"Best Agri-Innovation Provider 2025"* by the National Farmers, Association.

          </p>
        </div> */}
         {/* partner Statement */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-agricultural-earth/5 rounded-2xl p-8 lg:p-12 text-center border border-primary/10">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            Our Partners
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            We collaborate with leading agricultural organizations, universities, and technology providers to bring the best solutions to our farmers. Our partnerships ensure that we stay at the forefront of agricultural innovation, continuously improving our offerings to meet the evolving needs of the farming community.
          </p>
          
            {/* Partner Logos */}
            <div className="flex flex-wrap justify-center  gap-4 pt-6">
              <img src="/ytoLogo.jpeg" alt="YTO" className="h-12" />
              <img src="/agra.jpg" alt="AGRA" className="h-12 " />
              <img src="/camclogo.png" alt="CAMCEE" className="h-12" />
              <img src="/everyfarmerlogo.png" alt="Everyfarmer" className="h-12" />
            </div>
        </div>
      </div>
    </section>
  );
};
