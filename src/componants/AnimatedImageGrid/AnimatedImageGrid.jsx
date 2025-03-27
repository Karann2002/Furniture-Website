import { motion } from "framer-motion";

const images = [
  { id: 1, src: "/public/Images (7).png" },
 
];

export default function AnimatedImageGrid() {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Share your setup with <br /><span className="text-black">#FurnitureWala</span>
      </h2>

      <div className="">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className=""
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2, // Staggered effect
              ease: "easeInOut",
            }}
          >
            <img
              src={image.src}
              alt={`Furniture ${image.id}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
