import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Brain, TrendingUp, Package } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const ForecastingPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Mock data for demonstration
  const historicalData = [
    { month: "Jan", actual: 120, predicted: 125 },
    { month: "Feb", actual: 135, predicted: 132 },
    { month: "Mar", actual: 150, predicted: 148 },
    { month: "Apr", actual: 165, predicted: 162 },
    { month: "May", actual: 180, predicted: 178 },
    { month: "Jun", actual: 195, predicted: 192 },
  ];

  const forecastData = [
    { month: "Jul", predicted: 210, confidence: 94 },
    { month: "Aug", predicted: 225, confidence: 91 },
    { month: "Sep", predicted: 240, confidence: 89 },
    { month: "Oct", predicted: 230, confidence: 86 },
    { month: "Nov", predicted: 265, confidence: 88 },
    { month: "Dec", predicted: 280, confidence: 85 },
  ];

  const packageTypes = [
    { type: "Food Containers", demand: 45, unit: "thousands" },
    { type: "Shipping Boxes", demand: 32, unit: "thousands" },
    { type: "Protective Wrap", demand: 28, unit: "thousands" },
    { type: "Bags & Pouches", demand: 38, unit: "thousands" },
  ];

  const handleForecast = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">AI Demand Forecasting</h1>
          <p className="text-muted-foreground">
            Upload your sales data and get accurate packaging demand predictions powered by machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <div className="lg:col-span-1">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-eco-primary" />
                  Data Input
                </CardTitle>
                <CardDescription>
                  Provide historical sales data for accurate forecasting
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="csv-upload">Upload CSV File</Label>
                  <Input 
                    id="csv-upload" 
                    type="file" 
                    accept=".csv" 
                    className="mt-1"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Format: Date, Product, Quantity, Revenue
                  </p>
                </div>

                <div className="text-center text-muted-foreground">
                  <span className="text-sm">— OR —</span>
                </div>

                <div>
                  <Label htmlFor="manual-data">Manual Data Entry</Label>
                  <Textarea 
                    id="manual-data"
                    placeholder="Enter your monthly sales data:&#10;Jan: 1200 units&#10;Feb: 1350 units&#10;Mar: 1500 units..."
                    className="mt-1 h-32"
                  />
                </div>

                <div>
                  <Label htmlFor="business-type">Business Type</Label>
                  <Input 
                    id="business-type"
                    placeholder="e.g., Food & Beverage, E-commerce"
                    className="mt-1"
                  />
                </div>

                <Button 
                  onClick={handleForecast}
                  disabled={isLoading}
                  className="w-full bg-eco-primary hover:bg-eco-primary-dark"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4 animate-pulse" />
                      AI Processing...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Brain className="h-4 w-4" />
                      Generate Forecast
                    </div>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-2">
            {showResults ? (
              <div className="space-y-6">
                {/* Forecast Chart */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-eco-success" />
                      6-Month Demand Forecast
                    </CardTitle>
                    <CardDescription>
                      Predicted packaging needs with 89% average confidence
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={forecastData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip 
                          formatter={(value, name) => [
                            `${value} units`, 
                            name === 'predicted' ? 'Predicted Demand' : name
                          ]}
                        />
                        <Line 
                          type="monotone" 
                          dataKey="predicted" 
                          stroke="hsl(var(--eco-primary))" 
                          strokeWidth={3}
                          dot={{ fill: "hsl(var(--eco-primary))", strokeWidth: 2, r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Package Type Breakdown */}
                <Card className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-eco-primary-light" />
                      Packaging Type Breakdown
                    </CardTitle>
                    <CardDescription>
                      Predicted demand by packaging category (next month)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={packageTypes}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="type" />
                        <YAxis />
                        <Tooltip 
                          formatter={(value) => [`${value}k units`, 'Demand']}
                        />
                        <Bar 
                          dataKey="demand" 
                          fill="hsl(var(--eco-primary))"
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                {/* Key Insights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="shadow-card bg-gradient-card">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-eco-success">+18%</div>
                        <p className="text-sm text-muted-foreground">Growth Expected</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="shadow-card bg-gradient-card">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-eco-primary">89%</div>
                        <p className="text-sm text-muted-foreground">Avg Confidence</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="shadow-card bg-gradient-card">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-eco-warning">3.2k</div>
                        <p className="text-sm text-muted-foreground">Peak Demand</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              <Card className="shadow-card h-96 flex items-center justify-center">
                <CardContent className="text-center">
                  <Brain className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Ready for AI Analysis</h3>
                  <p className="text-muted-foreground">
                    Upload your data or enter it manually to generate accurate demand forecasts
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForecastingPage;