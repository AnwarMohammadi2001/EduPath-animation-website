import React, { useState } from "react";
import Hero from "./components/Hero";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import EducationCategories from "./components/categories/EducationCategories";
import Skill from "./components/Skill";
import Testimonials from "./components/Testimonials";
import { FaStar } from "react-icons/fa";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  return (
    <div className="dark:bg-black  bg-gray-100 relative">
      <Toaster />
      {/* <Navbar theme={theme} setTheme={setTheme} /> */}
      <Hero theme={theme} setTheme={setTheme} />
      <div className="h-72 bg-primary/90 px-40 grid grid-cols-2">
        <div className="h-full  text-3xl flex items-center justify-center">
          <p className="max-w-md text-white">
            Trusted by over 10,000+ 
            students worldwide since 2028
          </p>
        </div>
        <div className="h-full  text-white flex justify-evenly items-center">
          <div className="border border-white h-40 w-40 flex flex-col p-3 gap-4">
            <p className="text-5xl">4.8</p>

            {/* Five yellow stars */}
            <div className="flex text-yellow-400 text-xl">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>

            <p className="font-bold">4,300 ratings</p>
          </div>
          <div className="border border-white h-40 w-40 flex flex-col p-3 gap-y-4">
            <p className="text-5xl">1.7M</p>

            {/* Five yellow stars */}

            <p className="font-bold text-sm">Worldwide products sold oer year.</p>
           
          </div>
        </div>
      </div>
      <EducationCategories />
      <Skill />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
