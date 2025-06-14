import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Sanvika Anthati
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">Computer Science Student</p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Detail-oriented B.Tech student passionate about leveraging technology 
            to create impactful solutions and contribute to progressive organizations.
          </p>
          
          <div className="flex justify-center space-x-4 mb-12">
            <Button variant="outline" size="lg" className="bg-purple-600/20 border-purple-400 text-purple-300 hover:bg-purple-600/30 transition-all duration-300">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="bg-pink-600/20 border-pink-400 text-pink-300 hover:bg-pink-600/30 transition-all duration-300">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="bg-blue-600/20 border-blue-400 text-blue-300 hover:bg-blue-600/30 transition-all duration-300">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>;
};
export default Hero;