import { useState } from "react";
import { Search, MapPin, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SearchBarProps {
  variant?: "hero" | "page";
}

const SearchBar = ({ variant = "hero" }: SearchBarProps) => {
  const [subject, setSubject] = useState("");
  const [location, setLocation] = useState("");
  const [level, setLevel] = useState("");

  const isHero = variant === "hero";

  return (
    <div
      className={`${
        isHero ? "bg-background/95 backdrop-blur-md" : "bg-background"
      } rounded-xl shadow-xl p-6`}
    >
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Subject Input */}
        <div className="relative">
          <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="What do you want to learn?"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="pl-10 h-12"
          />
        </div>

        {/* Location Input */}
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Enter your location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="pl-10 h-12"
          />
        </div>

        {/* Level Select */}
        <div className="relative">
          <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none z-10" />
          <Select value={level} onValueChange={setLevel}>
            <SelectTrigger className="pl-10 h-12">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="elementary">Elementary</SelectItem>
              <SelectItem value="middle">Middle School</SelectItem>
              <SelectItem value="high">High School</SelectItem>
              <SelectItem value="college">College</SelectItem>
              <SelectItem value="adult">Adult Learning</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search Button */}
        <Button variant={isHero ? "cta" : "default"} size="lg" className="h-12">
          <Search className="mr-2 h-4 w-4" />
          Find Tutors
        </Button>
      </div>

      {isHero && (
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-muted-foreground">Popular:</span>
          {["Mathematics", "English", "SAT Prep", "Chemistry", "Spanish"].map(
            (item) => (
              <button
                key={item}
                className="text-sm px-3 py-1 rounded-full bg-muted hover:bg-muted-foreground/20 transition-colors"
                onClick={() => setSubject(item)}
              >
                {item}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;