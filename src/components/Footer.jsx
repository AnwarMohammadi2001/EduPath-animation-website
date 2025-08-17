import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FaMapMarkerAlt, FaRegCalendarAlt } from "react-icons/fa";
const Footer = () => {
  const [location, setLocation] = useState("Fetching location...");
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // You can use a reverse geocoding API to get the city name
          setLocation(
            `Lat: ${latitude.toFixed(2)}, Lon: ${longitude.toFixed(2)}`
          );
        },
        (error) => {
          console.error(error);
          setLocation("Location not available");
        }
      );
    } else {
      setLocation("Geolocation not supported");
    }
  }, []);
  return (
    <footer className="bg-white text-gray-600 pt-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">EduPath</h3>
          <p className="text-gray-600">
            Bringing creativity and quality together. We provide amazing
            services and support for your business.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 ">
            <li>
              <a href="#home" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white transition">
                About
              </a>
            </li>
           
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact</h3>
          <p>Email: info@tamadon.com</p>
          <p>Phone: +93 772 387 935</p>

          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-5 text-center text-gray-500 border-t border-gray-800 flex justify-between items-center py-6">
        <p>
          &copy; {new Date().getFullYear()} EduPath. Made it with{" "}
          <span className="text-red-500">❤️</span> and lots of coffee.
        </p>

        <div className="text-center text-gray-500 flex flex-col md:flex-row items-center justify-center gap-4">
          <span className="flex items-center gap-1">
            <FaRegCalendarAlt className="text-red-500" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1">
            <FaMapMarkerAlt className="text-red-500" />
            {location}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
