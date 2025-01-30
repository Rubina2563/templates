
const GetService = () => {
  return (
      <>
      <div className="bg-neutral-50 p-6 md:p-12 lg:p-32">
        <div className="max-w-screen-xl mx-auto text-center ">
          <p className="text-blue-600
text-lg
font-medium mb-5">How It Works</p>
          <h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 mb-3">
            How To Get Our Service
          </h2>
          <p className="text-gray-700 mb-10">
            Lorem ipsum dolor sit amet consectetur adipiscing elit.
          </p>
      <div className="container mx-auto ">
  <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 border-2  rounded-xl border-gray-200 text-center">
    {[
      { step: "Step 1", title: "Choose Your Time", desc: "Lorem ipsum is a dummy text" },
      { step: "Step 2", title: "Book Swiftly", desc: "Lorem ipsum is a dummy text" },
      { step: "Step 3", title: "Our Team Arrives", desc: "Lorem ipsum is a dummy text" },
    ].map((item, index) => (
      <div
        key={index}
        className="  p-10 border rounded-lg border-gray-200"
      >
        <span className="text-blue-500  rounded-3xl px-2 py-1 border-gray-200 border-2 text-sm font-medium">{item.step}</span>
        <h3 className="text-neutral-900 text-xl sm:text-lg font-semibold mt-2">
          {item.title}
        </h3>
        <p className="text-neutral-600 text-base sm:text-sm mt-1">{item.desc}</p>
      </div>
    ))}
  </div>
</div>

        </div>
      </div></>
  )
}

export default GetService