import property1 from "../../../assets/Property/property1.jpg";
import property2 from "../../../assets/Property/property2.jpg";
import property5 from "../../../assets/Property/property5.jpg";
import property6 from "../../../assets/Property/property6.jpg";
import property7 from "../../../assets/Property/property7.jpg";
import property11 from "../../../assets/Property/property11.jpg";


const cards = [
  {
    id: 1,
    image: property1,
    status: "Active",
    title: "Olympic Valley",
    location: "Canada, Vancouver",
    price: "$300,000",
    details: { beds: 3, baths: 2, sqft: 325, parking: 1 },
    financials: { tokenPrice: "$50", projectedIRR: "26.3%", projectedAPR: "16.3%" },
    agent: {
      name: "rachel Green",
      image: "../assets/agents/agent02.webp",
      phone: "+1 234 567 890",
    },
  },
  {
    id: 2,
    image: property2,
    status: "Sold",
    title: "Mountain View",
    location: "USA, California",
    price: "$400,000",
    details: { beds: 4, baths: 3, sqft: 450, parking: 2 },
    financials: { tokenPrice: "$60", projectedIRR: "28.5%", projectedAPR: "18.2%" },
    agent: {
      name: "Jane Smith",
      image: "../assets/agents/image.png",
      phone: "+1 345 678 901",
    },
  },
  {
    id: 3,
    image: property7,
    status: "Active",
    title: "Sunset Hills",
    location: "USA, Arizona",
    price: "$350,000",
    details: { beds: 2, baths: 2, sqft: 300, parking: 1 },
    financials: { tokenPrice: "$45", projectedIRR: "24.7%", projectedAPR: "15.8%" },
    agent: {
      name: "Alice Johnson",
      image: "../assets/agents/agent02.webp",
      phone: "+1 456 789 012",
    },
  },
  {
    id: 4,
    image: property11,
    status: "Active",
    title: "Ocean View",
    location: "USA, Florida",
    price: "$450,000",
    details: { beds: 3, baths: 2, sqft: 400, parking: 2 },
    financials: { tokenPrice: "$55", projectedIRR: "27.5%", projectedAPR: "17.5%" },
    agent: {
      name: "Bob Brown",
      image: "../assets/agents/image.png",
      phone: "+1 567 890 123",
    },
  },
  {
    id: 5,
    image: property5,
    status: "Active",
    title: "Ocean View",
    location: "USA, Florida",
    price: "$450,000",
    details: { beds: 3, baths: 2, sqft: 400, parking: 2 },
    financials: { tokenPrice: "$55", projectedIRR: "27.5%", projectedAPR: "17.5%" },
    agent: {
      name: "Charlie Davis",
      image: "../assets/agents/image.png",
      phone: "+1 678 901 234",
    },
  },
  {
    id: 6,
    image: property6,
    status: "Active",
    title: "Ocean View",
    location: "USA, Florida",
    price: "$450,000",
    details: { beds: 3, baths: 2, sqft: 400, parking: 2 },
    financials: { tokenPrice: "$55", projectedIRR: "27.5%", projectedAPR: "17.5%" },
    agent: {
      name: "Eve White",
      image: "../assets/agents/agent02.webp",
      phone: "+1 789 012 345",
    },
  },
  {
    id: 7,
    image: property2,
    status: "Active",
    title: "Ocean View",
    location: "USA, Florida",
    price: "$450,000",
    details: { beds: 3, baths: 2, sqft: 400, parking: 2 },
    financials: { tokenPrice: "$55", projectedIRR: "27.5%", projectedAPR: "17.5%" },
    agent: {
      name: "Bob Brown",
      image: "../assets/agents/image.png",
      phone: "+1 567 890 123",
    },
  },
];

export default cards;