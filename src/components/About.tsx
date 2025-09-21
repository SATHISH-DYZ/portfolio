import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Target, Trophy } from "lucide-react";

const About = () => {
  const education = [
    {
      degree: "M.Sc. Software Systems",
      institution: "Sri Krishna Arts and Science College",
      period: "2021 – 2026 (Expected)",
      grade: "CGPA: 7.6"
    },
    {
      degree: "HSC (+2)",
      institution: "Thiyagi NG Ramaswamy Memorial HSS",
      period: "2019 – 2021",
      grade: "Percentage: 73%"
    }
  ];

  const achievements = [
    "Presented: 'Stress Analysis using ML' – Sri Ramakrishna Arts and Science College",
    "2nd Prize – TechnoFest Quiz",
    "State Runner-Up – Throwball (Republic Day Games)"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate technologist with a strong foundation in cloud computing and DevOps practices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Career Objective */}
          <div className="space-y-8">
            <Card className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-semibold">Career Objective</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  Aspiring Cloud & DevOps Engineer with hands-on experience in AWS, Linux, Docker, 
                  and Python scripting. Skilled in automation, containerization, and version control 
                  using Git. Seeking an entry-level role to contribute to cloud infrastructure and 
                  DevOps workflows.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl font-semibold">Achievements</h3>
                </div>
                <ul className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground/80">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Education */}
          <div>
            <Card className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-semibold">Education</h3>
                </div>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                      <div>
                        <h4 className="text-lg font-semibold text-primary">{edu.degree}</h4>
                        <p className="text-foreground/80 font-medium">{edu.institution}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2">
                          <span className="text-sm text-muted-foreground">{edu.period}</span>
                          <span className="text-sm font-medium text-accent">{edu.grade}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Languages & Hobbies */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <Card className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4">Languages</h4>
                  <div className="space-y-2">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">Tamil</span>
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm ml-2">English</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4">Hobbies</h4>
                  <div className="space-y-2">
                    {["Cycling", "Traveling", "Cricket"].map((hobby, index) => (
                      <span key={index} className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm mr-2 mb-2">
                        {hobby}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;