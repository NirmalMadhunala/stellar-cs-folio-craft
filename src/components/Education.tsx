
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      institution: "KL University, Hyderabad",
      duration: "2023 - Present",
      cgpa: "9.95",
      type: "current"
    },
    {
      degree: "Intermediate",
      institution: "Shree Akshaya Junior College, Sangareddy",
      duration: "2021 - 2023",
      percentage: "98.4",
      type: "completed"
    },
    {
      degree: "Secondary Education",
      institution: "Karuna High School, Sangareddy",
      duration: "2021",
      cgpa: "10.0",
      type: "completed"
    }
  ];

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 to-pink-400"></div>
            
            <div className="space-y-8">
              {educationData.map((edu, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-4 border-slate-900"></div>
                  
                  <div className="ml-16 w-full">
                    <Card className={`bg-slate-800/50 border-purple-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-300 ${
                      edu.type === 'current' ? 'ring-2 ring-purple-400/50' : ''
                    }`}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                            <p className="text-purple-400">{edu.institution}</p>
                          </div>
                          <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                            <Calendar size={16} className="mr-2" />
                            <span>{edu.duration}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <GraduationCap className="text-pink-400 mr-2" size={20} />
                          <span className="text-gray-300">
                            {edu.cgpa ? `CGPA: ${edu.cgpa}` : `Percentage: ${edu.percentage}`}
                          </span>
                          {edu.type === 'current' && (
                            <span className="ml-4 px-3 py-1 bg-purple-600/20 text-purple-300 rounded-full text-sm">
                              Current
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
