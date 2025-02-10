
import { CalendarDays, Monitor, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestDetails = () => {
  return (
    <section className="py-20 bg-gray-50 px-5" id="details">
      <div className="container mx-auto max-w-7xl p-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Test Details
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mark your calendar and prepare for success with our comprehensive eligibility test
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {details.map((detail, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                {detail.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {detail.title}
              </h3>
              <ul className="space-y-3">
                {detail.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#home"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Don't Miss Out – Register Now!
          </a>
        </div>
      </div>
    </section>
  );
};

const details = [
  {
    icon: <CalendarDays className="w-6 h-6 text-primary" />,
    title: "Date & Time",
    items: ["February 13th, 2025", "9:00 AM - 12:00 PM", "Indian Standard Time"]
  },
  {
    icon: <Monitor className="w-6 h-6 text-primary" />,
    title: "Mode",
    items: ["100% Online", "Secure Browser", "Webcam Required"]
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    title: "Eligibility Criteria",
    items: ["Minimum 65% Academic Aggregate", "No Active Backlogs", "85%+ Scores = Additional Benefits"]
  }
];

export default TestDetails;
