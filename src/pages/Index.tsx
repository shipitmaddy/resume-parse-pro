import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { HowItWorks } from "@/components/how-it-works";
import { Footer } from "@/components/footer";
import { useAuth } from "@/hooks/useAuth";

const Index = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated, loading, navigate]);

  return (
    <div className="min-h-screen">
      <nav className="absolute top-4 right-4 z-10">
        {!loading && !isAuthenticated && (
          <Button onClick={() => navigate("/auth")} variant="outline">
            Sign In
          </Button>
        )}
      </nav>
      <HeroSection />
      <FeaturesSection />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
