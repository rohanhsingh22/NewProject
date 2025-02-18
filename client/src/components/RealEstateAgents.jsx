const RealEstateAgents = () => {
  return (
    <div className="bg-gray-100 text-[#1d1d1f] p-5 text-center">
      <h1 className="text-3xl font-bold mb-2">Real Estate Agents</h1>
      <p className="text-gray-600 mb-8">Meet our top-rated real estate agents who are here to assist you.</p>

      <div className="container flex flex-wrap gap-6  justify-center relative">
        {/* Agent Box 1 */}
        <div className="agent-box bg-white rounded-2xl shadow-md w-[350px] p-5 text-center transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
          <img
            src="../assets/agents/agent02.webp"
            alt="Lily Bicharm"
            className="w-full h-64 object-contain rounded-xl mb-4" 
          />
          <h2 className="text-2xl font-semibold mb-1">Lily Bicharm</h2>
          <p className="text-gray-600 mb-2">Realtor</p>
          <p className="text-gray-600 mb-4">
            Lily Bicharm is a dedicated and professional real estate agent who specializes in providing...
          </p>
          <a href="#" className="text-blue-500 font-bold hover:underline">
            View Profile
          </a>
        </div>

        {/* Agent Box 2 */}
        <div className="agent-box bg-white rounded-2xl shadow-md w-[350px] p-5 text-center transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
          <img
            src="../assets/agents/agent05.webp"
            alt="Samuel Diesel"
            className="w-full h-64 object-contain rounded-full mb-4" 
          />
          <h2 className="text-2xl font-semibold mb-1">Samuel Diesel</h2>
          <p className="text-gray-600 mb-2">Commercial Broker</p>
          <p className="text-gray-600 mb-4">
            With a genuine passion for helping clients find their dream homes, Samuel Diesel brings a ...
          </p>
          <a href="#" className="text-blue-500 font-bold hover:underline">
            View Profile
          </a>
        </div>

        {/* Agent Box 3 */}
        <div className="agent-box bg-white rounded-2xl shadow-md w-[350px] p-5 text-center transition-transform duration-300 hover:transform hover:-translate-y-2 hover:shadow-lg">
          <img
            src="../assets/agents/image.png"
            alt="Dennis Albo"
            className="w-full h-64 object-contain rounded-lg mb-4" 
          />
          <h2 className="text-2xl font-semibold mb-1">Dennis Albo</h2>
          <p className="text-gray-600 mb-2">Member ID: 987654321</p>
          <p className="text-gray-600 mb-4">
            With a sharp understanding of market trends and a strategic approach to negotiation, Dennis ...
          </p>
          <a href="#" className="text-blue-500 font-bold hover:underline">
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default RealEstateAgents;