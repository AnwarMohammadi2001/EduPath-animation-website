import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import EducationCategories from "./components/categories/EducationCategories";
import Skill from "./components/Skill";
import Testimonials from "./components/Testimonials";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  return (
    <div className="dark:bg-black  bg-gray-100 relative">
      <Toaster />
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />

      <EducationCategories />
      <Skill />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
