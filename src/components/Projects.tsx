
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ShoppingCart, Palette, Globe } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Shopping Cart",
      description: "Developed an AI-powered smart shopping cart that automates billing by integrating object detection and weight sensors. The system identifies products in real-time and verifies the total weight to ensure accurate transactions, reducing checkout time and enhancing user experience.",
      icon: <ShoppingCart className="text-purple-400" size={24} />,
      tech: ["AI/ML", "Object Detection", "IoT", "Real-time Processing"],
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Canvas & Chapter",
      description: "Canvas & Chapter is your go-to online store for art supplies and books. Discover high-quality materials, a wide range of literary genres, exclusive bundles, and a vibrant creative community. Enjoy a seamless, secure shopping experience that inspires your artistic and literary pursuits.",
      icon: <Palette className="text-pink-400" size={24} />,
      tech: ["E-commerce", "Web Development", "UI/UX", "Community Features"],
      color: "from-pink-500/20 to-red-500/20"
    },
    {
      title: "The Saree Story",
      description: "Developing an e-commerce website which eliminates the intermediary bodies and streamline the independent saree designers and weavers to deliver their intricate designs directly to the customers.",
      icon: <Globe className="text-blue-400" size={24} />,
      tech: ["E-commerce", "Direct-to-Consumer", "Web Platform", "Designer Marketplace"],
      color: "from-blue-500/20 to-cyan-500/20"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
              <CardHeader>
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center mb-4`}>
                  {project.icon}
                </div>
                <CardTitle className="text-white group-hover:text-purple-400 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-purple-600/20 border-purple-400 text-purple-300 hover:bg-purple-600/30"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="bg-pink-600/20 border-pink-400 text-pink-300 hover:bg-pink-600/30"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
