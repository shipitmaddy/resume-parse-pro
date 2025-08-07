import { FileText, Cpu, Download, Shield, Clock, UserCheck } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Smart Document Parsing",
      description: "Advanced AI extracts all information from PDF and DOCX files with 99% accuracy",
    },
    {
      icon: Cpu,
      title: "Instant Processing",
      description: "Your resume is parsed and structured in under 10 seconds using cutting-edge AI",
    },
    {
      icon: UserCheck,
      title: "Complete Profile Generation",
      description: "Automatically generates comprehensive profiles with all your career details",
    },
    {
      icon: Download,
      title: "Multiple Export Formats",
      description: "Export your parsed data in JSON, CSV, or integrate with job platforms",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your documents are processed securely and never stored permanently",
    },
    {
      icon: Clock,
      title: "Save Hours of Work",
      description: "Skip manual form filling and focus on what matters - getting the job",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-inter mb-6">
            Why Choose
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              ResumeSync?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your job application process with AI-powered resume parsing 
            that understands the nuances of professional documents.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:shadow-card transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-accent transition-all duration-300">
                <feature.icon className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold font-inter mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};