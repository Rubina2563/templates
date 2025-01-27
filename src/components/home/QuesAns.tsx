const QuesAns = () => {
  return (
    <>     {/* FAQ Section */}
      <div className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-start gap-10">
          {/* FAQ Image */}
          <div className="flex-1 flex justify-center items-center">
            <div className="w-80 h-80 bg-blue-300 rounded-lg"></div>
          </div>

          {/* FAQ Content */}
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
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
            <div className="bg-black text-white p-6 rounded-lg space-y-4">
              <h3 className="text-xl font-medium">Need More Help?</h3>
              <p>
                Call us at our hotline or contact us directly for more
                assistance.
              </p>
              <button className="px-6 py-3 bg-lime-300 text-black font-medium rounded-lg hover:bg-lime-400">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div></>
  )
}

export default QuesAns