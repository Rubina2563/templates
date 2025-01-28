import React from "react";

const Testimonial: React.FC = () => {
  const testimonials = [
    {
      name: "Walter Anderson",
      rating: "4.5/5",
      issue: "Faulty Wiring In My Kitchen.",
      description:
        "Nunc enim tincidunt nec arcu et risus suspendisse eget id. Quis pellentesque sem proin sed sagittis orci nullam in.",
      date: "March 15, 2023",
    },
    {
      name: "Susan Torres",
      rating: "4.5/5",
      issue: "Circuit Breaker Tripping",
      description:
        "Nunc enim tincidunt nec arcu et risus suspendisse eget id. Quis pellentesque sem proin sed sagittis orci nullam in.",
      date: "April 5, 2023",
    },
    {
      name: "John Davis",
      rating: "4.5/5",
      issue: "Flickering Lights In The Living Room",
      description:
        "Nunc enim tincidunt nec arcu et risus suspendisse eget id. Quis pellentesque sem proin sed sagittis orci nullam in.",
      date: "May 2, 2023",
    },
    {
      name: "Melissa Ross",
      rating: "4.5/5",
      issue: "Installation of New Electrical Outlets.",
      description:
        "Nunc enim tincidunt nec arcu et risus suspendisse eget id. Quis pellentesque sem proin sed sagittis orci nullam in.",
      date: "June 10, 2023",
    },
    {
      name: "Brandon Miller",
      rating: "4.5/5",
      issue: "Power Outage Troubleshooting.",
      description:
        "Nunc enim tincidunt nec arcu et risus suspendisse eget id. Quis pellentesque sem proin sed sagittis orci nullam in.",
      date: "July 7, 2023",
    },
    {
      name: "Gloria Williams",
      rating: "4.5/5",
      issue: "Upgrading Lighting Fixtures.",
      description:
        "Nunc enim tincidunt nec arcu et risus suspendisse eget id. Quis pellentesque sem proin sed sagittis orci nullam in.",
      date: "August 20, 2023",
    },
  ];

  return (
    <div className="bg-blue-50 p-16 ">
      {/* Section Header */}
      <div className="text-blue-600
text-lg
font-medium ">
        <p className="text-blue-600 font-medium text-lg">Testimonial</p>
        <h2 className="text-neutral-900 w-md
text-5xl
font-semibold">
          What They Say About Our Service
        </h2>
      </div>

      {/* Testimonials */}
      <div className="  mt-12 flex  flex-wrap justify-between gap-2">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-lg rounded-xl p-6 gap-3 w-76 max-w-sm "
          >
            {/* Avatar */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-500 rounded-md"></div>
              <div>
                <h4 className="text-lg font-medium text-gray-900">
                  {testimonial.name}
                </h4>
                <p className="text-blue-600 text-sm font-medium">
                  ⭐ {testimonial.rating}
                </p>
              </div>
            </div>

            {/* Issue */}
            <p className="text-blue-600
text-base
font-medium">{testimonial.issue}</p>

            {/* Description */}
            <p className="text-neutral-600
text-lg
font-medium">{testimonial.description}</p>

            {/* Date */}
            <p className="text-neutral-600
text-lg
font-medium">{testimonial.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
