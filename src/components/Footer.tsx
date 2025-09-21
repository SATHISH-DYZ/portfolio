import { Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Sathish V
            </h3>
            <p className="text-sm text-muted-foreground">
              Cloud & DevOps Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="https://github.com/SATHISH-DYZ"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:shadow-glow group"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
            </a>
            <a 
              href="mailto:work.sathishv@gmail.com"
              className="p-2 rounded-full bg-secondary hover:bg-primary transition-all duration-300 hover:shadow-glow group"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5 group-hover:text-primary-foreground transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p className="flex items-center gap-1 justify-center md:justify-end">
              © {currentYear} Made with <Heart className="w-4 h-4 text-red-500" /> by Sathish V
            </p>
            <p className="mt-1">
              Aspiring Cloud & DevOps Engineer
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript, and Tailwind CSS • Deployed with Docker on AWS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;