export interface Tutor {
  id: string;
  name: string;
  photo: string;
  subjects: string[];
  levels: string[];
  experience: number;
  rating: number;
  reviews: number;
  hourlyRate: number;
  location: string;
  availability: string[];
  bio: string;
  education: string;
  languages: string[];
  verified: boolean;
}

export const tutors: Tutor[] = [
  {
    id: "1",
    name: "Priya Sharma",
    photo: "/tutor-1.jpg",
    subjects: ["Mathematics", "Physics", "Chemistry"],
    levels: ["Class 10", "Class 12", "JEE/NEET"],
    experience: 8,
    rating: 4.9,
    reviews: 127,
    hourlyRate: 1500,
    location: "South Delhi",
    availability: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    bio: "IIT Delhi alumna with 8 years of experience helping students excel in science and mathematics. Specialized in JEE/NEET preparation with proven results.",
    education: "M.Tech Mathematics, IIT Delhi",
    languages: ["Hindi", "English", "Punjabi"],
    verified: true
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    photo: "/tutor-2.jpg",
    subjects: ["Computer Science", "Mathematics", "Programming"],
    levels: ["Class 8-10", "Class 11-12", "College"],
    experience: 6,
    rating: 4.8,
    reviews: 94,
    hourlyRate: 1800,
    location: "Gurgaon",
    availability: ["Tue", "Wed", "Thu", "Sat", "Sun"],
    bio: "Software engineer from IIT Bombay turned educator. I specialize in making coding and mathematics accessible through practical, real-world examples.",
    education: "B.Tech Computer Science, IIT Bombay",
    languages: ["Hindi", "English"],
    verified: true
  },
  {
    id: "3",
    name: "Anjali Verma",
    photo: "/tutor-3.jpg",
    subjects: ["English", "Literature", "Writing", "IELTS/TOEFL"],
    levels: ["Class 6-8", "Class 9-10", "Class 11-12"],
    experience: 10,
    rating: 5.0,
    reviews: 203,
    hourlyRate: 1200,
    location: "Noida",
    availability: ["Mon", "Wed", "Fri", "Sat"],
    bio: "Published author and certified English teacher with a decade of experience. Specializing in creative writing, literature analysis, and competitive exam preparation.",
    education: "M.A. English Literature, JNU Delhi",
    languages: ["Hindi", "English", "Sanskrit"],
    verified: true
  },
  {
    id: "4",
    name: "Arjun Patel",
    photo: "/tutor-4.jpg",
    subjects: ["Biology", "Chemistry", "NEET Preparation"],
    levels: ["Class 11", "Class 12", "NEET"],
    experience: 5,
    rating: 4.7,
    reviews: 68,
    hourlyRate: 1400,
    location: "Vasant Kunj",
    availability: ["Mon", "Tue", "Thu", "Fri", "Sun"],
    bio: "AIIMS medical student with a passion for teaching sciences. I help students not just memorize, but truly understand biological and chemical processes.",
    education: "MBBS (Pursuing), AIIMS Delhi",
    languages: ["Hindi", "English", "Gujarati"],
    verified: true
  },
  {
    id: "5",
    name: "Meera Nair",
    photo: "/tutor-1.jpg",
    subjects: ["Sanskrit", "Hindi", "Social Studies"],
    levels: ["All Levels"],
    experience: 7,
    rating: 4.9,
    reviews: 156,
    hourlyRate: 1000,
    location: "Dwarka",
    availability: ["Mon", "Tue", "Wed", "Sat"],
    bio: "Passionate language teacher with expertise in Sanskrit and Hindi. I focus on building strong foundations in grammar and conversational skills.",
    education: "M.A. Sanskrit, Delhi University",
    languages: ["Hindi", "English", "Sanskrit"],
    verified: true
  },
  {
    id: "6",
    name: "Amit Singh",
    photo: "/tutor-4.jpg",
    subjects: ["Physics", "Mathematics", "JEE/NEET"],
    levels: ["Class 11", "Class 12", "JEE/NEET"],
    experience: 9,
    rating: 4.8,
    reviews: 187,
    hourlyRate: 1600,
    location: "Rohini",
    availability: ["Mon", "Wed", "Fri", "Sun"],
    bio: "IIT Kanpur alumnus with 9 years of experience in teaching Physics and Mathematics. Specialized in JEE/NEET preparation with a focus on concept clarity and problem-solving techniques.",
    education: "B.Tech, IIT Kanpur",
    languages: ["Hindi", "English"],
    verified: true
  },
  {
    id: "7",
    name: "Vikram Singh",
    photo: "/tutor-2.jpg",
    subjects: ["History", "Political Science", "UPSC"],
    levels: ["Class 9-10", "Class 11-12", "Competitive Exams"],
    experience: 9,
    rating: 4.8,
    reviews: 112,
    hourlyRate: 1600,
    location: "Connaught Place",
    availability: ["Wed", "Thu", "Fri", "Sat", "Sun"],
    bio: "Former civil servant bringing real-world experience to history and political science education. Specialized in UPSC preparation.",
    education: "M.A. History, Delhi University",
    languages: ["Hindi", "English"],
    verified: true
  }
];

export const subjects = [
  { name: "Mathematics", icon: "📐", students: 3450 },
  { name: "Physics", icon: "⚛️", students: 2890 },
  { name: "Chemistry", icon: "🧪", students: 2560 },
  { name: "Biology", icon: "🧬", students: 2340 },
  { name: "English", icon: "📚", students: 1890 },
  { name: "Hindi", icon: "📖", students: 1670 },
  { name: "Computer Science", icon: "💻", students: 1450 },
  { name: "Sanskrit", icon: "🕉️", students: 890 },
  { name: "History", icon: "📜", students: 760 },
  { name: "JEE/NEET", icon: "🎯", students: 3200 },
  { name: "UPSC", icon: "📋", students: 1540 },
  { name: "Commerce", icon: "💼", students: 980 }
];

export const testimonials = [
  {
    id: "1",
    name: "Sunita Agarwal",
    role: "Parent",
    content: "Finding the right tutor for my daughter was so easy with this platform. Priya ma'am has been amazing - my daughter's maths marks improved from 60% to 95% in just 3 months!",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    id: "2",
    name: "Rohit Mehta",
    role: "Class 12 Student",
    content: "Rajesh sir made programming so much fun! I went from knowing nothing to building my own apps. The platform made it super easy to schedule sessions.",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: "3",
    name: "Kavita Reddy",
    role: "Parent",
    content: "The background verification gave me peace of mind. Anjali ma'am helped my son improve his English scores significantly. Highly recommend!",
    rating: 5,
    date: "3 weeks ago"
  },
  {
    id: "4",
    name: "Aditya Gupta",
    role: "NEET Aspirant",
    content: "Arjun sir's tutoring helped me crack NEET with excellent marks. The flexible scheduling worked perfectly with my preparation schedule.",
    rating: 5,
    date: "1 week ago"
  }
];

export const notifications = [
  {
    id: "1",
    type: "success",
    title: "JEE Main 2024 Results",
    content: "15 of our students scored 99+ percentile in JEE Main 2024!",
    date: "2 hours ago",
    important: true
  },
  {
    id: "2",
    type: "info",
    title: "New Batch Starting",
    content: "NEET 2025 crash course batch starting from January 15th. Limited seats available.",
    date: "5 hours ago",
    important: false
  },
  {
    id: "3",
    type: "warning",
    title: "Holiday Schedule",
    content: "Office will remain closed on January 26th for Republic Day.",
    date: "1 day ago",
    important: false
  },
  {
    id: "4",
    type: "success",
    title: "Board Exam Preparation",
    content: "Special revision classes for Class 10 & 12 board exams starting next week.",
    date: "2 days ago",
    important: true
  },
  {
    id: "5",
    type: "info",
    title: "New Tutors Joined",
    content: "5 new IIT/NIT qualified tutors joined our platform this week.",
    date: "3 days ago",
    important: false
  }
];