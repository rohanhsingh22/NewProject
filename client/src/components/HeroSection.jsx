const HeroSection = () => {
    return (
      <main className="pt-16 md:pt-20">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <div className="bg-blue-50 rounded-3xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row relative md:h-[500px]">
            <div className="w-full md:w-1/2 space-y-4 z-10">
              <h1 className="text-2xl md:text-4xl font-bold text-center md:text-left">Find your next Home in Las Vegas</h1>
              <p className="text-gray-700 text-sm md:text-base text-center md:text-left">WP Residence is changing how agents and clients navigate real estate.</p>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <img src="../Images/area2.jpg" alt="House with trees" className="w-full h-[250px] md:h-full object-cover rounded-lg" />
            </div>
          </div>
  
          {/* Search Bar */}
          <div className="bg-white shadow-lg rounded-2xl p-4 md:p-6 flex flex-wrap justify-between items-center space-y-4 md:space-y-0 -mt-8 md:-mt-16 relative z-20 w-full md:w-9/12 mx-auto">
            <div className="w-full md:w-1/5">
              <label className="block text-gray-700 font-bold mb-1">LOCATION</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-2" placeholder="Enter location" />
            </div>
            <div className="w-full md:w-1/5">
              <label className="block text-gray-700 font-bold mb-1">TYPE</label>
              <select className="w-full border border-gray-300 rounded-lg p-2">
                <option>Property type</option>
              </select>
            </div>
            <div className="w-full md:w-1/5">
              <label className="block text-gray-700 font-bold mb-1">CATEGORY</label>
              <select className="w-full border border-gray-300 rounded-lg p-2">
                <option>Property category</option>
              </select>
            </div>
            <div className="w-full md:w-1/5">
              <label className="block text-gray-700 font-bold mb-1">BUDGET</label>
              <input type="text" className="w-full border border-gray-300 rounded-lg p-2" placeholder="Enter budget" />
            </div>
            <div className="w-full md:w-auto flex justify-center md:justify-start">
              <button className="bg-blue-700 text-black rounded-lg px-6 py-3 w-full md:w-auto">
                <i className="fas fa-search"></i> Search
              </button>
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default HeroSection;