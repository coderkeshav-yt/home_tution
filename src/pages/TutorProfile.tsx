import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { tutors } from "@/data/tutors";
import {
  Star,
  MapPin,
  Clock,
  CheckCircle,
  BookOpen,
  Users,
  Award,
  Calendar,
  MessageSquare,
  Phone,
  Video,
  ChevronLeft,
  GraduationCap,
  Globe,
} from "lucide-react";

const TutorProfile = () => {
  const { id } = useParams();
  const tutor = tutors.find((t) => t.id === id);

  if (!tutor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tutor not found</h1>
          <Link to="/tutors">
            <Button variant="outline">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Tutors
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const availableDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const timeSlots = [
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM",
    "5:00 PM - 6:00 PM",
    "6:00 PM - 7:00 PM",
    "7:00 PM - 8:00 PM",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-card py-6">
        <div className="container mx-auto px-4">
          <Link to="/tutors">
            <Button variant="ghost" size="sm">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Back to Tutors
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <Card className="p-8">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="relative">
                  <img
                    src={tutor.photo}
                    alt={tutor.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-border"
                  />
                  {tutor.verified && (
                    <div className="absolute -bottom-2 -right-2 bg-success rounded-full p-2">
                      <CheckCircle className="h-6 w-6 text-success-foreground" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h1 className="text-3xl font-bold mb-2">{tutor.name}</h1>
                      <p className="text-lg text-muted-foreground mb-3">
                        {tutor.education}
                      </p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{tutor.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-primary" />
                          <span>{tutor.experience} years experience</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-warning text-warning" />
                          <span className="font-semibold">{tutor.rating}</span>
                          <span className="text-muted-foreground">
                            ({tutor.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-primary">
                        ₹{tutor.hourlyRate}/hr
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* About */}
            <Card className="p-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                About Me
              </h2>
              <p className="text-muted-foreground leading-relaxed">{tutor.bio}</p>
            </Card>

            {/* Subjects & Levels */}
            <Card className="p-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Teaching Expertise
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Subjects I Teach</h3>
                  <div className="flex flex-wrap gap-2">
                    {tutor.subjects.map((subject) => (
                      <Badge key={subject} variant="secondary">
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Levels</h3>
                  <div className="flex flex-wrap gap-2">
                    {tutor.levels.map((level) => (
                      <Badge key={level} variant="outline">
                        {level}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {tutor.languages.map((language) => (
                      <div
                        key={language}
                        className="flex items-center gap-1 px-3 py-1 bg-muted rounded-full text-sm"
                      >
                        <Globe className="h-3 w-3" />
                        {language}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Qualifications */}
            <Card className="p-8">
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Qualifications & Achievements
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">{tutor.education}</p>
                    <p className="text-sm text-muted-foreground">
                      Specialized in advanced mathematics and analytical methods
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">Background Verified</p>
                    <p className="text-sm text-muted-foreground">
                      Complete background check and verification completed
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-success mt-0.5" />
                  <div>
                    <p className="font-medium">{tutor.reviews}+ Happy Students</p>
                    <p className="text-sm text-muted-foreground">
                      Consistently rated {tutor.rating} stars by students and parents
                    </p>
                  </div>
                </li>
              </ul>
            </Card>

            {/* Reviews */}
            <Card className="p-8">
              <h2 className="text-xl font-semibold mb-4">Student Reviews</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium">Neha Kapoor</p>
                      <p className="text-sm text-muted-foreground">
                        Class 12 Student
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-warning text-warning"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Excellent teacher! Very patient and explains concepts clearly.
                    My marks improved significantly in just 2 months.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    1 week ago
                  </p>
                </div>
                <div className="border-b pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <p className="font-medium">Ravi Sharma</p>
                      <p className="text-sm text-muted-foreground">Parent</p>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-warning text-warning"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Very professional and dedicated. My son loves the classes and
                    looks forward to them every week.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    2 weeks ago
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="p-6 sticky top-20">
              <h3 className="text-lg font-semibold mb-4">Book a Session</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-bold text-primary">
                    ₹{tutor.hourlyRate}/hour
                  </p>
                  <p className="text-sm text-muted-foreground">
                    First session 20% off
                  </p>
                </div>
                <Button variant="hero" className="w-full" size="lg">
                  Book Trial Session
                </Button>
                <Button variant="outline" className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" className="flex-1" size="sm">
                    <Phone className="mr-2 h-4 w-4" />
                    Call
                  </Button>
                  <Button variant="outline" className="flex-1" size="sm">
                    <Video className="mr-2 h-4 w-4" />
                    Video Call
                  </Button>
                </div>
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Availability
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Available Days</p>
                  <div className="flex flex-wrap gap-2">
                    {availableDays.map((day) => (
                      <Badge
                        key={day}
                        variant={
                          tutor.availability.includes(day)
                            ? "default"
                            : "outline"
                        }
                        className={
                          !tutor.availability.includes(day)
                            ? "opacity-50"
                            : ""
                        }
                      >
                        {day}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Preferred Timings</p>
                  <p className="text-sm text-muted-foreground">
                    Morning: 9:00 AM - 12:00 PM
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Afternoon: 2:00 PM - 5:00 PM
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Evening: 5:00 PM - 8:00 PM
                  </p>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Students</span>
                  <span className="font-medium">{tutor.reviews}+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Success Rate</span>
                  <span className="font-medium">98%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Response Time</span>
                  <span className="font-medium">Within 2 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Member Since</span>
                  <span className="font-medium">January 2020</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorProfile;