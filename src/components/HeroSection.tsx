import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Brain, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-learning.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Adaptive Learning{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Transform your study experience with AI-powered document processing, 
              automated assessments, and personalized learning recommendations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="lg" className="text-lg px-8">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Watch Demo
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">Smart Processing</h3>
              </div>
              <div className="text-center">
                <div className="bg-secondary/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-sm">AI Assessments</h3>
              </div>
              <div className="text-center">
                <div className="bg-accent/10 rounded-full p-3 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-sm">Progress Analytics</h3>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="relative">
              <img
                src={heroImage}
                alt="Students learning with technology"
                className="rounded-2xl shadow-strong w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-card rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 right-6 bg-card/90 backdrop-blur-sm rounded-xl p-4 shadow-medium">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Learning Progress</span>
                  <span className="text-success font-semibold">87% Complete</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div className="bg-gradient-primary h-2 rounded-full progress-glow" style={{ width: '87%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;