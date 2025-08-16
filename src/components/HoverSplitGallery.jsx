import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HoverSplitGallery({
  items = [
    {
      image:
        "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1600",
      name: "John Doe",
      position: "Frontend Instructor",
      topics: 100,
    },
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Sarah Lee",
      position: "Backend Instructor",
      topics: 8,
    },
    {
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1600",
      name: "Michael Smith",
      position: "UI/UX Mentor",
      topics: 15,
    },
  ],
  height = "500px",
}) {
  const [hovered, setHovered] = useState(0); // default first item is big
  const transition = { type: "spring", stiffness: 220, damping: 28 };

  return (
    <div
      className="w-full"
      style={{ height }}
      onMouseLeave={() => setHovered(0)}
    >
      <div className="flex h-full gap-8">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-2xl shadow-md cursor-pointer flex-[1]"
            onHoverStart={() => setHovered(i)}
            onFocus={() => setHovered(i)}
            tabIndex={0}
            aria-label={`Gallery image ${i + 1}`}
            animate={{
              flexGrow: hovered === i ? 6 : 2,
              flexBasis: 0,
            }}
            transition={transition}
          >
            <motion.img
              src={item.image}
              alt={item.name}
              className="absolute inset-0 h-full w-full object-cover"
              animate={{ scale: hovered === i ? 1.05 : 1.0 }}
              transition={transition}
              draggable={false}
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

            {/* Info area */}
            <AnimatePresence mode="wait">
              {hovered === i ? (
                // Show full details on hovered
                <motion.div
                  key="full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute bottom-10 left-14 right-14 flex justify-between text-white pointer-events-none"
                >
                  <div>
                    <h3 className="text-4xl font-semibold">{item.name}</h3>
                    <p className="text-sm opacity-80">{item.position}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl">{item.topics}</span>
                    <p className="text-sm opacity-80">Topics</p>
                  </div>
                </motion.div>
              ) : (
                // Show only position on not-hovered (except first item)
                i !== 0 && (
                  <motion.div
                    key="position"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute bottom-6 left-6 text-white pointer-events-none"
                  >
                    <p className="text-xl font-semibold opacity-90 [writing-mode:vertical-rl] rotate-180">
                      {item.position}
                    </p>
                  </motion.div>
                )
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
