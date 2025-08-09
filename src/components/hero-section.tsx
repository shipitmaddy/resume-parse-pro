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
    <div className="min-h-screen bg-gradient-premium overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-shine opacity-30"></div>
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between p-4 sm:p-6 lg:px-12 animate-fade-in border-b border-border backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-accent rounded-xl flex items-center justify-center shadow-glow">
            <span className="font-bold text-accent-foreground font-playfair text-lg">R</span>
          </div>
          <span className="text-2xl font-bold font-playfair tracking-tight">ResumeSync</span>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden sm:flex font-inter font-medium hover:bg-secondary/50 transition-shine">
            Sign In
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate("/profile")}
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground shadow-accent font-inter font-semibold transition-shine"
          >
            View Demo
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 pt-12 sm:pt-20 pb-20 sm:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 sm:space-y-10 animate-fade-in-up">
            <div className="space-y-6 sm:space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-playfair leading-[1.1] tracking-tight">
                Transform Your
                <span className="block bg-gradient-accent bg-clip-text text-transparent drop-shadow-lg">
                  Resume Into
                </span>
                <span className="block text-foreground">Complete Profile</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed font-inter font-light max-w-xl">
                Our AI instantly extracts and structures all your information from PDF or DOCX resumes. 
                Complete your job application profile in minutes, not hours.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center group hover:scale-110 transition-all duration-500 ease-bounce">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-500 shadow-card border border-border/20">
                  <Zap className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-bold font-playfair text-lg">Instant</h3>
                <p className="text-muted-foreground font-inter">Seconds to parse</p>
              </div>
              <div className="text-center group hover:scale-110 transition-all duration-500 ease-bounce">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-500 shadow-card border border-border/20">
                  <Shield className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-bold font-playfair text-lg">Secure</h3>
                <p className="text-muted-foreground font-inter">Privacy first</p>
              </div>
              <div className="text-center group hover:scale-110 transition-all duration-500 ease-bounce">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-500 shadow-card border border-border/20">
                  <Clock className="h-8 w-8 text-accent-foreground" />
                </div>
                <h3 className="font-bold font-playfair text-lg">Smart</h3>
                <p className="text-muted-foreground font-inter">AI powered</p>
              </div>
            </div>

            {/* Upload Zone */}
            <UploadZone onFileSelect={handleFileSelect} isUploading={isUploading} />
            
            <div className="flex items-center space-x-3 text-muted-foreground font-inter">
              <CheckCircle className="h-5 w-5 text-accent" />
              <span className="text-base">Free to try • No signup required • Instant results</span>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative order-first lg:order-last animate-float">
            <div className="absolute inset-0 bg-gradient-accent rounded-3xl blur-3xl opacity-30 transform rotate-3 scale-105"></div>
            <div className="absolute inset-0 bg-gradient-shine rounded-3xl opacity-40 transform -rotate-1"></div>
            <img
              src={heroImage}
              alt="Resume parsing visualization showcasing AI-powered document analysis"
              className="relative rounded-3xl shadow-premium w-full h-auto border border-border/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
};