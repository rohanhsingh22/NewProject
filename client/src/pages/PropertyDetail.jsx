import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaBed,
  FaBath,
  FaCar,
  FaRuler,
  FaBuilding,
  FaHeart,
  FaShareAlt,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaCity,
  FaGlobe,
  FaRoad,
  FaInfoCircle,
  FaHome,
  FaCalendarAlt,
  FaKey,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import PropTypes from "prop-types";
import properties from "../components/data/properties";
import Dropdown from "../components/Dropdown";
import ContactCard from "../components/ContactCard";

const PropertyCard = ({ property, onClick }) => (
  <div 
    onClick={onClick}
    className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
  >
    <div className="relative">
      <img 
        src={property.image} 
        alt={property.name} 
        className="w-full h-48 object-cover rounded-lg"
      />
      <span className="absolute top-2 left-2 bg-white text-green-600 text-sm px-3 py-1 rounded-full">
        ● {property.status}
      </span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          // Handle favorite toggle
        }}
        className="absolute top-2 right-2 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors duration-300"
      >
        <FaHeart className="text-lg text-gray-500" />
      </button>
    </div>
    <div className="p-4">
      <div className="flex justify-between items-center mb-3">
        <div>
          <h2 className="text-lg font-semibold">{property.name}</h2>
          <p className="text-gray-500 text-sm">{property.location}</p>
        </div>
        <div className="text-lg font-bold text-blue-600">
          <p className="text-sm text-black">Property price</p>
          {property.price}
        </div>
      </div>

      <div className="flex items-center space-x-4 my-3 pt-2 pb-2 text-gray-600">
        <div className="flex items-center gap-1">
          <FaBed /> <span>{property.beds}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaBath /> <span>{property.baths}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaRuler /> <span>{property.area}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaCar /> <span>{property.parking}</span>
        </div>
      </div>
      <div className="flex justify-between border gap-9 border-gray-300 p-3 rounded-lg bg-gray-100 text-black text-sm mt-3">
        <div>
          <p className="font-semibold">Token price</p>
          <p className="text-blue-500">{property.tokenPrice}</p>
        </div>
        <div>
          <p className="font-semibold">Projected IRR</p>
          <p className="text-blue-500">{property.projectedIRR}</p>
        </div>
        <div>
          <p className="font-semibold">Projected APR</p>
          <p className="text-blue-500">{property.projectedAPR}</p>
        </div>
      </div>
    </div>
  </div>
);

PropertyCard.propTypes = {
  property: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    beds: PropTypes.number.isRequired,
    baths: PropTypes.number.isRequired,
    area: PropTypes.number.isRequired,
    parking: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    tokenPrice: PropTypes.string.isRequired,
    projectedIRR: PropTypes.string.isRequired,
    projectedAPR: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

const CollapsibleSection = ({ title, icon: Icon, children, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-gray-100 rounded-lg p-6 mb-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <Icon className="text-blue-500 text-xl" />
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
        {isOpen ? <FaChevronUp className="text-gray-500" /> : <FaChevronDown className="text-gray-500" />}
      </button>
      {isOpen && <div className="mt-4">{children}</div>}
    </div>
  );
};

CollapsibleSection.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  children: PropTypes.node.isRequired,
  defaultOpen: PropTypes.bool,
};

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Find the property from our properties data
  const property = properties.find((p) => p.id === parseInt(id));
  
  // Get all similar properties (excluding current property)
  const similarProperties = properties.filter(p => p.id !== parseInt(id));
  const totalSlides = Math.ceil(similarProperties.length / 3);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Get current visible properties
  const visibleProperties = similarProperties.slice(currentSlide * 3, (currentSlide * 3) + 3);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-red-500 mb-4">Property Not Found</h2>
          <p className="text-gray-600">The property you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  // Additional property details
  const propertyDetails = {
    yearBuilt: "2020",
    description: `Luxurious ${property.beds} bedroom property located in ${property.location}. This stunning property offers modern amenities and comfortable living spaces. Perfect for families or investors looking for a prime location property.`,
    details: {
      propertyId: "PROP123",
      propertyType: "Residential",
      propertyStatus: "For Sale",
      yearBuilt: "2020",
      lotSize: "1,200 sq ft",
      constructionStatus: "Ready to Move",
    },
    address: {
      street: "123 Main Street",
      city: "Vancouver",
      state: "British Columbia",
      country: "Canada",
      zipCode: "V6B 1A1",
      neighborhood: "Downtown",
    },
    features: {
      interiorDetails: [
        "Central Air",
        "Heating",
        "Hardwood Floors",
        "Walk-in Closets",
        "Gourmet Kitchen",
        "High Ceilings"
      ],
      outdoorDetails: [
        "Garden",
        "Patio",
        "Swimming Pool",
        "Parking Space"
      ],
      utilities: [
        "Electricity",
        "Water",
        "Gas",
        "Internet"
      ]
    }
  };

  return (
    <div className="bg-gray-100 pt-20 min-h-screen">
      {/* Main content section */}
      <div className="px-4  md:px-6 mb-3">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-6">
          {/* Left Section - Fixed Width */}
          <div className="w-full lg:w-[774px] flex-shrink-0">
            {/* Header Section */}
            <CollapsibleSection  title="Overview" icon={FaHome}>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">{property.name}</h1>
                  <p className="text-gray-600 text-lg">{property.location}</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <p className="text-sm text-gray-500">Property Price</p>
                  <p className="text-3xl font-bold text-blue-600">{property.price}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-4">
                <button 
                  onClick={() => setIsFavorite(!isFavorite)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
                    isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
                  }`}
                >
                  <FaHeart /> {isFavorite ? 'Saved' : 'Save'}
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-200 text-gray-700">
                  <FaShareAlt /> Share
                </button>
              </div>
            </CollapsibleSection>

            {/* Main Image and Gallery */}
            <CollapsibleSection title="Gallery" icon={FaHome}>
              <div className="mb-6">
                <img
                  src={selectedImage || property.image}
                  alt={property.name}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
              
              <div className="grid grid-cols-5 gap-4">
                {[property.image, property.image, property.image, property.image, property.image].map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${property.name} view ${index + 1}`}
                    className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-75 transition-opacity"
                    onClick={() => setSelectedImage(img)}
                  />
                ))}
              </div>
            </CollapsibleSection>

            {/* Property Overview */}
            <CollapsibleSection title="Property Overview" icon={FaInfoCircle}>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <div className="flex items-center gap-2">
                  <FaBed className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Bedrooms</p>
                    <p className="font-semibold">{property.beds}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaBath className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Bathrooms</p>
                    <p className="font-semibold">{property.baths}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaRuler className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Area</p>
                    <p className="font-semibold">{property.area} sq ft</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaCar className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Parking</p>
                    <p className="font-semibold">{property.parking} spaces</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaBuilding className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Year Built</p>
                    <p className="font-semibold">{propertyDetails.yearBuilt}</p>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* Property Details */}
            <CollapsibleSection title="Property Details" icon={FaHome}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <FaKey className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Property ID</p>
                    <p className="font-semibold">{propertyDetails.details.propertyId}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaHome className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Property Type</p>
                    <p className="font-semibold">{propertyDetails.details.propertyType}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaInfoCircle className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Property Status</p>
                    <p className="font-semibold">{propertyDetails.details.propertyStatus}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaCalendarAlt className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Year Built</p>
                    <p className="font-semibold">{propertyDetails.details.yearBuilt}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaRuler className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Lot Size</p>
                    <p className="font-semibold">{propertyDetails.details.lotSize}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaBuilding className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Construction Status</p>
                    <p className="font-semibold">{propertyDetails.details.constructionStatus}</p>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* Address Section */}
            <CollapsibleSection title="Address" icon={FaMapMarkerAlt}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <FaRoad className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Street</p>
                    <p className="font-semibold">{propertyDetails.address.street}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaCity className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">City</p>
                    <p className="font-semibold">{propertyDetails.address.city}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">State</p>
                    <p className="font-semibold">{propertyDetails.address.state}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Country</p>
                    <p className="font-semibold">{propertyDetails.address.country}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Zip Code</p>
                    <p className="font-semibold">{propertyDetails.address.zipCode}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaBuilding className="text-blue-500" />
                  <div>
                    <p className="text-sm text-gray-500">Neighborhood</p>
                    <p className="font-semibold">{propertyDetails.address.neighborhood}</p>
                  </div>
                </div>
              </div>
            </CollapsibleSection>

            {/* Investment Details */}
            <CollapsibleSection title="Investment Information" icon={FaInfoCircle}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">Token Price</p>
                  <p className="text-2xl font-bold text-blue-600">{property.tokenPrice}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">Projected IRR</p>
                  <p className="text-2xl font-bold text-blue-600">{property.projectedIRR}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-500">Projected APR</p>
                  <p className="text-2xl font-bold text-blue-600">{property.projectedAPR}</p>
                </div>
              </div>
            </CollapsibleSection>

            {/* Description */}
            <CollapsibleSection title="Description" icon={FaInfoCircle}>
              <Dropdown title="Description">
                <p className="text-gray-600 leading-relaxed">
                  {propertyDetails.description}
                </p>
              </Dropdown>
            </CollapsibleSection>

            {/* Features */}
            <CollapsibleSection title="Features" icon={FaHome}>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Interior Details</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {propertyDetails.features.interiorDetails.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Outdoor Details</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {propertyDetails.features.outdoorDetails.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Utilities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {propertyDetails.features.utilities.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-green-500">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CollapsibleSection>
          </div>

          {/* Right Section - Contact Card */}
          <div className="w-full lg:w-auto lg:sticky lg:top-24 h-fit">
            <ContactCard propertyName={property.name} />
          </div>
        </div>
      </div>

      {/* Similar Properties - Full Width Section */}
      <div className="py-12">
        <div className="max-w-[1200px] mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Similar Properties</h2>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {visibleProperties.map((prop) => (
                <PropertyCard 
                  key={prop.id} 
                  property={prop}
                  onClick={() => navigate(`/property/${prop.id}`)}
                />
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous properties"
            >
              <FaChevronLeft className="text-xl text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next properties"
            >
              <FaChevronRight className="text-xl text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
