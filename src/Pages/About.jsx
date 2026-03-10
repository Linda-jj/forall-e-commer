import React from "react";
import Title from "../Componet/Title";
import about from "../Assets/frontend_assets/about_img.png";
import NewsletterBox from '../Componet/NewsletterBox'
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={"US"} />
        <div className="my-10 flex flex-col md:flex-row gap-16">
          <img className="w-full md:max-w-[450px]" src={about} alt="" />
          <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
            <p>
              We are passionate about providing high-quality products at
              affordable prices while delivering a smooth and enjoyable shopping
              experience. Our goal is to make online shopping simple, reliable,
              and accessible for everyone.
            </p>
            <p>
              Our store offers a carefully selected range of products including
              fashion, accessories, toys, and beauty items. Each product is
              chosen with attention to quality, style, and value so our
              customers can shop with confidence.
            </p>
            <b className="text-gray-800">Our Mission</b>
            <p>
              Customer satisfaction is at the heart of everything we do. From
              secure payments to fast delivery and friendly support, we are
              committed to making your experience with us easy and enjoyable.
            </p>
          </div>
        </div>
        <div className="text-xl py-4 ">
          <Title text1={"WHY "} text2={"CHOOSE US"} />
        </div>
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className="text-gray-600">
              We believe shopping should be more than just buying products — it
              should be an experience that brings convenience, trust, and
              happiness.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className="text-gray-600">
              We believe shopping should be more than just buying products — it
              should be an experience that brings convenience, trust, and
              happiness.
            </p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer service:</b>
            <p className="text-gray-600">
              We believe shopping should be more than just buying products — it
              should be an experience that brings convenience, trust, and
              happiness.
            </p>
          </div>
        </div>
        <NewsletterBox/>
      </div>
    </div>
  );
};

export default About;
