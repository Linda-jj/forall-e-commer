import React from "react";
import log from "../Assets/logo.JPG";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="w-1/2 md-5" src={log} alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Discover products designed to make your life easier, better, and
            more stylish. At FORALL
          </p>
        </div>
        <div>
          <p className="text-xl  font-medium mb-5">COMPNY</p>
          <ul className="flex flex-col gap-1 text-gray-600 ">
            <li>HOME</li>
            <li>ABOUT US</li>
            <li>DELIVERY</li>
            <li>PRIVACY POLICY</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+2519345677</li>
            <li>lideya@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center ">
          Copyright 2026@ ForAll.com-All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
