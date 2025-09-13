import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  BookOpen, 
  Clock, 
  Target, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Brain,
  Star
} from "lucide-react";

const recommendations = [
  {
    id: 1,
    title: "Focus on Mathematics Fundamentals",
    description: "Your recent assessment shows gaps in algebra. Spend 30 minutes daily on basic algebraic concepts.",
    priority: "high",
    estimatedTime: "30 min/day",
    subject: "Mathematics",
    difficulty: "Beginner",
    icon: Target,
    color: "text-destructive"
  },
  {
    id: 2,
    title: "Science Practice Tests",
    description: "You're excelling in theory! Take practice tests to improve application of scientific principles.",
    priority: "medium",
    estimatedTime: "45 min",
    subject: "Science",
    difficulty: "Intermediate",
    icon: TrendingUp,
    color: "text-accent"
  },
  {
    id: 3,
    title: "History Timeline Review",
    description: "Great progress! Review key historical events to strengthen chronological understanding.",
    priority: "low",
    estimatedTime: "20 min",
    subject: "History",
    difficulty: "Advanced",
    icon: CheckCircle,
    color: "text-success"
  }
];

const studyPlans = [
  {
    title: "Quick Review Session",
    duration: "15 minutes",
    activities: ["Review flashcards", "Quick quiz", "Summary notes"],
    difficulty: "Easy"
  },
  {
    title: "Deep Dive Study",
    duration: "60 minutes",
    activities: ["Read chapter", "Practice problems", "Create mind map"],
    difficulty: "Intensive"
  },
  {
    title: "Assessment Prep",
    duration: "45 minutes",
    activities: ["Mock test", "Review mistakes", "Study weak areas"],
    difficulty: "Focused"
  }
];

const StudyRecommendations = () => {
  return (
    <section id="recommendations" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">AI Study Recommendations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Personalized study recommendations based on your performance, 
            learning patterns, and goals. Optimize your learning journey with AI guidance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Personalized Recommendations */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-6">
              <Brain className="h-5 w-5 text-primary" />
              Personalized for You
            </h3>
            
            {recommendations.map((rec, index) => {
              const IconComponent = rec.icon;
              return (
                <Card key={rec.id} className="animate-slide-up shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-lg bg-primary/10`}>
                        <IconComponent className={`h-5 w-5 ${rec.color}`} />
                      </div>
                      
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{rec.title}</h4>
                          <Badge 
                            variant={rec.priority === 'high' ? 'destructive' : rec.priority === 'medium' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {rec.priority} priority
                          </Badge>
                        </div>
                        
                        <p className="text-muted-foreground text-sm">{rec.description}</p>
                        
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            {rec.estimatedTime}
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                            {rec.subject}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            {rec.difficulty}
                          </Badge>
                        </div>
                        
                        <Button variant="gradient" size="sm" className="w-fit">
                          Start Learning
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Quick Study Plans */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold flex items-center gap-2 mb-6">
              <Lightbulb className="h-5 w-5 text-accent" />
              Quick Study Plans
            </h3>
            
            {studyPlans.map((plan, index) => (
              <Card key={index} className="animate-scale-in shadow-soft hover:shadow-medium transition-all duration-300">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base flex items-center justify-between">
                    {plan.title}
                    <Badge variant="outline" className="text-xs">
                      {plan.difficulty}
                    </Badge>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {plan.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {plan.activities.map((activity, actIndex) => (
                      <li key={actIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-success" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" size="sm" className="w-full">
                    Start Plan
                  </Button>
                </CardContent>
              </Card>
            ))}

            {/* Achievement Showcase */}
            <Card className="animate-fade-in bg-gradient-card shadow-medium">
              <CardContent className="p-6 text-center">
                <Star className="h-8 w-8 text-accent mx-auto mb-3" />
                <h4 className="font-semibold mb-2">Learning Streak!</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  You've studied for 12 consecutive days. Keep it up!
                </p>
                <Badge variant="default" className="bg-gradient-primary text-white">
                  🔥 12 Day Streak
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Study Session Stats */}
        <Card className="animate-slide-up shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Today's Study Session
            </CardTitle>
            <CardDescription>
              Track your daily learning activities and achievements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">2h 45m</div>
                <div className="text-sm text-muted-foreground">Study Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-1">8/10</div>
                <div className="text-sm text-muted-foreground">Quiz Score</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">3</div>
                <div className="text-sm text-muted-foreground">Topics Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Focus Score</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default StudyRecommendations;