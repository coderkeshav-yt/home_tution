import { MapPin, Star, Clock, CheckCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tutor } from "@/data/tutors";
import { Link } from "react-router-dom";

interface TutorCardProps {
  tutor: Tutor;
}

const TutorCard = ({ tutor }: TutorCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-card-hover transition-all duration-slow group">
      <div className="p-6">
        <div className="flex gap-4">
          {/* Tutor Photo */}
          <div className="relative">
            <img
              src={tutor.photo}
              alt={tutor.name}
              className="w-20 h-20 rounded-full object-cover border-2 border-border"
            />
            {tutor.verified && (
              <div className="absolute -bottom-1 -right-1 bg-success rounded-full p-1">
                <CheckCircle className="h-4 w-4 text-success-foreground" />
              </div>
            )}
          </div>

          {/* Tutor Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {tutor.name}
                </h3>
                <p className="text-sm text-muted-foreground">{tutor.education}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-primary">₹{tutor.hourlyRate}/hr</p>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-medium">{tutor.rating}</span>
                  <span className="text-muted-foreground">({tutor.reviews})</span>
                </div>
              </div>
            </div>

            {/* Subjects */}
            <div className="flex flex-wrap gap-2 mt-3">
              {tutor.subjects.slice(0, 3).map((subject) => (
                <Badge key={subject} variant="secondary" className="text-xs">
                  {subject}
                </Badge>
              ))}
              {tutor.subjects.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{tutor.subjects.length - 3} more
                </Badge>
              )}
            </div>

            {/* Meta Info */}
            <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{tutor.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>{tutor.experience} years exp.</span>
              </div>
            </div>

            {/* Bio */}
            <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
              {tutor.bio}
            </p>

            {/* Actions */}
            <div className="flex gap-2 mt-4">
              <Link to={`/tutor/${tutor.id}`} className="flex-1">
                <Button variant="default" size="sm" className="w-full">
                  View Profile
                </Button>
              </Link>
              <Button variant="outline" size="sm">
                Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TutorCard;