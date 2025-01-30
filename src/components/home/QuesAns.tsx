import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}
const QuesAns: React.FC = () => {

   const faqs: FAQItem[] =  [
    {
      question: "What types of electrical services does Electema provide for homes?",
      answer: "Tincidunt viverra dui faucibus leo adipiscing id luctus facilisis. Urna turpis felis aliquet feugiat nunc. Sagittis diam morbi aenean",
    },
    {
      question: "How quickly can Electema respond to emergency electrical issues at my home?",
      answer: "Yes, we offer 24/7 emergency electrical services to address urgent issues promptly.",
    },
    {
      question: "Are your electricians licensed and insured?",
      answer: "All our electricians are fully licensed and insured for your peace of mind.",
    },
    {
      question: "How can I schedule an appointment?",
      answer: "You can schedule an appointment by calling our hotline or using the booking form on our website.",
    },
  ];
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
   const toggleQuestion= (index: number): void => {
    setOpenQuestion(openQuestion === index ? null : index); // Close if already open
  };

  return (
    <>     {/* FAQ Section */}
      <div className="bg-neutral-50 p-6 md:p-12 lg:p-32">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-start gap-6 lg:gap-20">
          {/* FAQ Image */}
          <div className="flex-1"> <div className="flex flex-col gap-3 justify-center ">
            <p className="text-blue-600
text-lg
font-semibold">Questions & Answers</p> <h2 className="text-neutral-900 text-4xl
sm:text-5xl
font-semibold">
              Frequently Asked Questions
            </h2>
             
            <div className="w-full h-96 mt-10 bg-blue-600 rounded-lg"></div>
          </div></div>
         

          {/* FAQ Content */}
          <div className="flex-1 space-y-8">
          
       <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="flex flex-col p-4  border-b border-gray-300 "
        >
          <div className="flex justify-between items-baseline">
            <p className="text-neutral-900
text-lg
font-semibold">{faq.question}</p>
            <button
              onClick={() => toggleQuestion(index)}
              className="text-blue-600 font-semibold text-lg"
            >
              {openQuestion === index ? "x" : "+"}
            </button>
          </div>
          {/* Answer section */}
          {openQuestion === index && (
            <p className="text-neutral-600
text-lg
font-normal mt-3">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>

            {/* Help Section */}
            <div className="bg-black text-white p-10 gap-3 rounded-xl  flex flex-col items-center">
              <h3 className="text-xl font-medium">Need More Help?</h3>
              <p className="text-neutral-600
text-lg
font-semibold text-center">
                Sem morbi netus mauris purus eros blandit tristique at maecenas. Eu tellus enim.
              </p>
              <button className="px-6 py-3 bg-lime-300 text-neutral-900
text-sm
font-medium rounded-3xl hover:bg-lime-400">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default QuesAns