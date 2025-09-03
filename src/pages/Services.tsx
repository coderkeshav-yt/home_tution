import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Users,
  Clock,
  Globe,
  Brain,
  CheckCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "One-on-One Tutoring",
      description:
        "Personalized attention with dedicated tutors who adapt to your learning style and pace.",
      features: [
        "Customized lesson plans",
        "Flexible scheduling",
        "Progress tracking",
        "Regular feedback",
      ],
      price: "Starting at ₹1,500/hour",
      popular: true,
    },
    {
      icon: Users,
      title: "Group Sessions",
      description:
        "Learn with peers in small groups of 2-4 students for collaborative learning experiences.",
      features: [
        "Cost-effective option",
        "Peer interaction",
        "Shared learning",
        "Group discussions",
      ],
      price: "Starting at ₹800/hour per student",
      popular: false,
    },
    {
      icon: Globe,
      title: "Online Tutoring",
      description:
        "Connect with expert tutors from anywhere through our virtual learning platform.",
      features: [
        "Video conferencing",
        "Screen sharing",
        "Digital whiteboard",
        "Recorded sessions",
      ],
      price: "Starting at ₹1,200/hour",
      popular: false,
    },
    {
      icon: Brain,
      title: "Test Preparation",
      description:
        "Specialized programs for SAT, ACT, AP exams, and other standardized tests.",
      features: [
        "Practice tests",
        "Strategy coaching",
        "Time management",
        "Score improvement",
      ],
      price: "Starting at ₹2,000/hour",
      popular: true,
    },
  ];

  const subjects = [
    {
      category: "Academic Subjects",
      items: [
        "Mathematics (CBSE, ICSE, State Boards)",
        "Science (Physics, Chemistry, Biology)",
        "English & Literature",
        "Hindi & Sanskrit",
        "Social Studies",
        "Computer Science",
      ],
    },
    {
      category: "Test Preparation",
      items: ["JEE Main/Advanced", "NEET", "CBSE Boards", "ICSE Boards", "UPSC", "CAT"],
    },
    {
      category: "Languages",
      items: ["Hindi", "English", "Sanskrit", "French", "German", "Regional Languages"],
    },
    {
      category: "Special Programs",
      items: [
        "Learning Disabilities Support",
        "Gifted & Talented Programs",
        "Homework Help",
        "Study Skills",
        "College Admissions",
      ],
    },
  ];

  const packages = [
    {
      name: "Basic",
      price: "₹8,000",
      period: "month",
      features: [
        "5 hours of tutoring",
        "1 subject",
        "Email support",
        "Progress reports",
      ],
      cta: "Get Started",
    },
    {
      name: "Standard",
      price: "₹15,000",
      period: "month",
      features: [
        "10 hours of tutoring",
        "2 subjects",
        "Priority support",
        "Weekly progress reports",
        "Resource library access",
      ],
      cta: "Most Popular",
      popular: true,
    },
    {
      name: "Premium",
      price: "₹25,000",
      period: "month",
      features: [
        "20 hours of tutoring",
        "Unlimited subjects",
        "24/7 support",
        "Daily progress tracking",
        "Full resource access",
        "Free assessment tests",
      ],
      cta: "Best Value",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-card py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              Tailored Learning Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Services Designed for Your Success
            </h1>
            <p className="text-xl text-muted-foreground">
              From one-on-one tutoring to group sessions, we offer flexible
              learning options that fit your needs and budget.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={service.title}
                className="p-6 hover:shadow-card-hover transition-all animate-fade-up relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4" variant="secondary">
                    Popular
                  </Badge>
                )}
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="h-4 w-4 text-success" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-primary">
                    {service.price}
                  </p>
                  <Link to="/tutors">
                    <Button variant="outline" size="sm">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Subjects We Cover</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert tutoring available across all major subjects and levels
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {subjects.map((category) => (
              <Card key={category.category} className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Choose Your Learning Package
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options to meet your educational goals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`p-6 relative ${
                  pkg.popular
                    ? "border-primary shadow-lg scale-105"
                    : ""
                }`}
              >
                {pkg.popular && (
                  <Badge
                    className="absolute -top-3 left-1/2 -translate-x-1/2"
                    variant="default"
                  >
                    Most Popular
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground">/{pkg.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.popular ? "hero" : "outline"}
                  className="w-full"
                >
                  {pkg.cta}
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Our Services Work</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and effective
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Choose Your Service</h3>
              <p className="text-muted-foreground">
                Select the learning format that best suits your needs and schedule
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-secondary-foreground text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
              <p className="text-muted-foreground">
                We'll connect you with the perfect tutor based on your requirements
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-success rounded-full mx-auto mb-4 flex items-center justify-center text-success-foreground text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Learning</h3>
              <p className="text-muted-foreground">
                Begin your journey to academic success with personalized support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students achieving their goals with our expert
            tutoring services
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/tutors">
              <Button variant="cta" size="lg">
                Find Your Tutor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;