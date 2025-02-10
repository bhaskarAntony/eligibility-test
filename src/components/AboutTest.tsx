
import { Award, Briefcase, Target } from "lucide-react";
import { motion } from "framer-motion";

const AboutTest = () => {
  return (
    <section className="py-12 md:py-20 bg-violet-700 p-5" id="about">
      <div className="container mx-auto p-0 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            About the <span className="text-violet-50">Eligibility Test</span>
          </h2>
          <p className="text-white max-w-2xl mx-auto px-4 md:px-0">
            Our comprehensive eligibility test is designed to assess your skills and connect you with leading companies for placement opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-4 md:p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
              
              <div className="mt-4 md:mt-6">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-40 md:h-48 object-cover rounded-lg"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const features = [
  {
    icon: <Target className="w-5 h-5 md:w-6 md:h-6 text-primary" />,
    title: "Comprehensive Assessment",
    description: "Multi-dimensional evaluation covering technical, aptitude, and soft skills",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-primary" />,
    title: "Direct Company Access",
    description: "Get noticed by top recruiters and fast-track your application process",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
  },
  {
    icon: <Award className="w-5 h-5 md:w-6 md:h-6 text-primary" />,
    title: "Score Benefits",
    description: "Higher scores unlock exclusive placement opportunities and better packages",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80"
  }
];

export default AboutTest;
