
import React from "react";

const Card = ({ img, title, listing }) => {
  return (
    <div className="rounded-3xl h-[320px] w-[250px] flex flex-col items-center mt-5 shadow-lg shadow-gray-400 mb-10  ">
      {/* Image now fills the container properly */}
      <img src={img} alt={title} className="h-[250px] w-[250px]  object-cover rounded-t-3xl" />
      
      <h2 className="text-60px font-semibold  mt-3">{title}</h2>
      <p className="text-base -300">{listing}</p>
    </div>
  );
};

export default Card;