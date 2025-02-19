
import React from "react";

const Card = ({ img, title, listing }) => {
  return (
    <div className=" rounded-md h-[250px] w-[250px] flex flex-col items-center mt-5 shadow-lg shadow-gray-400 mb-10 ">
      {/* Image now fills the container properly */}
      <img src={img} alt={title} className="h-[150px] w-[250px]  object-cover rounded-t-md" />
      
      <h2 className="text-60px font-semibold  mt-5">{title}</h2>
      <p className="text-base -300">{listing}</p>
    </div>
  );
};

export default Card;