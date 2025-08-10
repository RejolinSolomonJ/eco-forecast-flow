import { useState } from "react";
import Navigation from "@/components/Navigation";
import DashboardPage from "@/components/DashboardPage";
import ForecastingPage from "@/components/ForecastingPage";
import SuppliersPage from "@/components/SuppliersPage";
import ImpactPage from "@/components/ImpactPage";
import OrdersPage from "@/components/OrdersPage";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("dashboard");

  const renderPage = () => {
    switch (currentPage) {
      case "dashboard":
        return <DashboardPage onNavigate={setCurrentPage} />;
      case "forecasting":
        return <ForecastingPage />;
      case "suppliers":
        return <SuppliersPage />;
      case "impact":
        return <ImpactPage />;
      case "orders":
        return <OrdersPage />;
      default:
        return <DashboardPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
    </div>
  );
};

export default Index;
