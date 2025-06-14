
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Wrench, Award } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "Java", level: 85 },
    { name: "C", level: 80 },
    { name: "Python", level: 75 },
    { name: "DSA", level: 80 },
    { name: "HTML", level: 90 },
    { name: "JavaScript", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "MySQL", level: 75 },
    { name: "ReactJS", level: 80 },
    { name: "MERN", level: 70 },
  ];

  const keySkills = [
    "Hard Working",
    "Responsible",
    "Quick Learner",
    "Time Management"
  ];

  const certifications = [
    "MongoDB Associate Developer",
    "Cambridge LinguaSkill"
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Code className="text-purple-400 mr-3" size={24} />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-slate-700"
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-8">
            {/* Key Skills */}
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Wrench className="text-pink-400 mr-3" size={24} />
                  Key Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {keySkills.map((skill, index) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-slate-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Award className="text-yellow-400 mr-3" size={24} />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div key={cert} className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
                      <span className="text-gray-300 text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
