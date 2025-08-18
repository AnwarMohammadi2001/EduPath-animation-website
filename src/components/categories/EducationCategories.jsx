import React, { useState } from "react";
import { CourseCard } from "./CourseCard";
// Example data const
const coursesData = [
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=600",
    title: "Photography Basics",
    duration: "3 weeks",
    instructor: "Chris Brown",
    category: "Entertainment",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600",
    title: "Guitar for Beginners",
    duration: "8 weeks",
    instructor: "Anna Lee",
    category: "Entertainment",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600",
    title: "Cinematic Filmmaking",
    duration: "6 weeks",
    instructor: "Robert Fox",
    category: "Entertainment",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1458071103241-9de9f8f7f7b0?w=600",
    title: "Digital Painting",
    duration: "5 weeks",
    instructor: "Samantha Green",
    category: "Entertainment",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=600",
    title: "Yoga for Wellness",
    duration: "4 weeks",
    instructor: "Sophia Carter",
    category: "Lifestyle",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600",
    title: "Healthy Cooking",
    duration: "3 weeks",
    instructor: "Daniel Evans",
    category: "Lifestyle",
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1526403226788-6e1d3f7f93a3?w=600",
    title: "Mindfulness Meditation",
    duration: "6 weeks",
    instructor: "Olivia Taylor",
    category: "Lifestyle",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1523473827534-0860f4e3e13e?w=600",
    title: "Fitness at Home",
    duration: "5 weeks",
    instructor: "James Martin",
    category: "Lifestyle",
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600",
    title: "Creative Writing",
    duration: "6 weeks",
    instructor: "Emily Johnson",
    category: "Writing",
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600",
    title: "Blogging Masterclass",
    duration: "4 weeks",
    instructor: "Mark Adams",
    category: "Writing",
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=600",
    title: "Poetry & Expression",
    duration: "5 weeks",
    instructor: "Sarah Wilson",
    category: "Writing",
  },
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1496317899792-9d7dbcd928a1?w=600",
    title: "Technical Writing",
    duration: "7 weeks",
    instructor: "David Clark",
    category: "Writing",
  },
  {
    id: 17,
    image: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=600",
    title: "Entrepreneurship 101",
    duration: "6 weeks",
    instructor: "Jessica Brown",
    category: "Business",
  },
  {
    id: 18,
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=600",
    title: "Marketing Fundamentals",
    duration: "5 weeks",
    instructor: "Brian Hall",
    category: "Business",
  },
  {
    id: 19,
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600",
    title: "Leadership Skills",
    duration: "4 weeks",
    instructor: "Sophia Lee",
    category: "Business",
  },
  {
    id: 20,
    image: "https://images.unsplash.com/photo-1521790366329-943d29d1dc2d?w=600",
    title: "Financial Planning",
    duration: "7 weeks",
    instructor: "Michael Scott",
    category: "Business",
  },
  {
    id: 21,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
    title: "Italian Cooking",
    duration: "4 weeks",
    instructor: "Giovanni Rossi",
    category: "Food",
  },
  {
    id: 22,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600",
    title: "Baking Basics",
    duration: "3 weeks",
    instructor: "Emma Brown",
    category: "Food",
  },
  {
    id: 23,
    image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?w=600",
    title: "Vegan Recipes",
    duration: "5 weeks",
    instructor: "Liam Davis",
    category: "Food",
  },
  {
    id: 24,
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600",
    title: "Street Food Adventures",
    duration: "6 weeks",
    instructor: "Sophia Miller",
    category: "Food",
  },
];

export default function EducationCategories() {
  const categories = [
    "All Categories",
    "Entertainment",
    "Lifestyle",
    "Writing",
    "Business",
    "Food",
  ];
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [visibleCount, setVisibleCount] = useState(8);

  // Filter courses based on category
  const filteredCourses =
    selectedCategory === "All Categories"
      ? coursesData
      : coursesData.filter((c) => c.category === selectedCategory);

  // Courses to display
  const displayedCourses =
    selectedCategory === "All Categories"
      ? filteredCourses.slice(0, visibleCount)
      : filteredCourses;

  // Reset visible count when category changes
  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat);
    setVisibleCount(8); // reset to 8 if user switches back to All Categories
  };

  return (
    <div id="category" className="py-20 min-h-screen px-12">
      {/* Category Buttons */}
      <div className="text-center">
        <h2 className="text-lg sm:text-2xl lg:text-4xl tracking-normal text-gray-700">
          Unlimited access to 100+ instructors.
        </h2>
      </div>
      <div className="flex justify-center gap-3 my-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategoryClick(cat)}
            className={`relative px-2 py-1.5 transition duration-300 group cursor-pointer
            ${
              selectedCategory === cat
                ? "text-black font-bold font-Manrope"
                : "text-gray-700 hover:text-black"
            }`}
          >
            {cat}
            <span
              className={`absolute h-[2px] left-0 w-full -bottom-0.5 transform scale-x-0 bg-black hover:bg-gray-700 transition-transform duration-500 origin-center 
              ${
                selectedCategory === cat
                  ? "scale-x-100"
                  : "group-hover:scale-x-100"
              }`}
            ></span>
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pt-5 gap-6">
        {displayedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Show More Button */}
      {selectedCategory === "All Categories" &&
        visibleCount < filteredCourses.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="px-6 py-2 rounded-full cursor-pointer bg-black text-white font-medium hover:bg-gray-800 transition"
            >
              Show More
            </button>
          </div>
        )}
    </div>
  );
}
