
import { Users, Briefcase, Trophy, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const Statistics = () => {
  return (
    <section className="py-8 md:py-12 bg-gradient-to-b from-violet-50 to-white p-5">
      <div className="container mx-auto px-0 sm:px-6 lg:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-4 md:p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 bg-violet-100 rounded-lg flex items-center justify-center">
                {stat.icon}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-1 md:mb-2">{stat.value}</h3>
              <p className="text-sm text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const stats = [
  {
    icon: <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />,
    value: "50,000+",
    label: "Students Placed"
  },
  {
    icon: <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-primary" />,
    value: "500+",
    label: "Partner Companies"
  },
  {
    icon: <Trophy className="w-5 h-5 md:w-6 md:h-6 text-primary" />,
    value: "12 LPA",
    label: "Highest Package"
  },
  {
    icon: <Building2 className="w-5 h-5 md:w-6 md:h-6 text-primary" />,
    value: "95%",
    label: "Placement Rate"
  }
];

export default Statistics;
