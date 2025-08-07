import { Button } from "@/components/ui/button";
import { UploadZone } from "@/components/ui/upload-zone";
import heroImage from "@/assets/hero-image.jpg";
import { CheckCircle, Zap, Shield, Clock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const handleFileSelect = (file: File) => {
    console.log("File selected:", file.name);
    setIsUploading(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsUploading(false);
      navigate("/profile");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-soft overflow-hidden">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4 sm:p-6 lg:px-12 animate-fade-in">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-accent rounded-lg flex items-center justify-center">
            <span className="font-bold text-accent-foreground">R</span>
          </div>
          <span className="text-xl font-bold font-inter">ResumeSync</span>
        </div>
        <Button variant="ghost" className="font-medium">
          Sign In
        </Button>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-12 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-inter leading-tight">
                Transform Your
                <span className="block bg-gradient-accent bg-clip-text text-transparent">
                  Resume Into
                </span>
                Complete Profile
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                Our AI instantly extracts and structures all your information from PDF or DOCX resumes. 
                Complete your job application profile in minutes, not hours.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:shadow-accent transition-all duration-300">
                  <Zap className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold font-inter">Instant</h3>
                <p className="text-sm text-muted-foreground">Seconds to parse</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:shadow-accent transition-all duration-300">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold font-inter">Secure</h3>
                <p className="text-sm text-muted-foreground">Privacy first</p>
              </div>
              <div className="text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:shadow-accent transition-all duration-300">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold font-inter">Smart</h3>
                <p className="text-sm text-muted-foreground">AI powered</p>
              </div>
            </div>

            {/* Upload Zone */}
            <UploadZone onFileSelect={handleFileSelect} isUploading={isUploading} />
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-accent-foreground" />
              <span>Free to try • No signup required • Instant results</span>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative order-first lg:order-last animate-float">
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-20 transform rotate-3"></div>
            <img
              src={heroImage}
              alt="Resume parsing visualization"
              className="relative rounded-3xl shadow-premium w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};