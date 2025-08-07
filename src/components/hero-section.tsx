import { Button } from "@/components/ui/button";
import { UploadZone } from "@/components/ui/upload-zone";
import heroImage from "@/assets/hero-image.jpg";
import { CheckCircle, Zap, Shield, Clock } from "lucide-react";

export const HeroSection = () => {
  const handleFileSelect = (file: File) => {
    console.log("File selected:", file.name);
    // TODO: Handle file upload when Supabase is connected
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 lg:px-12">
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
      <div className="container mx-auto px-6 lg:px-12 pt-12 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold font-inter leading-tight">
                Transform Your
                <span className="block bg-gradient-accent bg-clip-text text-transparent">
                  Resume Into
                </span>
                Complete Profile
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our AI instantly extracts and structures all your information from PDF or DOCX resumes. 
                Complete your job application profile in minutes, not hours.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold font-inter">Instant</h3>
                <p className="text-sm text-muted-foreground">Seconds to parse</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold font-inter">Secure</h3>
                <p className="text-sm text-muted-foreground">Privacy first</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="font-semibold font-inter">Smart</h3>
                <p className="text-sm text-muted-foreground">AI powered</p>
              </div>
            </div>

            {/* Upload Zone */}
            <UploadZone onFileSelect={handleFileSelect} />
            
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-accent-foreground" />
              <span>Free to try • No signup required • Instant results</span>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
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