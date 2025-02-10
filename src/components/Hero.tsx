import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phonenumber: "",
    backlogs: "no",
    course: "",
    academyScore: "",
    education:""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await fetch("https://fullstack-landing-page-backend.onrender.com/api/new/eligibility", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      
      const result = await response.json();
      if (response.ok) {
        alert("Registration Successful!");
        setLoading(false)
        setFormData({ fullname: "", email: "", phonenumber: "", backlogs: "no", course: "", academyScore: "", education:"" });
      } else {
        setLoading(false)
        alert("Error: " + result.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Submission failed. Try again later.");
    }
  };

  return (
    <section className="relative py-5 lg:py-10 flex items-center justify-center bg-gradient-to-b from-violet-50 to-white px-5 sm:px-1 lg:px-8" id="home">
      <div className="container p-0 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-5 gap-12">
        {/* Left Content (60%) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:col-span-3"
        >
          <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-violet-100 text-violet-700 font-medium">
            <CheckCircle size={16} />
            <span className="text-sm">Registration Open for 2025</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your Gateway to Enhanced Placement and Internship Opportunities!
          </h1>
          
          <p className="text-lg text-gray-600">
            Register for the Exclusive Eligibility Test and Gain Access to Top Companies.
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="text-green-500" size={20} /> Get direct access to 500+ partnered companies</li>
            <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="text-green-500" size={20} /> 95% placement success rate</li>
            <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="text-green-500" size={20} /> Training by industry experts</li>
            <li className="flex items-center gap-3 text-gray-700"><CheckCircle className="text-green-500" size={20} /> Internship opportunities with stipends</li>
          </ul>
          
          <a href="#about" className="mt-6 px-6 py-2 bg-violet-700 hover:bg-violet-800 text-white  rounded-full flex items-center gap-2 text-center justify-center sm:w-full" style={{width:'fit-content'}}>
            Learn More <ArrowRight size={20} />
          </a>
        </motion.div>

        {/* Right Side - Form (40%) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 w-full max-w-md md:col-span-2"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Register Now</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" name="fullname" placeholder="Full Name" className="w-full p-3 border rounded-lg" required value={formData.fullname} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded-lg" required value={formData.email} onChange={handleChange} />
            <input type="tel" name="phonenumber" placeholder="Phone Number" className="w-full p-3 border rounded-lg" required value={formData.phonenumber} onChange={handleChange} />
            <input type="text" name="academyScore" placeholder="Academic Percentage" className="w-full p-3 border rounded-lg" required value={formData.academyScore} onChange={handleChange} />
            
            <select name="education" className="w-full p-3 border rounded-lg" required value={formData.education} onChange={handleChange}>
            <option value="" selected disabled>Select Education</option>
            <option value="high_school">High School (10th)</option>
            <option value="pre_university">Pre-University (PUC/12th)</option>
            <option value="undergraduate">Undergraduate (Bachelor's Degree)</option>
            <option value="others">Others</option>
          </select>


            {/* <select name="course" className="w-full p-3 border rounded-lg" required value={formData.course} onChange={handleChange}>
              <option value="">Choose Course</option>
              <option value="mern">MERN Stack</option>
              <option value="java">Java Development</option>
              <option value="python">Python Development</option>
              <option value="cloud">Cloud Computing & DevOps</option>
              <option value="marketing">Digital Marketing</option>
              <option value="other">Other</option>
            </select> */}

            <select name="backlogs" className="w-full p-3 border rounded-lg" required value={formData.backlogs} onChange={handleChange}>
              <option value="no">No Backlogs</option>
              <option value="yes">Have Backlogs</option>
            </select>
            
            <button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full p-3 flex justify-center items-center gap-2">
             {
              loading?("Please wait"):(<span className="flex justify-center items-center gap-2"> Submit Application <ArrowRight size={20} /></span>)
             }
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
