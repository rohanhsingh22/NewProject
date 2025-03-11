import { useState } from "react";
import { FaPhone, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const ContactCard = ({ propertyName }) => {
  const [activeTab, setActiveTab] = useState("request");
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    phone: "", 
    message: `I'm interested in ${propertyName}` 
  });

  return (
    <div className="max-w-xs border rounded-2xl p-4 shadow-md bg-white">
      {/* Tabs */}
      <div className="w-full mb-4">
        <div className="grid grid-cols-2 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab("request")}
            className={`py-2 px-4 rounded-lg transition-colors ${
              activeTab === "request"
                ? "bg-white shadow-sm"
                : "hover:bg-gray-200"
            }`}
          >
            Request Info
          </button>
          <button
            onClick={() => setActiveTab("tour")}
            className={`py-2 px-4 rounded-lg transition-colors ${
              activeTab === "tour"
                ? "bg-white shadow-sm"
                : "hover:bg-gray-200"
            }`}
          >
            Schedule a tour
          </button>
        </div>
      </div>

      {/* Agent Info */}
      <div className="flex items-center gap-3 my-4">
        <img
          src="/assets/agents/agent02.webp"
          alt="Agent"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold">Lora Smith</h3>
          <p className="text-sm text-gray-500">Member ID: 9876543210</p>
        </div>
      </div>

      {/* Form */}
      <input
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="Your Mail"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="tel"
        placeholder="Your Phone"
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="w-full px-4 py-2 mb-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <textarea
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full px-4 py-2 mb-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
      />

      {/* Action Buttons */}
      <div className="flex gap-2 mb-3">
        <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border rounded-lg hover:bg-gray-50">
          <FaPhone size={16} /> Call
        </button>
        <button className="flex-1 flex items-center justify-center gap-2 py-2 px-4 border rounded-lg hover:bg-gray-50">
          <FaWhatsapp size={16} /> Whatsapp
        </button>
      </div>
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 flex items-center justify-center gap-2">
        <FaEnvelope size={16} /> Send Email
      </button>
    </div>
  );
};

export default ContactCard; 