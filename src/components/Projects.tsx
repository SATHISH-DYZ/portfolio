import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Brain, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Bitcoin Price Tracker",
      description: "A comprehensive web-based cryptocurrency tracking application with real-time price monitoring and responsive design.",
      icon: TrendingUp,
      features: [
        "Built with React JS, Tailwind CSS, and TypeScript for modern UI/UX",
        "Real-time API integration for live cryptocurrency data",
        "Containerized using Docker for consistent deployment",
        "Deployed on AWS EC2 with Nginx for scalable cloud hosting",
        "Configured security groups and port mappings for secure access",
        "Implemented restart policies for high availability"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Docker", "AWS EC2", "Nginx", "API Integration"],
      github: "https://github.com/SATHISH-DYZ",
      live: "#"
    },
    {
      title: "Stress Analysis Using Machine Learning",
      description: "Advanced machine learning model for psychological stress detection and analysis using modern ML frameworks.",
      icon: Brain,
      features: [
        "Developed using Python with TensorFlow and Keras frameworks",
        "Comprehensive data preprocessing and feature engineering",
        "Model training with validation and performance evaluation",
        "Containerized ML model for consistent runtime environments",
        "Implemented data cleaning and preprocessing pipelines",
        "Performance optimization and model accuracy improvements"
      ],
      technologies: ["Python", "TensorFlow", "Keras", "Docker", "Machine Learning", "Model Training"],
      github: "https://github.com/SATHISH-DYZ",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of technical projects demonstrating cloud, DevOps, and machine learning expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <project.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-primary group-hover:text-primary/80 transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Portfolio Project Addition */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="border-primary/30 shadow-glow bg-gradient-to-r from-card/50 to-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                     Portfolio Website
                </span>
              </h3>
              <p className="text-foreground/80 mb-6 leading-relaxed">
                This very portfolio website you're viewing! Built with modern React, TypeScript, and Tailwind CSS. 
                Features responsive design, smooth animations, and professional UI components. Deployed using 
                containerization and AWS hosting.
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["React", "TypeScript", "Tailwind CSS", "Responsive Design", "Modern UI/UX", "Docker", "AWS"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;