import { Upload, Cpu, CheckCircle, Download } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Upload Resume",
      description: "Drag and drop your PDF or DOCX resume file",
      step: "01",
    },
    {
      icon: Cpu,
      title: "AI Processing",
      description: "Our AI extracts and structures all your information",
      step: "02",
    },
    {
      icon: CheckCircle,
      title: "Review & Edit",
      description: "Verify extracted data and fill any missing details",
      step: "03",
    },
    {
      icon: Download,
      title: "Export Profile",
      description: "Download or integrate with job application platforms",
      step: "04",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter mb-4 sm:mb-6">
            How It
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to transform your resume into a complete, structured profile
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 sm:mb-8">
                <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-accent transition-all duration-300 group-hover:scale-110">
                  <step.icon className="h-10 w-10 text-accent-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold font-mono">
                  {step.step}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-border -translate-x-4 z-0">
                    <div className="absolute right-0 top-0 w-2 h-2 bg-border rounded-full transform translate-x-1 -translate-y-0.5"></div>
                  </div>
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold font-inter mb-3">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};