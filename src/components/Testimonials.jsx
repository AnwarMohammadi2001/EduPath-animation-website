import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { contentContainer, contentItem } from "../utils/framermotion/variants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../utils/Testimonials.css";
import { FaStar } from "react-icons/fa";

const CUSTOMERS = [
  {
    id: 1,
    image: "person3.png",
    message:
      "The food was absolutely delicious! I loved the variety of dishes, and the staff was incredibly friendly. Definitely my go-to place for a great meal!",
    name: "Mohammad",
    agend: "SEO Officer",
  },
  {
    id: 2,
    image: "person3.png",
    message:
      "The food was absolutely delicious! I loved the variety of dishes, and the staff was incredibly friendly. Definitely my go-to place for a great meal!",
    name: "Zahra Jan",
    agend: "SEO Officer",
  },
  {
    id: 3,
    image: "person3.png",
    message:
      "An absolutely incredible experience! The attention to detail and personalized service made our trip unforgettable. Highly recommend!",
    name: "Sabrena",
    agend: "SEO Officer",
  },
  {
    id: 4,
    image: "person3.png",
    message:
      "The food was absolutely delicious! I loved the variety of dishes, and the staff was incredibly friendly. Definitely my go-to place for a great meal!",
    name: "The Name",
    agend: "SEO Officer",
  },
];

const Testimonials = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.autoplay) {
      swiperRef.current.autoplay.start();
    }
  };

  return (
    <div
      className="bg-red-50 dark:bg-zinc-900 transition-colors duration-500 relative py-14 px-8 md:px-12"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Title */}
      <motion.div
        variants={contentContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.div variants={contentItem} className="text-center mb-2">
          <motion.h1 className="text-3xl md:text-2xl font-bold text-primary dark:text-white transition-colors duration-500">
            TESTIMONIALS
          </motion.h1>
        </motion.div>
        <motion.h2
          variants={contentItem}
          className="text-3xl md:text-4xl text-center font-bold text-black dark:text-white transition-colors duration-500"
        >
          Top Reviews
        </motion.h2>
      </motion.div>

      {/* Swiper */}
      <div className="relative mt-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: paginationRef.current,
          }}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {CUSTOMERS.map((customer) => (
            <SwiperSlide key={customer.id}>
              <div className="flex flex-col rounded-lg p-5 h-[250px] bg-white mt-7  space-y-3">
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 w-4 h-4" />
                  ))}
                </div>
                {/* Message */}
                <p className="text-base text-gray-700 dark:text-gray-300 flex items-center gap-2">
                  {customer.message}
                </p>
                {/* User Info */}
                <div className="flex items-center gap-x-2 mt-3">
                  <img
                    src={customer.image}
                    alt={customer.name}
                    className="h-12 w-12 rounded-full"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg font-bold dark:text-gray-100">
                      {customer.name}
                    </h3>
                    <p className="text-sm">{customer.agend}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div
          ref={paginationRef}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 mt-5 flex gap-2 z-20"
        ></div>

        {/* Navigation */}
        <div className="flex gap-x-5 items-center justify-center mt-5">
          <div
            ref={prevRef}
            className="swiper-button-prev-custom z-20 text-4xl cursor-pointer text-gray-600 dark:text-white hover:text-green-500 transition"
          >
            &#8592;
          </div>
          <div
            ref={nextRef}
            className="swiper-button-next-custom  z-20 text-4xl cursor-pointer text-gray-600 dark:text-white hover:text-green-500 transition"
          >
            &#8594;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
