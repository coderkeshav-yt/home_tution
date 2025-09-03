import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Shield, Heart, Target, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Student-Centered",
      description:
        "Every decision we make prioritizes the success and well-being of our students.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description:
        "All tutors undergo comprehensive background checks and verification processes.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in tutor selection and educational outcomes.",
    },
    {
      icon: Target,
      title: "Personalized Learning",
      description:
        "Customized teaching approaches that adapt to each student's unique needs.",
    },
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "Founder & CEO",
      bio: "Former educator with 15 years of experience in personalized learning.",
    },
    {
      name: "Dr. James Chen",
      role: "Head of Education",
      bio: "PhD in Education, specializing in learning psychology and pedagogy.",
    },
    {
      name: "Maria Garcia",
      role: "Head of Safety",
      bio: "Former school administrator focused on child safety and welfare.",
    },
    {
      name: "David Kim",
      role: "Head of Technology",
      bio: "Tech innovator making education accessible through digital platforms.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-card py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Education, One Student at a Time
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Since 2020, we've been connecting students with exceptional tutors
              to unlock their full academic potential.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/tutors">
                <Button variant="hero" size="lg">
                  Find a Tutor
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Become a Tutor
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                We believe that every student deserves access to quality
                education tailored to their unique learning style. Our mission
                is to make personalized tutoring accessible, affordable, and
                effective for students of all backgrounds.
              </p>
              <p className="text-muted-foreground mb-4">
                By connecting passionate educators with eager learners, we're
                building a community where academic success is achievable for
                everyone.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5,000+</div>
                  <p className="text-sm text-muted-foreground">
                    Students Helped
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <p className="text-sm text-muted-foreground">
                    Verified Tutors
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">98%</div>
                  <p className="text-sm text-muted-foreground">
                    Success Rate
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">4.9★</div>
                  <p className="text-sm text-muted-foreground">
                    Average Rating
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
              <BookOpen className="h-12 w-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Story</h3>
              <p className="opacity-90">
                Founded in 2020 during the global shift to remote learning, we
                recognized the growing need for personalized educational support.
                What started as a small network of dedicated tutors has grown
                into a thriving community of educators and learners.
              </p>
              <p className="opacity-90 mt-4">
                Today, we're proud to be the trusted choice for thousands of
                families seeking quality tutoring services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="p-6 text-center hover:shadow-card-hover transition-all animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <value.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated professionals working to revolutionize education
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member) => (
              <Card key={member.name} className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-primary-foreground text-2xl font-bold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Join Our Growing Community
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're a student seeking help or an educator looking to make
            a difference, we welcome you.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/tutors">
              <Button variant="cta" size="lg">
                Find Your Tutor
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
            >
              Become a Tutor
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;