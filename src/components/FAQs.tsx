
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  return (
    <section className="py-20 bg-white px-5" id="faqs">
      <div className="container mx-auto max-w-3xl p-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Find answers to common questions about the eligibility test
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white border border-gray-100 rounded-xl px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline">
                <span className="text-gray-900 font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

const faqs = [
  {
    question: "What is the eligibility criteria for the test?",
    answer: "The minimum eligibility criteria includes having an academic aggregate of 65% or above and no active backlogs. Students in their final year of graduation are eligible to apply."
  },
  {
    question: "How is the test conducted?",
    answer: "The test is conducted entirely online. You'll need a computer with a stable internet connection and a webcam. The test includes multiple sections testing technical skills, aptitude, and problem-solving abilities."
  },
  {
    question: "What happens after I register?",
    answer: "After registration, you'll receive a confirmation email with test guidelines and preparation resources. The test link will be shared 24 hours before the scheduled date."
  },
  {
    question: "Are there any preparation materials available?",
    answer: "Yes, registered candidates get access to sample questions, practice tests, and preparation guides to help them prepare effectively for the test."
  },
  {
    question: "What kind of placement opportunities are available?",
    answer: "High-scoring candidates get access to exclusive placement drives with our partner companies, including tech giants, startups, and multinational corporations."
  }
];

export default FAQs;
