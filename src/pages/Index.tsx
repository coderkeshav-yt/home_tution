import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SearchBar from "@/components/SearchBar";
import TutorCard from "@/components/TutorCard";
import NotificationSection from "@/components/NotificationSection";
import { tutors, subjects, testimonials } from "@/data/tutors";
import {
  CheckCircle,
  Users,
  GraduationCap,
  Award,
  Clock,
  Shield,
  Star,
  ArrowRight,
  Quote,
} from "lucide-react";
import heroImage from "@/assets/hero-tutor.jpg";

const Index = () => {
  const [counters, setCounters] = useState({
    students: 0,
    tutors: 0,
    subjects: 0,
    rating: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prev) => ({
        students: Math.min(prev.students + 50, 15000),
        tutors: Math.min(prev.tutors + 10, 1200),
        subjects: Math.min(prev.subjects + 1, 50),
        rating: Math.min(prev.rating + 0.1, 4.9),
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Notifications Section */}
      <NotificationSection />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Tutor helping student"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero"></div>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-fade-up">
              Find Your Perfect Home Tutor Today
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 animate-fade-up animation-delay-100">
              Connect with qualified, verified tutors for personalized home tuition across India. 
              All subjects, all boards, flexible timings.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 animate-fade-up animation-delay-200">
              <div className="flex items-center gap-2 text-primary-foreground">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>Verified Tutors</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground">
                <Shield className="h-5 w-5 text-secondary" />
                <span>Background Checked</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground">
                <Award className="h-5 w-5 text-secondary" />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-5xl animate-fade-up animation-delay-300">
            <SearchBar variant="hero" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in">
              <div className="text-4xl font-bold text-primary mb-2">
                {counters.students.toLocaleString()}+
              </div>
              <div className="text-muted-foreground">Happy Students</div>
            </div>
            <div className="text-center animate-scale-in animation-delay-100">
              <div className="text-4xl font-bold text-primary mb-2">
                {counters.tutors}+
              </div>
              <div className="text-muted-foreground">Qualified Tutors</div>
            </div>
            <div className="text-center animate-scale-in animation-delay-200">
              <div className="text-4xl font-bold text-primary mb-2">
                {counters.subjects}+
              </div>
              <div className="text-muted-foreground">Subjects Covered</div>
            </div>
            <div className="text-center animate-scale-in animation-delay-300">
              <div className="text-4xl font-bold text-primary mb-2">
                {counters.rating.toFixed(1)}★
              </div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started with personalized tutoring in just 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground text-2xl font-bold group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Search & Match</h3>
              <p className="text-muted-foreground">
                Tell us what you need help with and we'll match you with the
                perfect tutor
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-secondary flex items-center justify-center text-secondary-foreground text-2xl font-bold group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Book Sessions</h3>
              <p className="text-muted-foreground">
                Choose your schedule and book sessions that fit your lifestyle
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-success flex items-center justify-center text-success-foreground text-2xl font-bold group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Start Learning</h3>
              <p className="text-muted-foreground">
                Meet your tutor and begin your personalized learning journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Subjects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Popular Subjects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert tutoring available in all major subjects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {subjects.map((subject, index) => (
              <Card
                key={subject.name}
                className="p-6 text-center hover:shadow-card-hover hover:scale-105 transition-all cursor-pointer animate-fade-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-4xl mb-3">{subject.icon}</div>
                <h3 className="font-semibold mb-1">{subject.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {subject.students} students
                </p>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/tutors">
              <Button variant="hero" size="lg">
                Browse All Subjects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tutors */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Tutors
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet some of our top-rated, verified tutors
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {tutors.slice(0, 4).map((tutor) => (
              <TutorCard key={tutor.id} tutor={tutor} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/tutors">
              <Button variant="outline" size="lg">
                View All Tutors
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of satisfied students and parents
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-4">
                  {testimonial.content}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-warning text-warning"
                      />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students achieving their academic goals with our
            expert tutors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="xl">
              Find Your Tutor
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="xl"
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

export default Index;