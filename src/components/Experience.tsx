import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey and hands-on learning experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Icon Section */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Building className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        DevOps Intern
                      </h3>
                      <h4 className="text-xl font-semibold text-foreground mb-2">
                        Trioticz, Coimbatore
                      </h4>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">June 2024 – Nov 2024</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-foreground/80 leading-relaxed">
                      Gained valuable hands-on experience in technology and development practices
                      during a comprehensive 6-month internship program focused on real-world
                      applications and digital solutions.
                    </p>

                    {/* Skills Section */}
                    <div className="flex flex-wrap gap-2 mt-6">
                      {[
                        "Team Collaboration",
                        "Problem Solving",
                        "Technical Development",
                        "Project Management",
                        "Communication",
                        "Innovation",
                      ].map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
