import { useState } from "react";
import { Settings, Trophy, Calendar, Target, Award, BookOpen, Moon, Sun, ChevronRight, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useTheme } from "@/components/theme-provider";
import achievementBadge from "@/assets/achievement-badge.jpg";

export const Profile = () => {
  const [showSettings, setShowSettings] = useState(false);
  const { theme, setTheme } = useTheme();
  const achievements = [
    { id: 1, name: "First Steps", description: "Completed your first lesson", icon: "🎯", unlocked: true },
    { id: 2, name: "Week Warrior", description: "7-day learning streak", icon: "🔥", unlocked: true },
    { id: 3, name: "Dictionary Explorer", description: "Viewed 50+ signs", icon: "📚", unlocked: true },
    { id: 4, name: "Perfect Practice", description: "100% accuracy in 5 lessons", icon: "⭐", unlocked: false },
    { id: 5, name: "Speed Learner", description: "Complete 10 lessons in one day", icon: "⚡", unlocked: false },
    { id: 6, name: "Master Signer", description: "Reach Level 10", icon: "🏆", unlocked: false },
  ];

  const stats = [
    { label: "Current Streak", value: "7 days", icon: Calendar },
    { label: "Total Score", value: "1,250", icon: Trophy },
    { label: "Lessons Completed", value: "45", icon: BookOpen },
    { label: "Signs Learned", value: "32", icon: Target },
  ];

  return (
    <div className="p-6 pb-24 max-w-md mx-auto space-y-6">
      {/* Profile Header */}
      <Card className="p-6 text-center border-none shadow-soft">
        <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 shadow-medium">
          <span className="text-3xl text-white font-bold">JD</span>
        </div>
        <h2 className="text-2xl font-bold mb-1">Jane Doe</h2>
        <p className="text-muted-foreground mb-4">Sign Language Learner</p>
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Progress to Next Milestone</span>
            <span>750 / 1000 Points</span>
          </div>
          <Progress value={75} className="h-3" />
          <p className="text-xs text-muted-foreground">250 points to unlock new achievement</p>
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="p-4 text-center border-none shadow-soft">
              <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Icon className="text-primary" size={20} />
              </div>
              <div className="text-lg font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </Card>
          );
        })}
      </div>

      {/* Achievements Section */}
      <Card className="p-6 border-none shadow-soft">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <Award className="text-accent" size={20} />
          Achievements
        </h3>
        
        <div className="grid grid-cols-3 gap-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`
                text-center p-3 rounded-xl transition-all duration-300
                ${achievement.unlocked 
                  ? "bg-gradient-to-br from-accent/20 to-warning/20 shadow-soft" 
                  : "bg-muted/50 opacity-60"
                }
              `}
            >
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 text-xl
                ${achievement.unlocked 
                  ? "bg-gradient-to-br from-accent to-warning shadow-soft" 
                  : "bg-muted"
                }
              `}>
                {achievement.unlocked ? achievement.icon : "🔒"}
              </div>
              <div className="text-xs font-medium truncate">{achievement.name}</div>
            </div>
          ))}
        </div>
        
        <Button variant="outline" className="w-full mt-4 rounded-2xl">
          View All Achievements
        </Button>
      </Card>

      {/* Learning Insights */}
      <Card className="p-6 border-none shadow-soft">
        <h3 className="text-lg font-semibold mb-4">Learning Insights</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm">Average Accuracy</span>
            <span className="text-sm font-semibold text-success">92%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Favorite Category</span>
            <span className="text-sm font-semibold">Greetings</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Learning Days</span>
            <span className="text-sm font-semibold">28 days</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Best Streak</span>
            <span className="text-sm font-semibold">12 days</span>
          </div>
        </div>
      </Card>

      {/* Settings */}
      <Card className="border-none shadow-soft">
        <Button 
          variant="ghost" 
          className="w-full justify-between rounded-2xl p-4 h-auto"
          onClick={() => setShowSettings(!showSettings)}
        >
          <div className="flex items-center">
            <Settings size={20} className="mr-3" />
            Settings & Preferences
          </div>
          {showSettings ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
        </Button>
        
        {showSettings && (
          <div className="px-4 pb-4 space-y-4">
            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center gap-3">
                  {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
                  <span className="font-medium">Theme</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant={theme === "light" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTheme("light")}
                    className="rounded-full"
                  >
                    <Sun size={16} className="mr-1" />
                    Light
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTheme("dark")}
                    className="rounded-full"
                  >
                    <Moon size={16} className="mr-1" />
                    Dark
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};