
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const RegistrationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    academicScores: "",
    course: "",
    backlogStatus: "no",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Successful!",
      description: "We'll contact you with further details shortly.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-16 lg:py-20 bg-white px-0 sm:px-0 lg:px-8" id="register">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Register for the Eligibility Test
          </h2>
          <p className="text-gray-600">
            Fill in your details below to secure your spot
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                name="fullName"
                required
                placeholder="John Doe"
                className="rounded-lg"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="rounded-lg"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">Mobile Number</Label>
              <Input
                id="mobile"
                name="mobile"
                required
                placeholder="+91 XXXXXXXXXX"
                className="rounded-lg"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="academicScores">Academic Scores (%)</Label>
              <Input
                id="academicScores"
                name="academicScores"
                type="number"
                required
                placeholder="85"
                className="rounded-lg"
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="course">Course Details</Label>
              <select
                id="course"
                name="course"
                required
                className="w-full rounded-lg border border-input bg-background px-3 py-2"
                onChange={handleChange}
              >
                <option value="">Select Course</option>
                <option value="btech">B.Tech</option>
                <option value="mtech">M.Tech</option>
                <option value="mca">MCA</option>
                <option value="bca">BCA</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="backlogStatus">Backlog Status</Label>
              <select
                id="backlogStatus"
                name="backlogStatus"
                required
                className="w-full rounded-lg border border-input bg-background px-3 py-2"
                onChange={handleChange}
              >
                <option value="no">No Backlogs</option>
                <option value="yes">Have Backlogs</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <Button
              type="submit"
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 rounded-full"
            >
              Submit Registration
            </Button>
            <Button
              type="reset"
              variant="outline"
              size="lg"
              className="px-8 rounded-full"
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
