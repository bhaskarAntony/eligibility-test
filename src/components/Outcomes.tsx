
import { CheckCircle, Users, Building, BarChart } from "lucide-react";

const Outcomes = () => {
  return (
    <section className="py-20 bg-violet-100 px-5" id="outcomes">
      <div className="container mx-auto max-w-7xl p-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Benefits <span className="text-violet-500">&</span> Outcomes
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how our eligibility test opens doors to exceptional opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* For Students */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                For Students
              </h3>
              <ul className="space-y-4">
                {studentBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* For Colleges */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-6">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                For Colleges
              </h3>
              <ul className="space-y-4">
                {collegeBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Success <span className="text-violet-500">Stories</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">{testimonial.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">Woking</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const studentBenefits = [
  "Access to exclusive placement drives with top companies",
  "Direct visibility to recruiters and hiring managers",
  "Skills assessment and performance insights",
  "Priority consideration for premium internship opportunities",
  "Personalized career guidance and preparation support"
];

const collegeBenefits = [
  "Enhanced placement records and institutional reputation",
  "Comprehensive student performance analytics",
  "Streamlined placement process management",
  "Access to broader employer network",
  "Improved student satisfaction and outcomes"
];

const testimonials = [
  {
    initials: "SP",
    name: "siddeswarapradeep",
    quote: "Be-practical is one of the best platform for all non-technical and technical background students. I did MBA 2017 I m learning lots of things in institute.I like faculty and I feel that I had very best platform for my carrier. I learned many new things from my teachers who were very helpful in every way they could. Teachers and students interaction was good and they are very friendly which I could clarify many of my doubts in the course. I appreciate faculty for their quick response and for great supportive, and Very special thanks to HR Kavitha Mam she is very kind and I always thankfull to her  support and guidance . Thank you"
  },
  {
    initials: "NH",
    name: "Naik Harshith",
    quote: "I was a complete beginner when I started the MERN stack course at Be Practical, but the instructors were able to take me from zero in a matter of weeks. The curriculum was well-organized and easy to follow, and the instructors were always available to answer my questions. I would highly recommend Be practical tech solutions to anyone who is looking for a comprehensive and affordable MERN stack course."
  },
  {
    initials: "BH",
    name: "BHIMARAYA H",
    quote: "I had a great experience learning the MERN stack at Be Practical. The instructors were knowledgeable and engaging, and the curriculum was well-structured. I felt confident in my skills after completing the course, and I was able to land a job as a MERN developer shortly after. I would highly recommend Be Practical to anyone who is interested in learning the MERN stack."
  }
];

export default Outcomes;
