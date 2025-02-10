
import { Clock, Book, Target, Award } from "lucide-react";

const Timeline = () => {
  return (
    <section className="py-16 lg:py-20 bg-white px-5 sm:px-0 lg:px-8" id="timeline">
      <div className="container mx-auto max-w-7xl p-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your Path to <span className="text-violet-500">Success</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow these simple steps to unlock enhanced placement opportunities
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-violet-100"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:order-2'}`}>
                  <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 mb-4 bg-violet-100 rounded-lg flex items-center justify-center">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                  {index + 1}
                </div>
                <div className="md:w-1/2 md:order-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const steps = [
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: "Register for the Test",
    description: "Complete the registration process and secure your spot for the upcoming eligibility test."
  },
  {
    icon: <Book className="w-6 h-6 text-primary" />,
    title: "Take the Test",
    description: "Appear for the online test on February 8th, 2025, and showcase your skills."
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Get Results",
    description: "Receive your detailed performance analysis and eligibility status."
  },
  {
    icon: <Award className="w-6 h-6 text-primary" />,
    title: "Access Opportunities",
    description: "Unlock exclusive placement drives and internship opportunities with top companies."
  }
];

export default Timeline;
