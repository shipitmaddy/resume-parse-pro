import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Plus, Trash2, User, Briefcase, GraduationCap, Settings, Link2, MapPin, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  percentage: string;
}

interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
}

export default function Profile() {
  const navigate = useNavigate();
  
  // Personal Information
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "John",
    lastName: "Doe", 
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    dateOfBirth: new Date(1990, 0, 15),
    gender: "male",
    currentLocation: "San Francisco",
    state: "California",
    address: "123 Tech Street, San Francisco, CA 94105"
  });

  // Professional Information
  const [professionalInfo, setProfessionalInfo] = useState({
    totalExperience: "5",
    currentCTC: "120000",
    expectedCTC: "150000",
    noticePeriod: "30"
  });

  // Social Links
  const [socialLinks, setSocialLinks] = useState({
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    portfolio: "https://johndoe.dev"
  });

  // Education & Experience
  const [education, setEducation] = useState<Education[]>([
    { id: "1", degree: "Bachelor of Computer Science", institution: "Stanford University", year: "2012", percentage: "3.8 GPA" },
    { id: "2", degree: "Master of Software Engineering", institution: "MIT", year: "2014", percentage: "3.9 GPA" }
  ]);

  const [experience, setExperience] = useState<Experience[]>([
    { id: "1", company: "Google", position: "Senior Software Engineer", duration: "2020 - Present", description: "Led development of scalable web applications using React and Node.js" },
    { id: "2", company: "Facebook", position: "Software Engineer", duration: "2017 - 2020", description: "Built user-facing features for the main platform serving millions of users" }
  ]);

  const [skills] = useState([
    "React", "TypeScript", "Node.js", "Python", "AWS", "Docker", "GraphQL", "MongoDB"
  ]);

  const addEducation = () => {
    const newEducation: Education = {
      id: Date.now().toString(),
      degree: "",
      institution: "",
      year: "",
      percentage: ""
    };
    setEducation([...education, newEducation]);
  };

  const removeEducation = (id: string) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  const updateEducation = (id: string, field: keyof Education, value: string) => {
    setEducation(education.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const addExperience = () => {
    const newExperience: Experience = {
      id: Date.now().toString(),
      company: "",
      position: "",
      duration: "",
      description: ""
    };
    setExperience([...experience, newExperience]);
  };

  const removeExperience = (id: string) => {
    setExperience(experience.filter(exp => exp.id !== id));
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    setExperience(experience.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ));
  };

  const handleSave = () => {
    console.log("Saving profile data:", {
      personalInfo,
      professionalInfo,
      socialLinks,
      education,
      experience,
      skills
    });
    // Here you would typically save to your backend/database
  };

  return (
    <div className="min-h-screen bg-gradient-premium">
      <div className="absolute inset-0 bg-gradient-shine opacity-20"></div>
      
      {/* Header */}
      <div className="relative z-10 border-b border-border/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate("/")}
                className="hover:bg-secondary/50"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
              <div>
                <h1 className="text-3xl font-bold font-playfair">My Profile</h1>
                <p className="text-muted-foreground font-inter">Manage your professional information</p>
              </div>
            </div>
            <Button onClick={handleSave} className="bg-gradient-accent text-accent-foreground shadow-glow">
              Save Changes
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <Tabs defaultValue="personal" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-fit bg-card/50 backdrop-blur-sm border border-border/20">
            <TabsTrigger value="personal" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span className="hidden sm:inline">Personal</span>
            </TabsTrigger>
            <TabsTrigger value="professional" className="flex items-center space-x-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Professional</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center space-x-2">
              <GraduationCap className="h-4 w-4" />
              <span className="hidden sm:inline">Education</span>
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center space-x-2">
              <Briefcase className="h-4 w-4" />
              <span className="hidden sm:inline">Experience</span>
            </TabsTrigger>
            <TabsTrigger value="links" className="flex items-center space-x-2">
              <Link2 className="h-4 w-4" />
              <span className="hidden sm:inline">Links</span>
            </TabsTrigger>
          </TabsList>

          {/* Personal Information */}
          <TabsContent value="personal">
            <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-card">
              <CardHeader>
                <CardTitle className="font-playfair flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Personal Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={personalInfo.firstName}
                      onChange={(e) => setPersonalInfo({...personalInfo, firstName: e.target.value})}
                      className="bg-secondary/50 border-border/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={personalInfo.lastName}
                      onChange={(e) => setPersonalInfo({...personalInfo, lastName: e.target.value})}
                      className="bg-secondary/50 border-border/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={personalInfo.email}
                      onChange={(e) => setPersonalInfo({...personalInfo, email: e.target.value})}
                      className="bg-secondary/50 border-border/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      value={personalInfo.phone}
                      onChange={(e) => setPersonalInfo({...personalInfo, phone: e.target.value})}
                      className="bg-secondary/50 border-border/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Date of Birth *</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal bg-secondary/50 border-border/20",
                            !personalInfo.dateOfBirth && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {personalInfo.dateOfBirth ? format(personalInfo.dateOfBirth, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-card/90 backdrop-blur-sm border-border/20" align="start">
                        <Calendar
                          mode="single"
                          selected={personalInfo.dateOfBirth}
                          onSelect={(date) => date && setPersonalInfo({...personalInfo, dateOfBirth: date})}
                          disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender</Label>
                    <Select value={personalInfo.gender} onValueChange={(value) => setPersonalInfo({...personalInfo, gender: value})}>
                      <SelectTrigger className="bg-secondary/50 border-border/20">
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent className="bg-card/90 backdrop-blur-sm border-border/20">
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                        <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentLocation">Current Location *</Label>
                    <Input
                      id="currentLocation"
                      value={personalInfo.currentLocation}
                      onChange={(e) => setPersonalInfo({...personalInfo, currentLocation: e.target.value})}
                      className="bg-secondary/50 border-border/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={personalInfo.state}
                      onChange={(e) => setPersonalInfo({...personalInfo, state: e.target.value})}
                      className="bg-secondary/50 border-border/20"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Full Address</Label>
                  <Textarea
                    id="address"
                    value={personalInfo.address}
                    onChange={(e) => setPersonalInfo({...personalInfo, address: e.target.value})}
                    className="bg-secondary/50 border-border/20"
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Professional Information */}
          <TabsContent value="professional">
            <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-card">
              <CardHeader>
                <CardTitle className="font-playfair flex items-center space-x-2">
                  <Briefcase className="h-5 w-5" />
                  <span>Professional Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="totalExperience">Total Experience (Years) *</Label>
                    <Select value={professionalInfo.totalExperience} onValueChange={(value) => setProfessionalInfo({...professionalInfo, totalExperience: value})}>
                      <SelectTrigger className="bg-secondary/50 border-border/20">
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent className="bg-card/90 backdrop-blur-sm border-border/20">
                        <SelectItem value="fresher">Fresher</SelectItem>
                        <SelectItem value="1">1 Year</SelectItem>
                        <SelectItem value="2">2 Years</SelectItem>
                        <SelectItem value="3">3 Years</SelectItem>
                        <SelectItem value="4">4 Years</SelectItem>
                        <SelectItem value="5">5 Years</SelectItem>
                        <SelectItem value="6">6 Years</SelectItem>
                        <SelectItem value="7">7 Years</SelectItem>
                        <SelectItem value="8">8 Years</SelectItem>
                        <SelectItem value="9">9 Years</SelectItem>
                        <SelectItem value="10+">10+ Years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="noticePeriod">Notice Period (Days) *</Label>
                    <Select value={professionalInfo.noticePeriod} onValueChange={(value) => setProfessionalInfo({...professionalInfo, noticePeriod: value})}>
                      <SelectTrigger className="bg-secondary/50 border-border/20">
                        <SelectValue placeholder="Select notice period" />
                      </SelectTrigger>
                      <SelectContent className="bg-card/90 backdrop-blur-sm border-border/20">
                        <SelectItem value="0">Immediate</SelectItem>
                        <SelectItem value="15">15 Days</SelectItem>
                        <SelectItem value="30">30 Days</SelectItem>
                        <SelectItem value="45">45 Days</SelectItem>
                        <SelectItem value="60">60 Days</SelectItem>
                        <SelectItem value="90">90 Days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentCTC">Current CTC (Annual)</Label>
                    <Input
                      id="currentCTC"
                      value={professionalInfo.currentCTC}
                      onChange={(e) => setProfessionalInfo({...professionalInfo, currentCTC: e.target.value})}
                      placeholder="e.g., 1200000"
                      className="bg-secondary/50 border-border/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expectedCTC">Expected CTC (Annual) *</Label>
                    <Input
                      id="expectedCTC"
                      value={professionalInfo.expectedCTC}
                      onChange={(e) => setProfessionalInfo({...professionalInfo, expectedCTC: e.target.value})}
                      placeholder="e.g., 1500000"
                      className="bg-secondary/50 border-border/20"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Education */}
          <TabsContent value="education">
            <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="font-playfair flex items-center space-x-2">
                  <GraduationCap className="h-5 w-5" />
                  <span>Education</span>
                </CardTitle>
                <Button onClick={addEducation} size="sm" className="bg-accent text-accent-foreground">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Education
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {education.map((edu) => (
                  <div key={edu.id} className="p-4 bg-secondary/30 rounded-lg border border-border/20 space-y-4">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">Education Entry</h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeEducation(edu.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Degree/Qualification</Label>
                        <Input
                          value={edu.degree}
                          onChange={(e) => updateEducation(edu.id, 'degree', e.target.value)}
                          placeholder="e.g., Bachelor of Computer Science"
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Institution</Label>
                        <Input
                          value={edu.institution}
                          onChange={(e) => updateEducation(edu.id, 'institution', e.target.value)}
                          placeholder="e.g., Stanford University"
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Year of Completion</Label>
                        <Input
                          value={edu.year}
                          onChange={(e) => updateEducation(edu.id, 'year', e.target.value)}
                          placeholder="e.g., 2020"
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Grade/Percentage</Label>
                        <Input
                          value={edu.percentage}
                          onChange={(e) => updateEducation(edu.id, 'percentage', e.target.value)}
                          placeholder="e.g., 85% or 3.8 GPA"
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Experience */}
          <TabsContent value="experience">
            <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="font-playfair flex items-center space-x-2">
                  <Briefcase className="h-5 w-5" />
                  <span>Work Experience</span>
                </CardTitle>
                <Button onClick={addExperience} size="sm" className="bg-accent text-accent-foreground">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Experience
                </Button>
              </CardHeader>
              <CardContent className="space-y-4">
                {experience.map((exp) => (
                  <div key={exp.id} className="p-4 bg-secondary/30 rounded-lg border border-border/20 space-y-4">
                    <div className="flex justify-between items-start">
                      <h4 className="font-medium">Experience Entry</h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeExperience(exp.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label>Company</Label>
                        <Input
                          value={exp.company}
                          onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                          placeholder="e.g., Google"
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Position</Label>
                        <Input
                          value={exp.position}
                          onChange={(e) => updateExperience(exp.id, 'position', e.target.value)}
                          placeholder="e.g., Senior Software Engineer"
                          className="bg-background/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Duration</Label>
                        <Input
                          value={exp.duration}
                          onChange={(e) => updateExperience(exp.id, 'duration', e.target.value)}
                          placeholder="e.g., Jan 2020 - Present"
                          className="bg-background/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Job Description</Label>
                      <Textarea
                        value={exp.description}
                        onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                        placeholder="Describe your role and achievements..."
                        rows={3}
                        className="bg-background/50"
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Social Links */}
          <TabsContent value="links">
            <Card className="bg-card/50 backdrop-blur-sm border-border/20 shadow-card">
              <CardHeader>
                <CardTitle className="font-playfair flex items-center space-x-2">
                  <Link2 className="h-5 w-5" />
                  <span>Professional Links</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input
                    id="linkedin"
                    value={socialLinks.linkedin}
                    onChange={(e) => setSocialLinks({...socialLinks, linkedin: e.target.value})}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="bg-secondary/50 border-border/20"
                  />
                  <p className="text-sm text-muted-foreground">Optional - but highly recommended</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="github">GitHub Profile</Label>
                  <Input
                    id="github"
                    value={socialLinks.github}
                    onChange={(e) => setSocialLinks({...socialLinks, github: e.target.value})}
                    placeholder="https://github.com/yourusername"
                    className="bg-secondary/50 border-border/20"
                  />
                  <p className="text-sm text-muted-foreground">Optional - great for technical roles</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="portfolio">Portfolio Website</Label>
                  <Input
                    id="portfolio"
                    value={socialLinks.portfolio}
                    onChange={(e) => setSocialLinks({...socialLinks, portfolio: e.target.value})}
                    placeholder="https://yourportfolio.com"
                    className="bg-secondary/50 border-border/20"
                  />
                  <p className="text-sm text-muted-foreground">Optional - showcase your work</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}