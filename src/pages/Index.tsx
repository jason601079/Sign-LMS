import { useState } from "react";
import { Dashboard } from "@/components/Dashboard";
import { LearningScreen } from "@/components/LearningScreen";
import { Dictionary } from "@/components/Dictionary";
import { Profile } from "@/components/Profile";
import { BottomNavigation } from "@/components/BottomNavigation";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderActiveScreen = () => {
    switch (activeTab) {
      case "home":
        return <Dashboard />;
      case "learn":
        return <LearningScreen />;
      case "dictionary":
        return <Dictionary />;
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {renderActiveScreen()}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
