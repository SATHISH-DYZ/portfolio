import { Button } from "@/components/ui/button";
import { Github, Mail, MapPin } from "lucide-react";
import heroPortrait from "@/assets/my.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="relative animate-fadeIn">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-card border-4 border-primary/20">
              <img 
                src={heroPortrait} 
                alt="Sathish V - Cloud & DevOps Engineer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-lg opacity-20 animate-pulse-slow"></div>
          </div>

          {/* Hero Content */}
          <div className="text-center lg:text-left max-w-2xl animate-slideUp">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Sathish V
              </span>
            </h1>
            
            <h2 className="text-2xl lg:text-3xl text-muted-foreground mb-6 font-light">
              Aspiring Cloud & DevOps Engineer
            </h2>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-6">
              <MapPin className="w-5 h-5" />
              <span>Coimbatore, Tamil Nadu</span>
            </div>

            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Passionate about cloud infrastructure, automation, and DevOps workflows. 
              Experienced with AWS, Docker, Python, and Linux systems. Ready to contribute 
              to innovative cloud solutions and streamline development processes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a 
                href="https://github.com/SATHISH-DYZ"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:shadow-glow group"
              >
                <Github className="w-6 h-6 group-hover:text-primary-foreground transition-colors" />
              </a>
              <a 
                href="mailto:work.sathishv@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:shadow-glow group"
              >
                <Mail className="w-6 h-6 group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;