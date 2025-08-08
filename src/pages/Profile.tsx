import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Phone, MapPin, Calendar, Building, GraduationCap, Code, Award, ExternalLink, Save, Edit, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    // Personal Information
    fullName: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    linkedIn: "linkedin.com/in/sarahjohnson",
    github: "github.com/sarahjohnson",
    portfolio: "sarahjohnson.dev",
    
    // Professional Summary
    summary: "Full-stack developer with 5+ years of experience building scalable web applications. Passionate about clean code and user experience.",
    
    // Experience
    experience: [
      {
        company: "TechCorp Inc.",
        position: "Senior Software Engineer",
        duration: "2022 - Present",
        location: "San Francisco, CA",
        responsibilities: "Lead development of microservices architecture, mentor junior developers, implement CI/CD pipelines"
      },
      {
        company: "StartupXYZ",
        position: "Full Stack Developer",
        duration: "2020 - 2022",
        location: "Remote",
        responsibilities: "Built responsive web applications using React and Node.js, integrated third-party APIs, optimized database performance"
      }
    ],
    
    // Education
    education: [
      {
        degree: "B.S. Computer Science",
        institution: "Stanford University",
        duration: "2016 - 2020",
        gpa: "3.8/4.0"
      }
    ],
    
    // Skills
    skills: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Git"],
    
    // Projects
    projects: [
      {
        name: "E-commerce Platform",
        description: "Full-stack e-commerce solution with payment integration",
        technologies: ["React", "Node.js", "Stripe API"],
        link: "github.com/sarahjohnson/ecommerce"
      },
      {
        name: "Task Management App",
        description: "Real-time collaborative task management application",
        technologies: ["Vue.js", "Socket.io", "MongoDB"],
        link: "github.com/sarahjohnson/taskmanager"
      }
    ],
    
    // Certifications
    certifications: [
      {
        name: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        date: "2023",
        url: "aws.amazon.com/certification"
      }
    ],
    
    // Languages
    languages: ["English (Native)", "Spanish (Conversational)", "French (Basic)"]
  });

  const handleArrayChange = (section: string, value: string[]) => {
    setProfileData(prev => ({
      ...prev,
      [section]: value
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would save to your backend
    console.log("Saving profile data:", profileData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 sm:py-6">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/")}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <div className="hidden sm:block h-6 w-px bg-border" />
              <h1 className="text-xl sm:text-2xl font-bold">Profile Dashboard</h1>
            </div>
            <Button
              onClick={() => isEditing ? handleSave() : setIsEditing(true)}
              className="bg-gradient-accent hover:opacity-90 text-accent-foreground"
            >
              {isEditing ? (
                <>
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Personal Information Card */}
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <User className="h-5 w-5 mr-2 text-accent" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-accent-foreground">
                      {profileData.fullName.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  {isEditing ? (
                    <Input
                      value={profileData.fullName}
                      onChange={(e) => setProfileData(prev => ({ ...prev, fullName: e.target.value }))}
                      className="text-center font-semibold text-lg bg-input border-border"
                    />
                  ) : (
                    <h2 className="text-xl font-semibold">{profileData.fullName}</h2>
                  )}
                </div>

                <Separator />

                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-3 text-muted-foreground" />
                    {isEditing ? (
                      <Input
                        value={profileData.email}
                        onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                        className="flex-1 bg-input border-border"
                      />
                    ) : (
                      <span className="text-sm">{profileData.email}</span>
                    )}
                  </div>

                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-3 text-muted-foreground" />
                    {isEditing ? (
                      <Input
                        value={profileData.phone}
                        onChange={(e) => setProfileData(prev => ({ ...prev, phone: e.target.value }))}
                        className="flex-1 bg-input border-border"
                      />
                    ) : (
                      <span className="text-sm">{profileData.phone}</span>
                    )}
                  </div>

                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-3 text-muted-foreground" />
                    {isEditing ? (
                      <Input
                        value={profileData.location}
                        onChange={(e) => setProfileData(prev => ({ ...prev, location: e.target.value }))}
                        className="flex-1 bg-input border-border"
                      />
                    ) : (
                      <span className="text-sm">{profileData.location}</span>
                    )}
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Links</h4>
                  <div className="space-y-2">
                    {['linkedIn', 'github', 'portfolio'].map((link) => (
                      <div key={link} className="flex items-center">
                        <ExternalLink className="h-3 w-3 mr-2 text-muted-foreground" />
                        {isEditing ? (
                          <Input
                            value={profileData[link as keyof typeof profileData] as string}
                            onChange={(e) => setProfileData(prev => ({ ...prev, [link]: e.target.value }))}
                            className="text-xs flex-1 bg-input border-border"
                            placeholder={`${link} URL`}
                          />
                        ) : (
                          <a 
                            href={`https://${profileData[link as keyof typeof profileData]}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-accent hover:underline"
                          >
                            {profileData[link as keyof typeof profileData] as string}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills Card */}
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Code className="h-5 w-5 mr-2 text-accent" />
                  Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <div className="space-y-2">
                    <Label>Skills (comma separated)</Label>
                    <Textarea
                      value={profileData.skills.join(', ')}
                      onChange={(e) => handleArrayChange('skills', e.target.value.split(', ').map(s => s.trim()))}
                      placeholder="JavaScript, React, Node.js..."
                      className="min-h-[100px] bg-input border-border"
                    />
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {profileData.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Languages Card */}
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <div className="space-y-2">
                    <Label>Languages (comma separated)</Label>
                    <Textarea
                      value={profileData.languages.join(', ')}
                      onChange={(e) => handleArrayChange('languages', e.target.value.split(', ').map(s => s.trim()))}
                      placeholder="English (Native), Spanish (Conversational)..."
                      className="bg-input border-border"
                    />
                  </div>
                ) : (
                  <div className="space-y-1">
                    {profileData.languages.map((language, index) => (
                      <div key={index} className="text-sm">{language}</div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Professional Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Professional Summary */}
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Professional Summary</CardTitle>
              </CardHeader>
              <CardContent>
                {isEditing ? (
                  <Textarea
                    value={profileData.summary}
                    onChange={(e) => setProfileData(prev => ({ ...prev, summary: e.target.value }))}
                    className="min-h-[100px] bg-input border-border"
                    placeholder="Describe your professional background..."
                  />
                ) : (
                  <p className="text-muted-foreground leading-relaxed">{profileData.summary}</p>
                )}
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Building className="h-5 w-5 mr-2 text-accent" />
                  Work Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {profileData.experience.map((exp, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      {isEditing ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                          <Input
                            value={exp.position}
                            onChange={(e) => {
                              const newExp = [...profileData.experience];
                              newExp[index].position = e.target.value;
                              setProfileData(prev => ({ ...prev, experience: newExp }));
                            }}
                            placeholder="Position"
                            className="bg-input border-border"
                          />
                          <Input
                            value={exp.company}
                            onChange={(e) => {
                              const newExp = [...profileData.experience];
                              newExp[index].company = e.target.value;
                              setProfileData(prev => ({ ...prev, experience: newExp }));
                            }}
                            placeholder="Company"
                            className="bg-input border-border"
                          />
                        </div>
                      ) : (
                        <>
                          <div>
                            <h3 className="font-semibold">{exp.position}</h3>
                            <p className="text-accent font-medium">{exp.company}</p>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {exp.duration}
                          </div>
                        </>
                      )}
                    </div>
                    
                    {isEditing ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Input
                          value={exp.duration}
                          onChange={(e) => {
                            const newExp = [...profileData.experience];
                            newExp[index].duration = e.target.value;
                            setProfileData(prev => ({ ...prev, experience: newExp }));
                          }}
                          placeholder="Duration"
                          className="bg-input border-border"
                        />
                        <Input
                          value={exp.location}
                          onChange={(e) => {
                            const newExp = [...profileData.experience];
                            newExp[index].location = e.target.value;
                            setProfileData(prev => ({ ...prev, experience: newExp }));
                          }}
                          placeholder="Location"
                          className="bg-input border-border"
                        />
                      </div>
                    ) : (
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    )}

                    {isEditing ? (
                      <Textarea
                        value={exp.responsibilities}
                        onChange={(e) => {
                          const newExp = [...profileData.experience];
                          newExp[index].responsibilities = e.target.value;
                          setProfileData(prev => ({ ...prev, experience: newExp }));
                        }}
                        placeholder="Key responsibilities and achievements..."
                        className="min-h-[80px] bg-input border-border"
                      />
                    ) : (
                      <p className="text-sm text-muted-foreground leading-relaxed">{exp.responsibilities}</p>
                    )}

                    {index < profileData.experience.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <GraduationCap className="h-5 w-5 mr-2 text-accent" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                {profileData.education.map((edu, index) => (
                  <div key={index} className="space-y-3">
                    {isEditing ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Input
                          value={edu.degree}
                          onChange={(e) => {
                            const newEdu = [...profileData.education];
                            newEdu[index].degree = e.target.value;
                            setProfileData(prev => ({ ...prev, education: newEdu }));
                          }}
                          placeholder="Degree"
                          className="bg-input border-border"
                        />
                        <Input
                          value={edu.institution}
                          onChange={(e) => {
                            const newEdu = [...profileData.education];
                            newEdu[index].institution = e.target.value;
                            setProfileData(prev => ({ ...prev, education: newEdu }));
                          }}
                          placeholder="Institution"
                          className="bg-input border-border"
                        />
                        <Input
                          value={edu.duration}
                          onChange={(e) => {
                            const newEdu = [...profileData.education];
                            newEdu[index].duration = e.target.value;
                            setProfileData(prev => ({ ...prev, education: newEdu }));
                          }}
                          placeholder="Duration"
                          className="bg-input border-border"
                        />
                        <Input
                          value={edu.gpa}
                          onChange={(e) => {
                            const newEdu = [...profileData.education];
                            newEdu[index].gpa = e.target.value;
                            setProfileData(prev => ({ ...prev, education: newEdu }));
                          }}
                          placeholder="GPA"
                          className="bg-input border-border"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <div>
                            <h3 className="font-semibold">{edu.degree}</h3>
                            <p className="text-accent font-medium">{edu.institution}</p>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {edu.duration}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">GPA: {edu.gpa}</p>
                      </>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Projects */}
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {profileData.projects.map((project, index) => (
                  <div key={index} className="space-y-3">
                    {isEditing ? (
                      <div className="space-y-3">
                        <Input
                          value={project.name}
                          onChange={(e) => {
                            const newProjects = [...profileData.projects];
                            newProjects[index].name = e.target.value;
                            setProfileData(prev => ({ ...prev, projects: newProjects }));
                          }}
                          placeholder="Project Name"
                          className="bg-input border-border"
                        />
                        <Textarea
                          value={project.description}
                          onChange={(e) => {
                            const newProjects = [...profileData.projects];
                            newProjects[index].description = e.target.value;
                            setProfileData(prev => ({ ...prev, projects: newProjects }));
                          }}
                          placeholder="Project Description"
                          className="bg-input border-border"
                        />
                        <Input
                          value={project.technologies.join(', ')}
                          onChange={(e) => {
                            const newProjects = [...profileData.projects];
                            newProjects[index].technologies = e.target.value.split(', ').map(s => s.trim());
                            setProfileData(prev => ({ ...prev, projects: newProjects }));
                          }}
                          placeholder="Technologies (comma separated)"
                          className="bg-input border-border"
                        />
                        <Input
                          value={project.link}
                          onChange={(e) => {
                            const newProjects = [...profileData.projects];
                            newProjects[index].link = e.target.value;
                            setProfileData(prev => ({ ...prev, projects: newProjects }));
                          }}
                          placeholder="Project Link"
                          className="bg-input border-border"
                        />
                      </div>
                    ) : (
                      <>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                          <h3 className="font-semibold">{project.name}</h3>
                          <a 
                            href={`https://${project.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline text-sm flex items-center"
                          >
                            <ExternalLink className="h-3 w-3 mr-1" />
                            View Project
                          </a>
                        </div>
                        <p className="text-sm text-muted-foreground">{project.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </>
                    )}
                    {index < profileData.projects.length - 1 && <Separator />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-card border-border shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Award className="h-5 w-5 mr-2 text-accent" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                {profileData.certifications.map((cert, index) => (
                  <div key={index} className="space-y-2">
                    {isEditing ? (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <Input
                          value={cert.name}
                          onChange={(e) => {
                            const newCerts = [...profileData.certifications];
                            newCerts[index].name = e.target.value;
                            setProfileData(prev => ({ ...prev, certifications: newCerts }));
                          }}
                          placeholder="Certification Name"
                          className="bg-input border-border"
                        />
                        <Input
                          value={cert.issuer}
                          onChange={(e) => {
                            const newCerts = [...profileData.certifications];
                            newCerts[index].issuer = e.target.value;
                            setProfileData(prev => ({ ...prev, certifications: newCerts }));
                          }}
                          placeholder="Issuer"
                          className="bg-input border-border"
                        />
                        <Input
                          value={cert.date}
                          onChange={(e) => {
                            const newCerts = [...profileData.certifications];
                            newCerts[index].date = e.target.value;
                            setProfileData(prev => ({ ...prev, certifications: newCerts }));
                          }}
                          placeholder="Date"
                          className="bg-input border-border"
                        />
                        <Input
                          value={cert.url}
                          onChange={(e) => {
                            const newCerts = [...profileData.certifications];
                            newCerts[index].url = e.target.value;
                            setProfileData(prev => ({ ...prev, certifications: newCerts }));
                          }}
                          placeholder="Verification URL"
                          className="bg-input border-border"
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div>
                          <h3 className="font-semibold">{cert.name}</h3>
                          <p className="text-sm text-muted-foreground">{cert.issuer} • {cert.date}</p>
                        </div>
                        <a 
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline text-sm flex items-center"
                        >
                          <ExternalLink className="h-3 w-3 mr-1" />
                          Verify
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}