import { useState } from "react";
import { Search, Play } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import signA from "@/assets/sign-a.jpg";

export const Dictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const signs = [
    { id: 1, word: "Hello", category: "Greetings", image: signA, difficulty: "Beginner" },
    { id: 2, word: "Thank You", category: "Greetings", image: signA, difficulty: "Beginner" },
    { id: 3, word: "Please", category: "Greetings", image: signA, difficulty: "Beginner" },
    { id: 4, word: "Family", category: "People", image: signA, difficulty: "Intermediate" },
    { id: 5, word: "Friend", category: "People", image: signA, difficulty: "Beginner" },
    { id: 6, word: "Water", category: "Food & Drink", image: signA, difficulty: "Beginner" },
    { id: 7, word: "Happy", category: "Emotions", image: signA, difficulty: "Beginner" },
    { id: 8, word: "Beautiful", category: "Descriptions", image: signA, difficulty: "Advanced" },
  ];

  const filteredSigns = signs.filter(sign =>
    sign.word.toLowerCase().includes(searchTerm.toLowerCase()) ||
    sign.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(signs.map(sign => sign.category))];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-success text-success-foreground";
      case "Intermediate": return "bg-warning text-warning-foreground";
      case "Advanced": return "bg-error text-error-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="p-6 pb-24 max-w-md mx-auto space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gradient mb-2">
          Sign Dictionary
        </h1>
        <p className="text-muted-foreground">
          Explore and learn sign language gestures
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
        <Input
          placeholder="Search signs or categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 rounded-2xl h-12 border-2 focus:border-primary"
        />
      </div>

      {/* Categories Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <Button
          variant={searchTerm === "" ? "default" : "outline"}
          size="sm"
          onClick={() => setSearchTerm("")}
          className="rounded-full whitespace-nowrap"
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            key={category}
            variant={searchTerm === category ? "default" : "outline"}
            size="sm"
            onClick={() => setSearchTerm(category)}
            className="rounded-full whitespace-nowrap"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        {filteredSigns.length} signs found
      </div>

      {/* Signs Grid */}
      <div className="space-y-4">
        {filteredSigns.map((sign) => (
          <Card key={sign.id} className="p-4 border-none shadow-soft hover:shadow-medium transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                <img 
                  src={sign.image} 
                  alt={`Sign for ${sign.word}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-lg truncate">{sign.word}</h3>
                    <p className="text-sm text-muted-foreground">{sign.category}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(sign.difficulty)}`}>
                    {sign.difficulty}
                  </span>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" className="rounded-full flex items-center gap-1">
                    <Play size={14} />
                    Watch
                  </Button>
                  <Button size="sm" variant="ghost" className="rounded-full text-primary">
                    Practice
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredSigns.length === 0 && (
        <Card className="p-8 text-center border-none shadow-soft">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="text-muted-foreground" size={32} />
          </div>
          <h3 className="text-lg font-semibold mb-2">No signs found</h3>
          <p className="text-muted-foreground text-sm">
            Try searching for a different word or browse categories
          </p>
        </Card>
      )}
    </div>
  );
};