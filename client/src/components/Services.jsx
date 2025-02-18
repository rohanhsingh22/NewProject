const Services = () => {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4 text-center">
        <h1 className="text-3xl font-bold mb-6">Featured Services</h1>
        <div className="flex flex-wrap bg-white  p-3 w-full max-w-9xl gap-4 h-[80vh]">
          
          {/* Sales Cloud Section */}
          <div className="flex-1 min-w-[300px] rounded-lg text-center relative overflow-hidden flex flex-col items-center justify-center p-5 bg-black text-white">
            <div className="text-center">
              <h2 className="text-2xl mb-3">Supercharge Your Sales with Cloud CRM</h2>
              <p className="text-base mb-4">
                Streamline your sales process, automate lead management, and gain AI-driven insights with our Sales Cloud as a Service. Access your data anytime, anywhere, and close deals faster.
              </p>
              <a href="#" className="inline-block px-4 py-2 text-sm rounded-full bg-blue-500 text-white transition hover:bg-blue-600">Learn more</a>
            </div>
            <img
              src="../assets/Services/sales.jpg"
              alt="Sales Cloud"
              className="w-full max-w-xs mt-4"
            />
          </div>
          
          {/* Analytics Dashboard Section */}
          <div className="flex-1 min-w-[300px] rounded-lg text-center relative overflow-hidden flex flex-col items-center justify-center p-5 bg-gray-100 text-black">
            <div className="text-center">
              <h2 className="text-2xl mb-3">Unlock Actionable Insights with Analytics Dashboard</h2>
              <p className="text-base mb-4">
                Gain real-time data visualization, track key metrics, and make informed decisions with our Analytical Dashboard Services. Transform complex data into actionable insights effortlessly.
              </p>
              <a href="#" className="inline-block px-4 py-2 text-sm rounded-full bg-blue-500 text-white transition hover:bg-blue-600">Learn more</a>
            </div>
            <img
              src="../assets/Services/Cloud.jpg"
              alt="Analytics Dashboard"
              className="w-full max-w-xs mt-4"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Services;