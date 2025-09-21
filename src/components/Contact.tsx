import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Download, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "work.sathishv@gmail.com",
      href: "mailto:work.sathishv@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7708141137",
      href: "tel:+917708141137",
      color: "text-green-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Coimbatore, Tamil Nadu",
      href: "#",
      color: "text-red-400"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/SATHISH-DYZ",
      href: "https://github.com/SATHISH-DYZ",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to contribute to innovative cloud solutions and DevOps workflows. Let's connect and discuss opportunities!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              {contactInfo.map((contact, index) => (
                <Card key={index} className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-6">
                    <a 
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center gap-4 group-hover:scale-105 transition-transform duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <contact.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">{contact.label}</h4>
                        <p className="text-foreground/80">{contact.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call to Action */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Let's Collaborate</h3>
              
              <Card className="border-primary/30 shadow-glow bg-gradient-to-br from-card/50 to-card">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                      <MessageCircle className="w-10 h-10 text-primary-foreground" />
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold mb-3">Ready to Start?</h4>
                      <p className="text-foreground/80 mb-6">
                        I'm actively seeking opportunities in cloud engineering and DevOps roles. 
                        Whether you have a project in mind or just want to connect, I'd love to hear from you!
                      </p>
                    </div>

                    <div className="space-y-4">
                      <Button 
                        size="lg" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:shadow-lg hover:scale-105"
                        asChild
                      >
                        <a href="mailto:work.sathishv@gmail.com">
                          <Mail className="w-5 h-5 mr-2" />
                          Send Email
                        </a>
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg" 
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        asChild
                      >
                        <a href="https://github.com/SATHISH-DYZ" target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5 mr-2" />
                          View GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

             <Card className="border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
  <CardContent className="p-6 text-center">
    <h4 className="font-semibold mb-3">Professional Resume</h4>
    <p className="text-sm text-foreground/80 mb-4">
      Download my complete resume with detailed experience and project information
    </p>
    <a
      href="/assets/resume.pdf"
      download="Sathish_Resume.pdf"
      className="inline-flex items-center justify-center w-full px-4 py-2 bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground rounded-md shadow transition-all duration-300"
    >
      <Download className="w-4 h-4 mr-2" />
      Download Resume
    </a>
  </CardContent>
</Card>


          {/* Professional Summary */}
          <Card className="border-primary/20 shadow-card">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Professional Summary
                </span>
              </h3>
              <p className="text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                Currently pursuing M.Sc. Software Systems with hands-on experience in cloud infrastructure, 
                containerization, and DevOps practices. Completed internship at Trioticz with practical 
                experience in AWS deployments, Docker containerization, and automated CI/CD pipelines. 
                Passionate about contributing to innovative cloud solutions and streamlining development workflows.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
