const QuesAns = () => {
  return (
    <>     {/* FAQ Section */}
      <div className="bg-white p-16">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-start gap-20">
          {/* FAQ Image */}
          <div className="flex-1"> <div className="flex flex-col gap-3 justify-center ">
            <p className="text-blue-600
text-lg
font-semibold">Questions & Answers</p> <h2 className="text-neutral-900
text-5xl
font-semibold">
              Frequently Asked Questions
            </h2>
             
            <div className="w-full h-96 mt-10 bg-blue-300 rounded-lg"></div>
          </div></div>
         

          {/* FAQ Content */}
          <div className="flex-1 space-y-8">
          
            <div className="space-y-4">
              {/* Question Item */}
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
                >
                  <p className="text-gray-800 font-medium">
                    What types of electrical services does Electroca provide?
                  </p>
                  <button className="text-blue-600 font-bold text-lg">+</button>
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