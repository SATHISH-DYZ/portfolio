import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Container, Code, Database, Network, Terminal, Award } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Platforms",
      icon: Cloud,
      color: "text-blue-400",
      skills: ["AWS EC2", "AWS S3", "AWS IAM", "AWS VPC", "AWS CloudWatch", "AWS Lambda", "AWS RDS"]
    },
    {
      title: "Containerization",
      icon: Container,
      color: "text-cyan-400",
      skills: ["Docker", "Containerization", "Docker Images", "Dockerfile", "Container Deployments", "Container Orchestration"]
    },
    {
      title: "Programming & Scripting",
      icon: Code,
      color: "text-green-400",
      skills: ["Python", "Pandas", "NumPy", "TensorFlow", "Keras", "Bash", "Shell Scripting"]
    },
    {
      title: "Databases & ETL",
      icon: Database,
      color: "text-orange-400",
      skills: ["SQL", "SELECT Queries", "JOIN Operations", "GROUP BY", "CSV Handling", "Data Cleaning"]
    },
    {
      title: "Networking",
      icon: Network,
      color: "text-purple-400",
      skills: ["IPv4 Addressing", "Subnetting", "VPC Configuration", "Load Balancing", "Security Groups"]
    },
    {
      title: "DevOps Tools",
      icon: Terminal,
      color: "text-red-400",
      skills: ["Linux CLI", "Git", "GitHub", "VS Code", "Nginx", "CI/CD", "Version Control"]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "GeeksforGeeks",
      icon: Award
    },
    {
      title: "DevOps Beginner to Advanced",
      issuer: "Udemy",
      icon: Award
    },
    {
      title: "Python Full Course",
      issuer: "GeeksforGeeks",
      icon: Award
    },
    {
      title: "Java & Python Certification",
      issuer: "IIT Spoken Tutorial",
      icon: Award
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across cloud platforms, DevOps tools, and modern development practices
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Certifications
              </span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Professional certifications and completed training programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16">
          <Card className="border-primary/30 shadow-glow bg-gradient-to-r from-card/50 to-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-6">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Core Competencies
                </span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Cloud & Infrastructure</h4>
                  <p className="text-sm text-foreground/80">Expert in AWS services, cloud architecture, and scalable infrastructure deployment</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">DevOps & Automation</h4>
                  <p className="text-sm text-foreground/80">Proficient in containerization, CI/CD pipelines, and deployment automation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Development & Analytics</h4>
                  <p className="text-sm text-foreground/80">Strong programming skills with focus on Python, data analysis, and machine learning</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;