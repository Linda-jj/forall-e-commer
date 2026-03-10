import React from "react";
import Title from "../Componet/Title";
import contact from "../Assets/frontend_assets/contact_img.png";
import NewsletterBox from "../Componet/NewsletterBox";
const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px]" src={contact} alt="" />
      <div className="flex flex-col justify-center items-start gap-6">
<p className="font-semibold text-xl text-gray-600">Our Store</p>
<p className="text-gray-500">57890 Bole subcity <b>Addis Ababa,Ethiopia</b></p>
<p className="text-gray-500">tel:+251 923829008<br/>Email: admin@ForAll.com</p>
<p className="font-semibold text-xl text-gray-600">Careers at ForAll </p>
<p className="text-gray-500">Learn more about our teams and job openings.</p>
<button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
      </div>
      </div>
      <NewsletterBox/>
    </div>
  );
};

export default Contact;
