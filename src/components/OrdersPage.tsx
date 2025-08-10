import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Package, Clock, CheckCircle, XCircle, Search, Filter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const OrdersPage = () => {
  const [showNewOrder, setShowNewOrder] = useState(false);
  const [filterStatus, setFilterStatus] = useState("all");
  const { toast } = useToast();

  const orders = [
    {
      id: "ORD-001",
      supplier: "GreenPack Solutions",
      product: "Compostable Food Containers",
      quantity: "5,000 units",
      status: "completed",
      requestDate: "2024-01-15",
      deliveryDate: "2024-01-20",
      totalValue: "$2,450",
      sustainability: 95
    },
    {
      id: "ORD-002",
      supplier: "EcoBox Manufacturing",
      product: "Biodegradable Shipping Boxes",
      quantity: "2,500 units",
      status: "pending",
      requestDate: "2024-01-18",
      estimatedDelivery: "2024-01-25",
      totalValue: "$1,875",
      sustainability: 92
    },
    {
      id: "ORD-003",
      supplier: "BioDegradable Innovations",
      product: "Marine Biodegradable Wrap",
      quantity: "10,000 meters",
      status: "in-progress",
      requestDate: "2024-01-12",
      estimatedDelivery: "2024-01-22",
      totalValue: "$3,200",
      sustainability: 98
    },
    {
      id: "ORD-004",
      supplier: "Sustainable Wrap Co",
      product: "Recyclable Protective Wrap",
      quantity: "7,500 units",
      status: "rejected",
      requestDate: "2024-01-10",
      rejectionReason: "Quantity below minimum order",
      totalValue: "$890",
      sustainability: 88
    }
  ];

  const suppliers = [
    "GreenPack Solutions",
    "EcoBox Manufacturing", 
    "BioDegradable Innovations",
    "Sustainable Wrap Co"
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-eco-success" />;
      case "pending":
        return <Clock className="h-4 w-4 text-eco-warning" />;
      case "in-progress":
        return <Package className="h-4 w-4 text-eco-primary" />;
      case "rejected":
        return <XCircle className="h-4 w-4 text-destructive" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: "bg-eco-success/10 text-eco-success border-eco-success/20",
      pending: "bg-eco-warning/10 text-eco-warning border-eco-warning/20",
      "in-progress": "bg-eco-primary/10 text-eco-primary border-eco-primary/20",
      rejected: "bg-destructive/10 text-destructive border-destructive/20"
    };
    
    return (
      <Badge variant="outline" className={variants[status as keyof typeof variants]}>
        {getStatusIcon(status)}
        <span className="ml-1 capitalize">{status.replace("-", " ")}</span>
      </Badge>
    );
  };

  const filteredOrders = filterStatus === "all" 
    ? orders 
    : orders.filter(order => order.status === filterStatus);

  const handleSubmitOrder = () => {
    toast({
      title: "Order Request Sent",
      description: "Your order request has been sent to the supplier. You'll receive a response within 24 hours.",
    });
    setShowNewOrder(false);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Order Management</h1>
            <p className="text-muted-foreground">
              Send requests and track orders with biodegradable packaging suppliers
            </p>
          </div>
          <Button 
            onClick={() => setShowNewOrder(true)}
            className="bg-eco-primary hover:bg-eco-primary-dark"
          >
            <Plus className="h-4 w-4 mr-2" />
            New Order Request
          </Button>
        </div>

        {/* New Order Form */}
        {showNewOrder && (
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Create New Order Request</CardTitle>
              <CardDescription>
                Send a detailed order request to a biodegradable packaging supplier
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="supplier">Supplier</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a supplier" />
                    </SelectTrigger>
                    <SelectContent>
                      {suppliers.map((supplier) => (
                        <SelectItem key={supplier} value={supplier}>
                          {supplier}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="product">Product Type</Label>
                  <Input placeholder="e.g., Compostable Food Containers" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input placeholder="e.g., 5,000 units" />
                </div>
                <div>
                  <Label htmlFor="budget">Budget Range</Label>
                  <Input placeholder="e.g., $2,000 - $3,000" />
                </div>
                <div>
                  <Label htmlFor="delivery">Required Delivery</Label>
                  <Input type="date" />
                </div>
              </div>

              <div>
                <Label htmlFor="requirements">Special Requirements</Label>
                <Textarea 
                  placeholder="Describe any specific requirements, certifications needed, or additional details..."
                  className="h-24"
                />
              </div>

              <div className="flex gap-2 pt-4">
                <Button onClick={handleSubmitOrder} className="bg-eco-primary hover:bg-eco-primary-dark">
                  Send Request
                </Button>
                <Button variant="outline" onClick={() => setShowNewOrder(false)}>
                  Cancel
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Filters and Search */}
        <Card className="shadow-card">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search orders..." className="pl-10" />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="rejected">Rejected</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <Card key={order.id} className="shadow-card hover:shadow-eco transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-lg">{order.id}</h3>
                      {getStatusBadge(order.status)}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p><strong>Supplier:</strong> {order.supplier}</p>
                      <p><strong>Product:</strong> {order.product}</p>
                      <p><strong>Quantity:</strong> {order.quantity}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Request Date</p>
                      <p className="font-semibold">{order.requestDate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">
                        {order.status === "completed" ? "Delivered" : "Est. Delivery"}
                      </p>
                      <p className="font-semibold">
                        {order.deliveryDate || order.estimatedDelivery}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Total Value</p>
                      <p className="font-semibold">{order.totalValue}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Sustainability</p>
                      <div className="flex items-center gap-1">
                        <span className="font-semibold text-eco-success">{order.sustainability}%</span>
                        <div className="w-12 bg-muted rounded-full h-1.5">
                          <div 
                            className="bg-eco-success h-1.5 rounded-full"
                            style={{ width: `${order.sustainability}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    {order.status === "pending" && (
                      <Button variant="outline" size="sm">
                        Modify
                      </Button>
                    )}
                  </div>
                </div>

                {order.status === "rejected" && order.rejectionReason && (
                  <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
                    <p className="text-sm text-destructive">
                      <strong>Rejection Reason:</strong> {order.rejectionReason}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-card">
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-eco-primary">
                {orders.filter(o => o.status === "completed").length}
              </div>
              <p className="text-sm text-muted-foreground">Completed Orders</p>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-eco-warning">
                {orders.filter(o => o.status === "pending").length}
              </div>
              <p className="text-sm text-muted-foreground">Pending Requests</p>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-eco-success">
                $8.4k
              </div>
              <p className="text-sm text-muted-foreground">Total Order Value</p>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="pt-6 text-center">
              <div className="text-2xl font-bold text-eco-primary-light">
                93%
              </div>
              <p className="text-sm text-muted-foreground">Avg Sustainability</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrdersPage;