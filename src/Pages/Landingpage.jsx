import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // loader duration
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="font-serif text-black bg-white">
      {/* LOADER */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 flex justify-center items-center z-50 bg-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div className="flex space-x-2 text-7xl font-extrabold text-pink-500">
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                }}
              >
                A
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.4, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
              >
                S
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section className="bg-[url('/background.jpg')] bg-no-repeat bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center px-6 relative">
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.div
          className="z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-4">Arsh Studio</h1>
          <p className="text-xl mb-6 max-w-xl mx-auto">
            Capturing moments that turn into timeless memories.
          </p>
          <a
            href="#about"
            className="inline-flex items-center bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-pink-700 hover:text-white transition"
          >
            Explore More <HiOutlineArrowNarrowRight className="ml-2 text-xl" />
          </a>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 px-6 text-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-pink-700">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At <strong>Arsh Studio</strong>, we specialize in capturing memories
            that last a lifetime. Whether it’s a wedding, portrait, or candid
            moment—we bring your stories to life with elegance, style, and
            timeless flair.
          </p>
        </motion.div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-10">
            Our <span className="text-pink-700">Services</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              "Wedding Photography",
              "Pre-Wedding Shoots",
              "Event Coverage",
              "Portrait Sessions",
              "Albums & Prints",
              "Videography",
            ].map((service, i) => (
              <motion.div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-semibold text-pink-700 mb-2">
                  {service}
                </h3>
                <p className="text-gray-600">
                  Professional and personalized photography to suit every
                  occasion.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* GALLERY PREVIEW SECTION */}
      <section className="py-20 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-10">
            Gallery <span className="text-pink-700">Preview</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((img) => (
              <img
                key={img}
                src={`/gallery/photo${img}.jpg`} // Replace with real image paths
                alt={`Gallery ${img}`}
                className="rounded-xl h-60 w-full object-cover hover:scale-105 transition duration-300 shadow"
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-pink-700 text-white py-20 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            Let’s Create <span className="text-yellow-300">Magic</span> Together
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Your perfect moments deserve to be captured with style. Ready to
            begin your journey?
          </p>
          <a
            href="/booknow"
            className="inline-block bg-white text-pink-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition"
          >
            Book Now
          </a>
        </motion.div>
      </section>
    </div>
  );
}

export default LandingPage;
