import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex justify-between items-center sm:px-12 md:px-24 xl:px-10 py-4 sticky top-0 z-50 backdrop-blur-xl bg-white/50 font-medium px-4 dark:bg-gray-900/70">
      {/* Logo */}
      <p>EduPath</p>

      {/* Menu links */}
      <div
        className={`text-gray-700 dark:text-white sm:text-sm space-x-5
          ${
            !sidebarOpen
              ? "max-sm:w-0 max-sm:overflow-hidden"
              : "max-sm:w-60 max-sm:pl-10"
          }
          max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full
          max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20
          flex sm:items-center gap-5 transition-all`}
      >
        {/* Close icon */}
        <img
          src={assets.close_icon}
          alt=""
          className="absolute top-4 w-6 right-3 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(false)}
        />

        <a
          href="#"
          onClick={() => setSidebarOpen(false)}
          className="sm:hover:border-b"
        >
          Home
        </a>
        <a
          href="#services"
          onClick={() => setSidebarOpen(false)}
          className="sm:hover:border-b"
        >
          Services
        </a>
        <a
          href="#pur-work"
          onClick={() => setSidebarOpen(false)}
          className="sm:hover:border-b"
        >
          Our Works
        </a>
        <a
          href="#contact-us"
          onClick={() => setSidebarOpen(false)}
          className="sm:hover:border-b"
        >
          Contact Us
        </a>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Mobile menu icon */}
        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="Menu"
          className="w-8 sm:hidden cursor-pointer"
          onClick={() => setSidebarOpen(true)}
        />

        {/* Contact button */}
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center bg-primary gap-2 text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Connect <img src={assets.arrow_icon} alt="" width={14} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
