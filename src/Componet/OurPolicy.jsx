import React from "react";
import { TbTruckReturn } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-4">
      <div>
        <TbTruckReturn className="w-12 m-auto mb-s" size={50} />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p className="text-gray-400">We Offer hassle free exchange policy </p>
      </div>
       <div>
        <FaCheckCircle className="w-12 m-auto mb-s" size={50} />
        <p className="font-semibold"> 7 Days Return policy</p>
        <p className="text-gray-400">We provide 7 days free return policy </p>
      </div>
       <div>
        <MdOutlineSupportAgent  className="w-12 m-auto mb-s" size={50} />
        <p className="font-semibold"> Best Customer Support</p>
        <p className="text-gray-400">We provide 24/7 customer support </p>
      </div>
    </div>
  );
};

export default OurPolicy;
