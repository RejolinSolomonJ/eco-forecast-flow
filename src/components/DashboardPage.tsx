import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, TrendingUp, Users, Package, ArrowRight } from "lucide-react";

interface DashboardPageProps {
  onNavigate: (page: string) => void;
}

const DashboardPage = ({ onNavigate }: DashboardPageProps) => {
  const stats = [
    {
      title: "Total Suppliers",
      value: "47",
      description: "Active biodegradable packaging suppliers",
      icon: Users,
      color: "text-eco-primary",
    },
    {
      title: "CO₂ Saved",
      value: "2.4k kg",
      description: "This month vs traditional packaging",
      icon: Leaf,
      color: "text-eco-success",
    },
    {
      title: "Demand Accuracy",
      value: "94%",
      description: "AI forecasting precision rate",
      icon: TrendingUp,
      color: "text-eco-warning",
    },
    {
      title: "Orders Processed",
      value: "156",
      description: "Successfully matched orders",
      icon: Package,
      color: "text-eco-primary-light",
    },
  ];

  const quickActions = [
    {
      title: "AI Demand Forecasting",
      description: "Upload sales data and get accurate packaging demand predictions",
      page: "forecasting",
      gradient: "bg-gradient-primary",
    },
    {
      title: "Find Suppliers",
      description: "Browse eco-friendly packaging suppliers near you",
      page: "suppliers",
      gradient: "bg-eco-accent",
    },
    {
      title: "Track Impact",
      description: "Monitor your environmental impact and sustainability metrics",
      page: "impact",
      gradient: "bg-eco-secondary",
    },
    {
      title: "Manage Orders",
      description: "Send requests and track orders with suppliers",
      page: "orders",
      gradient: "bg-eco-success",
    },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Hero Section */}
        <div className="text-center py-12 px-6 bg-gradient-hero rounded-2xl text-white shadow-eco">
          <h1 className="text-4xl font-bold mb-4">Welcome to EcoPack360</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Transform your packaging supply chain with AI-powered demand forecasting 
            and sustainable biodegradable packaging solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-eco transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-foreground">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickActions.map((action, index) => (
              <Card 
                key={index} 
                className="cursor-pointer shadow-card hover:shadow-eco transition-all duration-300 hover:scale-[1.02]"
                onClick={() => onNavigate(action.page)}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{action.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {action.description}
                      </CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" className="shrink-0">
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Platform Benefits */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="text-xl">Why Choose EcoPack360?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-eco-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6 text-eco-primary" />
                </div>
                <h3 className="font-semibold mb-2">Smart Forecasting</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered demand prediction reduces waste and optimizes inventory
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-eco-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-eco-primary" />
                </div>
                <h3 className="font-semibold mb-2">Supplier Network</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with verified eco-friendly packaging suppliers globally
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-eco-accent rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="h-6 w-6 text-eco-primary" />
                </div>
                <h3 className="font-semibold mb-2">Sustainability</h3>
                <p className="text-sm text-muted-foreground">
                  Track environmental impact and contribute to a greener future
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;