import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { TrendingUp, BookOpen, Target, Award, Clock, Brain } from "lucide-react";
import analyticsImage from "@/assets/analytics-dashboard.jpg";

const progressData = [
  { name: 'Week 1', score: 65, accuracy: 70 },
  { name: 'Week 2', score: 72, accuracy: 75 },
  { name: 'Week 3', score: 78, accuracy: 82 },
  { name: 'Week 4', score: 85, accuracy: 88 },
  { name: 'Week 5', score: 87, accuracy: 90 },
];

const subjectData = [
  { subject: 'Mathematics', progress: 92, color: 'hsl(var(--primary))' },
  { subject: 'Science', progress: 78, color: 'hsl(var(--secondary))' },
  { subject: 'History', progress: 85, color: 'hsl(var(--accent))' },
  { subject: 'Literature', progress: 73, color: 'hsl(var(--success))' },
];

const studyTimeData = [
  { name: 'Mathematics', value: 35, color: 'hsl(var(--primary))' },
  { name: 'Science', value: 25, color: 'hsl(var(--secondary))' },
  { name: 'History', value: 20, color: 'hsl(var(--accent))' },
  { name: 'Literature', value: 20, color: 'hsl(var(--success))' },
];

const AnalyticsDashboard = () => {
  return (
    <section id="analytics" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Learning Analytics</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Track your progress with detailed analytics and insights. 
            Understand your learning patterns and optimize your study strategy.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="animate-scale-in shadow-soft hover:shadow-medium transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Overall Progress</p>
                  <p className="text-2xl font-bold text-primary">87%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in shadow-soft hover:shadow-medium transition-all duration-300 animation-delay-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Documents Processed</p>
                  <p className="text-2xl font-bold text-secondary">24</p>
                </div>
                <BookOpen className="h-8 w-8 text-secondary" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in shadow-soft hover:shadow-medium transition-all duration-300 animation-delay-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Study Streak</p>
                  <p className="text-2xl font-bold text-accent">12 days</p>
                </div>
                <Target className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="animate-scale-in shadow-soft hover:shadow-medium transition-all duration-300 animation-delay-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm">Achievements</p>
                  <p className="text-2xl font-bold text-success">8</p>
                </div>
                <Award className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Progress Chart */}
          <Card className="lg:col-span-2 animate-slide-up shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Learning Progress
              </CardTitle>
              <CardDescription>
                Your performance over the last 5 weeks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 6 }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="accuracy" 
                    stroke="hsl(var(--secondary))" 
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--secondary))', strokeWidth: 2, r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Study Time Distribution */}
          <Card className="animate-slide-up shadow-medium animation-delay-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                Study Time
              </CardTitle>
              <CardDescription>
                Time distribution by subject
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={studyTimeData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {studyTimeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-2 gap-2 mt-4">
                {studyTimeData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-sm text-muted-foreground">{item.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Subject Progress */}
        <Card className="animate-slide-up shadow-medium">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-secondary" />
              Subject Progress
            </CardTitle>
            <CardDescription>
              Detailed breakdown of your performance by subject
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {subjectData.map((subject, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{subject.subject}</span>
                    <div className="flex items-center gap-2">
                      <Badge variant={subject.progress >= 80 ? "default" : "secondary"}>
                        {subject.progress}%
                      </Badge>
                    </div>
                  </div>
                  <Progress value={subject.progress} className="progress-glow" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AnalyticsDashboard;