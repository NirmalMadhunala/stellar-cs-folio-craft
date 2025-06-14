
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-purple-500/20 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sanvika Anthati
            </h3>
            <p className="text-gray-400 text-sm">Computer Science Student</p>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a 
              href="mailto:sanvika7749@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a 
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              © 2024 Sanvika Anthati. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-1 flex items-center justify-center md:justify-end">
              Made with <span className="text-red-400 mx-1">♥</span> using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
