import { useState } from "react";
import SearchBar from "@/components/SearchBar";
import TutorCard from "@/components/TutorCard";
import { tutors } from "@/data/tutors";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Filter, X } from "lucide-react";

const Tutors = () => {
  console.log('Tutors data:', tutors); // Debug log
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [sortBy, setSortBy] = useState("rating");

  const uniqueSubjects = Array.from(
    new Set(tutors.flatMap((t) => t.subjects))
  );
  const uniqueLevels = Array.from(new Set(tutors.flatMap((t) => t.levels)));

  // Filter tutors
  let filteredTutors = [...tutors];
  if (selectedSubject) {
    filteredTutors = filteredTutors.filter((t) =>
      t.subjects.includes(selectedSubject)
    );
  }
  if (selectedLevel) {
    filteredTutors = filteredTutors.filter((t) =>
      t.levels.includes(selectedLevel)
    );
  }
  filteredTutors = filteredTutors.filter(
    (t) => t.hourlyRate >= priceRange[0] && t.hourlyRate <= priceRange[1]
  );

  // Sort tutors
  filteredTutors.sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "price-low":
        return a.hourlyRate - b.hourlyRate;
      case "price-high":
        return b.hourlyRate - a.hourlyRate;
      case "experience":
        return b.experience - a.experience;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-gradient-card py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Find Your Perfect Tutor
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
            Browse our network of {tutors.length}+ qualified tutors
          </p>
          <div className="max-w-5xl mx-auto">
            <SearchBar variant="page" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar - Desktop */}
          <aside className="hidden lg:block w-80 space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Subject</h3>
              <div className="flex flex-wrap gap-2">
                {uniqueSubjects.map((subject) => (
                  <Badge
                    key={subject}
                    variant={selectedSubject === subject ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() =>
                      setSelectedSubject(
                        selectedSubject === subject ? "" : subject
                      )
                    }
                  >
                    {subject}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Level</h3>
              <div className="flex flex-wrap gap-2">
                {uniqueLevels.map((level) => (
                  <Badge
                    key={level}
                    variant={selectedLevel === level ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() =>
                      setSelectedLevel(selectedLevel === level ? "" : level)
                    }
                  >
                    {level}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">
                Price Range: ${priceRange[0]} - ${priceRange[1]}/hr
              </h3>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={100}
                step={5}
                className="mt-2"
              />
            </div>

            <Button
              variant="outline"
              className="w-full"
              onClick={() => {
                setSelectedSubject("");
                setSelectedLevel("");
                setPriceRange([0, 100]);
              }}
            >
              Clear Filters
            </Button>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-muted-foreground">
                Showing {filteredTutors.length} tutors
              </p>
              <div className="flex items-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rated</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="experience">Most Experience</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Mobile Filters */}
            {showFilters && (
              <div className="lg:hidden bg-card p-4 rounded-lg mb-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Filters</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Subject</h4>
                  <div className="flex flex-wrap gap-2">
                    {uniqueSubjects.slice(0, 8).map((subject) => (
                      <Badge
                        key={subject}
                        variant={
                          selectedSubject === subject ? "default" : "outline"
                        }
                        className="cursor-pointer text-xs"
                        onClick={() =>
                          setSelectedSubject(
                            selectedSubject === subject ? "" : subject
                          )
                        }
                      >
                        {subject}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Level</h4>
                  <div className="flex flex-wrap gap-2">
                    {uniqueLevels.map((level) => (
                      <Badge
                        key={level}
                        variant={selectedLevel === level ? "default" : "outline"}
                        className="cursor-pointer text-xs"
                        onClick={() =>
                          setSelectedLevel(selectedLevel === level ? "" : level)
                        }
                      >
                        {level}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">
                    Price: ${priceRange[0]} - ${priceRange[1]}/hr
                  </h4>
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={100}
                    step={5}
                  />
                </div>
              </div>
            )}

            {/* Tutors Grid */}
            <div className="space-y-4">
              {filteredTutors.map((tutor) => {
                console.log('Rendering tutor:', tutor.id, tutor.name);
                return <TutorCard key={tutor.id} tutor={tutor} />;
              })}
            </div>

            {filteredTutors.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No tutors found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSelectedSubject("");
                    setSelectedLevel("");
                    setPriceRange([0, 100]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutors;