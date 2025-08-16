import React from "react";
import assets from "../assets/assets";

const Footer = ({ theme, setTheme }) => {
  return (
    <div className="bg-slate-50 dark:bg-gray-900 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40">
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <div className="space-y-5 text-sm text-gray-700 dark:text-gray-400">
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-32 sm:w-40"
          />
          <p className="max-w-md">
            From starategy to execute , we craft digital solutions that move
            your business forward.
          </p>
          <ul>
            <li>
              <a href="#hero" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="#our-work" className="hover:text-primary">
                Our Work
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:text-primary">
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div className="text-gray-600 dark:text-gray-400">
          <h3 className="font-semibold ">Subscribe to our newsletter</h3>
          <p className="text-sm mt-2 mb-6">
            The latest news, articls, and resources sent to your inbox weekly
          </p>
          <div className="flex gap-2 text-sm">
            <input type="email"placeholder="Enter your email" className="w-full p-3 text-sm outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500" />
            <button className="bg-primary text-white rounded px-6">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
