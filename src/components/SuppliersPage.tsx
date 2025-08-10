import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, Star, Package, Truck, Leaf, Mail, Phone } from "lucide-react";

const SuppliersPage = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const suppliers = [
    {
      id: 1,
      name: "GreenPack Solutions",
      location: "San Francisco, CA",
      distance: "12 miles",
      rating: 4.8,
      reviews: 156,
      specialties: ["Food Containers", "Compostable"],
      certifications: ["ASTM D6400", "BPI Certified"],
      minOrder: "$500",
      leadTime: "3-5 days",
      description: "Leading supplier of compostable food packaging made from plant-based materials.",
      contact: {
        email: "orders@greenpack.com",
        phone: "+1 (555) 123-4567"
      },
      sustainability: 95
    },
    {
      id: 2,
      name: "EcoBox Manufacturing",
      location: "Portland, OR",
      distance: "45 miles",
      rating: 4.6,
      reviews: 203,
      specialties: ["Shipping Boxes", "Biodegradable"],
      certifications: ["FSC Certified", "Carbon Neutral"],
      minOrder: "$750",
      leadTime: "2-4 days",
      description: "Specialized in biodegradable shipping materials and protective packaging.",
      contact: {
        email: "sales@ecobox.com",
        phone: "+1 (555) 987-6543"
      },
      sustainability: 92
    },
    {
      id: 3,
      name: "BioDegradable Innovations",
      location: "Seattle, WA",
      distance: "28 miles",
      rating: 4.9,
      reviews: 89,
      specialties: ["Custom Solutions", "Marine Biodegradable"],
      certifications: ["OK Compost HOME", "USDA BioPreferred"],
      minOrder: "$1,000",
      leadTime: "5-7 days",
      description: "Innovative marine-biodegradable packaging solutions for ocean-conscious brands.",
      contact: {
        email: "info@bioinnovations.com",
        phone: "+1 (555) 456-7890"
      },
      sustainability: 98
    },
    {
      id: 4,
      name: "Sustainable Wrap Co",
      location: "Oakland, CA",
      distance: "18 miles",
      rating: 4.7,
      reviews: 134,
      specialties: ["Protective Wrap", "Recyclable"],
      certifications: ["Cradle to Cradle", "GREENGUARD"],
      minOrder: "$300",
      leadTime: "1-3 days",
      description: "Fast delivery of recyclable protective wrapping and void fill materials.",
      contact: {
        email: "orders@sustainablewrap.com",
        phone: "+1 (555) 321-0987"
      },
      sustainability: 88
    }
  ];

  const categories = [
    { id: "all", label: "All Categories" },
    { id: "food", label: "Food Containers" },
    { id: "shipping", label: "Shipping Boxes" },
    { id: "protective", label: "Protective Wrap" },
    { id: "custom", label: "Custom Solutions" }
  ];

  const filteredSuppliers = suppliers.filter(supplier => {
    if (selectedCategory === "all") return true;
    return supplier.specialties.some(specialty => 
      specialty.toLowerCase().includes(selectedCategory)
    );
  });

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Biodegradable Packaging Suppliers</h1>
          <p className="text-muted-foreground">
            Find verified eco-friendly packaging suppliers near you
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input 
                    placeholder="Enter your location (e.g., San Francisco, CA)"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className={selectedCategory === category.id ? "bg-eco-primary" : ""}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSuppliers.map((supplier) => (
            <Card key={supplier.id} className="shadow-card hover:shadow-eco transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">{supplier.name}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <MapPin className="h-4 w-4" />
                      {supplier.location} • {supplier.distance}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-eco-warning text-eco-warning" />
                    <span className="font-semibold">{supplier.rating}</span>
                    <span className="text-sm text-muted-foreground">({supplier.reviews})</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{supplier.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {supplier.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary" className="bg-eco-accent">
                      {specialty}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Min Order:</span>
                    <div className="font-semibold">{supplier.minOrder}</div>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Lead Time:</span>
                    <div className="font-semibold">{supplier.leadTime}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Sustainability Score</span>
                    <span className="font-semibold text-eco-success">{supplier.sustainability}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-eco-success h-2 rounded-full transition-all duration-300"
                      style={{ width: `${supplier.sustainability}%` }}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {supplier.certifications.map((cert, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-eco-primary text-eco-primary">
                      <Leaf className="h-3 w-3 mr-1" />
                      {cert}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1 bg-eco-primary hover:bg-eco-primary-dark">
                    <Package className="h-4 w-4 mr-2" />
                    Request Quote
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <Card className="shadow-card bg-gradient-card">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-eco-primary">{suppliers.length}</div>
                <p className="text-sm text-muted-foreground">Verified Suppliers</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-eco-success">24/7</div>
                <p className="text-sm text-muted-foreground">Platform Support</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-eco-warning">93%</div>
                <p className="text-sm text-muted-foreground">Avg Sustainability</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-eco-primary-light">48h</div>
                <p className="text-sm text-muted-foreground">Avg Response Time</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SuppliersPage;