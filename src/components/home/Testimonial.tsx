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
    <div className="bg-blue-50 py-16 px-4">
      {/* Section Header */}
      <div className="max-w-screen-xl mx-auto space-y-4 text-center">
        <p className="text-blue-600 font-medium text-lg">Testimonial</p>
        <h2 className="text-3xl font-bold text-gray-900">
          What They Say About Our Service
        </h2>
      </div>

      {/* Testimonials */}
      <div className="max-w-screen-xl mx-auto mt-12 flex flex-col lg:flex-row lg:flex-wrap justify-between gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col bg-white shadow-lg rounded-xl p-6 w-full max-w-sm space-y-4"
          >
            {/* Avatar */}
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-300 rounded-full"></div>
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
            <p className="text-red-500 font-medium">{testimonial.issue}</p>

            {/* Description */}
            <p className="text-gray-700">{testimonial.description}</p>

            {/* Date */}
            <p className="text-gray-500 text-sm">{testimonial.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
