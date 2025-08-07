import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code, 
  Languages, 
  FileText,
  Edit,
  Download,
  Share,
  ArrowLeft,
  ExternalLink,
  Github,
  Linkedin
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Mock data - this would come from your backend when Supabase is connected
const mockProfile = {
  personal: {
    fullName: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedin: "linkedin.com/in/sarah-johnson",
    github: "github.com/sarahjohnson",
    website: "sarahjohnson.dev"
  },
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      startYear: "2018",
      endYear: "2020",
      gpa: "3.8/4.0",
      coursework: ["Machine Learning", "Data Structures", "Software Engineering"]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "UC Berkeley",
      startYear: "2014",
      endYear: "2018",
      gpa: "3.7/4.0",
      coursework: ["Algorithms", "Database Systems", "Web Development"]
    }
  ],
  experience: [
    {
      company: "TechCorp Inc.",
      position: "Senior Software Engineer",
      startDate: "Jan 2022",
      endDate: "Present",
      location: "San Francisco, CA",
      responsibilities: [
        "Lead development of scalable web applications using React and Node.js",
        "Mentor junior developers and conduct code reviews",
        "Collaborate with product team to define technical requirements"
      ]
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer",
      startDate: "June 2020",
      endDate: "Dec 2021",
      location: "San Francisco, CA",
      responsibilities: [
        "Built responsive web applications using modern JavaScript frameworks",
        "Implemented RESTful APIs and database designs",
        "Optimized application performance and user experience"
      ]
    }
  ],
  skills: {
    technical: ["JavaScript", "React", "Node.js", "Python", "SQL", "AWS", "Docker", "Git"],
    soft: ["Leadership", "Communication", "Problem Solving", "Team Collaboration"]
  },
  languages: ["English (Native)", "Spanish (Fluent)", "French (Intermediate)"],
  projects: [
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      demo: "https://demo.example.com",
      github: "https://github.com/example/ecommerce"
    },
    {
      title: "Task Management App",
      description: "Real-time collaborative task management application",
      technologies: ["Vue.js", "Firebase", "WebSocket"],
      demo: "https://tasks.example.com",
      github: "https://github.com/example/tasks"
    }
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      url: "https://aws.amazon.com/certification/"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      url: "https://cloud.google.com/certification"
    }
  ]
};

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <div className="bg-background/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/")}
                className="hover:bg-accent"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-xl font-bold font-inter">Profile Overview</h1>
                <p className="text-sm text-muted-foreground">AI-extracted resume data</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Edit</span>
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Export</span>
              </Button>
              <Button variant="accent" size="sm">
                <Share className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Share</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Personal Info & Summary */}
          <div className="lg:col-span-1 space-y-6">
            {/* Personal Information Card */}
            <Card className="animate-fade-in shadow-card hover:shadow-premium transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <Avatar className="w-20 sm:w-24 h-20 sm:h-24 mx-auto mb-4">
                  <AvatarImage src="" />
                  <AvatarFallback className="text-xl sm:text-2xl font-bold bg-gradient-accent text-accent-foreground">
                    {mockProfile.personal.fullName.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl sm:text-2xl font-inter">{mockProfile.personal.fullName}</CardTitle>
                <p className="text-muted-foreground">Senior Software Engineer</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm break-all">{mockProfile.personal.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm">{mockProfile.personal.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-sm">{mockProfile.personal.location}</span>
                </div>
                <Separator />
                <div className="space-y-2">
                  <a href={`https://${mockProfile.personal.linkedin}`} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center space-x-3 text-sm hover:text-accent-foreground transition-colors group">
                    <Linkedin className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground flex-shrink-0" />
                    <span className="truncate">LinkedIn Profile</span>
                    <ExternalLink className="h-3 w-3 flex-shrink-0" />
                  </a>
                  <a href={`https://${mockProfile.personal.github}`} target="_blank" rel="noopener noreferrer"
                     className="flex items-center space-x-3 text-sm hover:text-accent-foreground transition-colors group">
                    <Github className="h-4 w-4 text-muted-foreground group-hover:text-accent-foreground flex-shrink-0" />
                    <span className="truncate">GitHub Profile</span>
                    <ExternalLink className="h-3 w-3 flex-shrink-0" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Skills Card */}
            <Card className="animate-fade-in-up shadow-card hover:shadow-premium transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Code className="h-5 w-5" />
                  <span>Skills</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {mockProfile.skills.technical.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="hover:bg-accent transition-colors text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {mockProfile.skills.soft.map((skill, index) => (
                      <Badge key={index} variant="outline" className="hover:bg-accent transition-colors text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages Card */}
            <Card className="animate-fade-in-up shadow-card hover:shadow-premium transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Languages className="h-5 w-5" />
                  <span>Languages</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {mockProfile.languages.map((language, index) => (
                    <div key={index} className="text-sm">{language}</div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Experience, Education, etc. */}
          <div className="lg:col-span-2 space-y-6">
            {/* Experience */}
            <Card className="animate-fade-in shadow-card hover:shadow-premium transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Briefcase className="h-5 w-5" />
                  <span>Work Experience</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockProfile.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-accent pl-4 sm:pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                      <div className="mb-2">
                        <h3 className="font-semibold text-lg">{exp.position}</h3>
                        <p className="text-muted-foreground font-medium">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.startDate} - {exp.endDate} • {exp.location}</p>
                      </div>
                      <ul className="space-y-1">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="animate-fade-in-up shadow-card hover:shadow-premium transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5" />
                  <span>Education</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {mockProfile.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-accent pl-4 sm:pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-accent rounded-full"></div>
                      <div>
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <p className="text-muted-foreground font-medium">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground mb-2">{edu.startYear} - {edu.endYear} • GPA: {edu.gpa}</p>
                        <div className="flex flex-wrap gap-1">
                          {edu.coursework.map((course, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="animate-fade-in-up shadow-card hover:shadow-premium transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5" />
                  <span>Projects</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  {mockProfile.projects.map((project, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg hover:shadow-card transition-all duration-300 hover:transform hover:-translate-y-1">
                      <h3 className="font-semibold mb-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.map((tech, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex space-x-2">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" 
                           className="text-xs text-accent-foreground hover:underline flex items-center">
                          Demo <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                           className="text-xs text-accent-foreground hover:underline flex items-center">
                          Code <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="animate-fade-in-up shadow-card hover:shadow-premium transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Award className="h-5 w-5" />
                  <span>Certifications</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockProfile.certifications.map((cert, index) => (
                    <div key={index} className="flex items-start justify-between p-3 border border-border rounded-lg hover:bg-accent/5 transition-colors">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                      </div>
                      <a href={cert.url} target="_blank" rel="noopener noreferrer"
                         className="text-accent-foreground hover:text-accent transition-colors ml-2 flex-shrink-0">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;