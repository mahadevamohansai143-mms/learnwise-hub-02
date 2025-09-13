import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DocumentUpload from "@/components/DocumentUpload";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import StudyRecommendations from "@/components/StudyRecommendations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <DocumentUpload />
        <AnalyticsDashboard />
        <StudyRecommendations />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
