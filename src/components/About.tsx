import { Card, CardContent } from "@/components/ui/card";
import { User, Target, BookOpen } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <User className="text-purple-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Profile</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Detail-oriented B.Tech student in Computer Science, aiming to secure an 
                internship to leverage programming and problem-solving skills. Looking 
                forward to learning from industry professionals, gaining practical 
                experience, and contributing to impactful projects within a progressive 
                organization.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Target className="text-pink-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-white">Goals</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Passionate about creating innovative solutions that make a real-world impact. 
                Constantly learning new technologies and methodologies to stay at the forefront 
                of computer science advancements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
