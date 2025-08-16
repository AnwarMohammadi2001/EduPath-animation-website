import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import SerivesCard from "./SerivesCard";

const Services = () => {
  const servicesData = [
    {
      title: "Advertising",
      description:
        "We turn bold ideas into powerful digital solutions that connect, engage...",
      icon: assets.ads_icon,
    },
    {
      title: "Content Marketing",
      description: "We help you execute your plan and deliver results.",
      icon: assets.marketing_icon,
    },
    {
      title: "Content Writing",
      description:
        "We help you create a marketing strategy that drives results.",
      icon: assets.content_icon,
    },
    {
      title: "Social Media",
      description:
        "We help you build a strong social media presence and engage.",
      icon: assets.social_icon,
    },
  ];

  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-[120px] text-gray-700 dark:text-white"
    >
      {/* Background image */}
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-96 -left-72 z-[-1] dark:hidden"
      />

      <Title
        title="How can we help?"
        desc="From strategy to excution we craft digital solutions that move your business forward."
      />

      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((serivce, index) => (
          <SerivesCard service={serivce} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
