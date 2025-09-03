import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@hometuitionagency.com",
      link: "mailto:info@hometuitionagency.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(123) 456-7890",
      link: "tel:+1234567890",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "123 Education St, New York, NY 10001",
      link: "#",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
      link: "#",
    },
  ];

  const faqs = [
    {
      question: "How quickly can I get matched with a tutor?",
      answer:
        "Most students are matched within 24-48 hours of submitting their request.",
    },
    {
      question: "Are all tutors background checked?",
      answer:
        "Yes, all tutors undergo comprehensive background checks and verification before joining our platform.",
    },
    {
      question: "Can I change tutors if I'm not satisfied?",
      answer:
        "Absolutely! We offer a satisfaction guarantee and will help you find a better match at no extra cost.",
    },
    {
      question: "Do you offer online tutoring?",
      answer:
        "Yes, we offer both in-person and online tutoring options to suit your preferences.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-card py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We're here to help you find the perfect tutoring
              solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name*</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email*</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="(123) 456-7890"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject*</Label>
                      <Select
                        value={formData.subject}
                        onValueChange={(value) =>
                          setFormData({ ...formData, subject: value })
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">
                            General Inquiry
                          </SelectItem>
                          <SelectItem value="tutoring">
                            Tutoring Services
                          </SelectItem>
                          <SelectItem value="become-tutor">
                            Become a Tutor
                          </SelectItem>
                          <SelectItem value="support">Support</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message*</Label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us how we can help you..."
                      className="mt-1 min-h-[150px]"
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-8">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.link}
                      className="flex items-start gap-3 group hover:text-primary transition-colors"
                    >
                      <info.icon className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <p className="font-medium">{info.title}</p>
                        <p className="text-sm text-muted-foreground group-hover:text-primary">
                          {info.content}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-8 bg-gradient-primary text-primary-foreground">
                <h3 className="text-xl font-semibold mb-4">
                  Need Immediate Help?
                </h3>
                <p className="mb-4 opacity-90">
                  Our support team is available to assist you with urgent
                  matters.
                </p>
                <Button
                  variant="cta"
                  size="sm"
                  className="w-full"
                >
                  Start Live Chat
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-card-hover transition-all"
                >
                  <h3 className="text-lg font-semibold mb-2 flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground ml-7">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="p-0 overflow-hidden">
              <div className="bg-gradient-card h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Visit Our Office</h3>
                  <p className="text-muted-foreground">
                    123 Education St, New York, NY 10001
                  </p>
                  <Button variant="outline" className="mt-4">
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;