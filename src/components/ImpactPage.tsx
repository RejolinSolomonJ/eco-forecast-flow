import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, TreePine, Droplets, Recycle, TrendingUp, Award } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar } from "recharts";

const ImpactPage = () => {
  const carbonData = [
    { month: "Jan", traditional: 450, biodegradable: 180, saved: 270 },
    { month: "Feb", traditional: 520, biodegradable: 200, saved: 320 },
    { month: "Mar", traditional: 610, biodegradable: 240, saved: 370 },
    { month: "Apr", traditional: 580, biodegradable: 230, saved: 350 },
    { month: "May", traditional: 670, biodegradable: 260, saved: 410 },
    { month: "Jun", traditional: 720, biodegradable: 280, saved: 440 },
  ];

  const wasteBreakdown = [
    { name: "Reduced Plastic", value: 65, color: "hsl(var(--eco-primary))" },
    { name: "Composted Material", value: 25, color: "hsl(var(--eco-success))" },
    { name: "Recycled Content", value: 10, color: "hsl(var(--eco-warning))" },
  ];

  const impactMetrics = [
    {
      title: "CO₂ Emissions Saved",
      value: "2,440",
      unit: "kg",
      icon: Leaf,
      change: "+15%",
      color: "text-eco-success",
      bgColor: "bg-eco-success/10",
    },
    {
      title: "Trees Equivalent",
      value: "112",
      unit: "trees",
      icon: TreePine,
      change: "+12%",
      color: "text-eco-primary",
      bgColor: "bg-eco-primary/10",
    },
    {
      title: "Water Saved",
      value: "8,520",
      unit: "liters",
      icon: Droplets,
      change: "+18%",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Waste Diverted",
      value: "1,340",
      unit: "kg",
      icon: Recycle,
      change: "+22%",
      color: "text-eco-warning",
      bgColor: "bg-eco-warning/10",
    },
  ];

  const certifications = [
    { name: "Carbon Neutral", description: "Net-zero carbon footprint achieved" },
    { name: "Plastic Free", description: "100% plastic-free packaging solutions" },
    { name: "Compost Ready", description: "Materials break down in 90 days" },
    { name: "Ocean Safe", description: "Marine biodegradable certified" },
  ];

  const monthlyReduction = [
    { category: "Food Containers", reduction: 85 },
    { category: "Shipping Boxes", reduction: 92 },
    { category: "Protective Wrap", reduction: 78 },
    { category: "Bags & Pouches", reduction: 88 },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Environmental Impact Dashboard</h1>
          <p className="text-muted-foreground">
            Track your positive environmental impact with biodegradable packaging
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-eco transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {metric.title}
                  </CardTitle>
                  <div className={`p-2 rounded-full ${metric.bgColor}`}>
                    <Icon className={`h-5 w-5 ${metric.color}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">
                    {metric.value}
                    <span className="text-sm font-normal text-muted-foreground ml-1">
                      {metric.unit}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <TrendingUp className="h-3 w-3 text-eco-success" />
                    <span className="text-xs text-eco-success">{metric.change}</span>
                    <span className="text-xs text-muted-foreground">vs last month</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Carbon Emissions Chart */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-eco-success" />
                Carbon Emissions Comparison
              </CardTitle>
              <CardDescription>
                Monthly CO₂ emissions: Traditional vs Biodegradable packaging
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={carbonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [
                    `${value} kg CO₂`,
                    name === 'traditional' ? 'Traditional' : 
                    name === 'biodegradable' ? 'Biodegradable' : 'Saved'
                  ]} />
                  <Area 
                    type="monotone" 
                    dataKey="traditional" 
                    stackId="1"
                    stroke="hsl(0 84.2% 60.2%)" 
                    fill="hsl(0 84.2% 60.2% / 0.6)" 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="biodegradable" 
                    stackId="2"
                    stroke="hsl(var(--eco-primary))" 
                    fill="hsl(var(--eco-primary) / 0.6)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Waste Breakdown */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Recycle className="h-5 w-5 text-eco-warning" />
                Waste Reduction Breakdown
              </CardTitle>
              <CardDescription>
                Distribution of environmental benefits this month
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={wasteBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {wasteBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {wasteBreakdown.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Environmental Reduction by Category */}
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-eco-primary" />
              Environmental Impact by Package Type
            </CardTitle>
            <CardDescription>
              Percentage reduction in environmental impact compared to traditional packaging
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlyReduction} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="category" type="category" width={120} />
                <Tooltip formatter={(value) => [`${value}%`, 'Reduction']} />
                <Bar 
                  dataKey="reduction" 
                  fill="hsl(var(--eco-success))"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Certifications and Achievements */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-eco-warning" />
                Environmental Certifications
              </CardTitle>
              <CardDescription>
                Recognized achievements in sustainable packaging
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-eco-accent/50 rounded-lg">
                    <div className="w-8 h-8 bg-eco-primary rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card bg-gradient-hero text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5" />
                Monthly Impact Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold">94%</div>
                  <p className="text-sm opacity-90">Plastic Reduction</p>
                </div>
                <div>
                  <div className="text-2xl font-bold">67%</div>
                  <p className="text-sm opacity-90">Carbon Savings</p>
                </div>
                <div>
                  <div className="text-2xl font-bold">156</div>
                  <p className="text-sm opacity-90">Orders Processed</p>
                </div>
                <div>
                  <div className="text-2xl font-bold">4.8★</div>
                  <p className="text-sm opacity-90">Sustainability Score</p>
                </div>
              </div>
              <div className="pt-4 border-t border-white/20">
                <p className="text-sm opacity-90">
                  Your choices have prevented <strong>2.4 tons of CO₂</strong> from entering the atmosphere. 
                  That's equivalent to planting <strong>112 trees</strong>!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ImpactPage;