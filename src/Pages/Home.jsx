import React, { useState, useEffect } from 'react';
import Image1 from "../assets/Images/Image1.jpg";
import Image2 from "../assets/Images/Image2.jpg";
import Image3 from "../assets/Images/Image3.jpg";
import Image4 from "../assets/Images/Image4.jpg";
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from 'react-icons/hi2';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const [current, setCurrent] = useState(0);
  const images = [Image3, Image2, Image1, Image4];

  const prevSlide = () => setCurrent(current === 0 ? images.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === images.length - 1 ? 0 : current + 1);

  // Scroll to top + initialize AOS on page load
  useEffect(() => {
    window.scrollTo(0, 0); // ⬆️ scroll to top on refresh

    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const testimonials = [
    {
      name: "Simran & Karan",
      location: "Ludhiana",
      message: "Arsh Studio captured our wedding day perfectly. The photos were magical and timeless!",
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Anjali Sharma",
      location: "Hoshiarpur",
      message: "Very professional and patient. I loved how the pictures turned out for my baby’s birthday shoot.",
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "Vikram & Tanya",
      location: "Jalandhar",
      message: "Best photography experience! The team made us feel comfortable and the edits were beautiful.",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
  ];

  return (
    <div className="bg-white text-black font-serif scroll-smooth">

      {/* Hero Section */}
      <section className="text-center pt-24 pb-12 bg-gray-50" data-aos="fade-up" data-aos-offset="200" data-aos-anchor-placement="center-bottom">
        <h1 className="text-5xl font-extrabold animate-pulse">Capture Timeless Moments</h1>
        <h2 className="text-4xl mt-2">with <span className="text-pink-700">Arsh Studio</span>.</h2>
        <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
          Where Every Photo Tells a Story.
        </p>
        <button className="mt-6 bg-pink-700 text-white px-6 py-3 rounded-full hover:bg-black hover:text-white transition text-xl shadow">
          Book a Session
        </button>
      </section>

      {/* Carousel */}
      <section className="relative max-w-4xl mx-auto mt-10" data-aos="zoom-in" data-aos-offset="200" data-aos-anchor-placement="center-bottom">
        <img src={images[current]} alt="carousel" className="w-full h-96 object-cover rounded-xl shadow-xl transition-all duration-700" />
        <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white hover:bg-black text-black hover:text-white p-2 rounded-full shadow">
          <HiOutlineArrowSmallLeft size={24} />
        </button>
        <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white hover:bg-black text-black hover:text-white p-2 rounded-full shadow">
          <HiOutlineArrowSmallRight size={24} />
        </button>
      </section>

      {/* Intro + Booking */}
      <section className="flex flex-col md:flex-row justify-between items-center gap-12 mt-24 px-8 max-w-7xl mx-auto" data-aos="fade-up" data-aos-offset="200" data-aos-anchor-placement="center-bottom">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold">Turn Passion into a Lasting <span className="text-pink-700">Impression</span>.</h2>
          <button className="text-xl underline hover:text-blue-600 flex items-center animate-bounce">
            Book Now <HiOutlineArrowSmallRight className="ml-2 mt-1" />
          </button>
        </div>
        <div className="md:w-1/2 text-gray-700 space-y-4 text-lg">
          <p>Modern. Elegant. Timeless Photography for Every Occasion.</p>
          <p>From portraits to events, we offer a complete photography experience — featuring portfolios, client access, and a premium print store.</p>
          <p>Streamline your work with built-in tools so you can make more time for clients.</p>
        </div>
      </section>

      {/* Gallery */}
      <section className="mt-28 px-6 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-anchor-placement="center-bottom">
        <h2 className="text-4xl font-bold mb-10">Photo <span className="text-pink-700">Gallery</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {[Image1, Image2, Image3, Image4].map((img, i) => (
            <img key={i} src={img} alt={`Gallery ${i}`} className="h-60 object-cover rounded-xl hover:scale-105 transition duration-300 shadow" />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-28 px-6 text-center" data-aos="fade-up" data-aos-offset="200" data-aos-anchor-placement="center-bottom">
        <h2 className="text-4xl font-bold mb-10">Why <span className="text-pink-700">Choose Us?</span></h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg text-gray-700">
          <p>🎓 10+ Years of Photography Experience</p>
          <p>📸 Professional Equipment & Editing</p>
          <p>💡 Creative Direction & Concepts</p>
          <p>🔐 Private Client Galleries & Downloads</p>
          <p>📦 Affordable Packages & Prints</p>
          <p>📍 Available Across Punjab & North India</p>
        </div>
      </section>

      {/* Awards */}
      <section className="mt-28 px-6 text-center" data-aos="fade-down" data-aos-offset="200" data-aos-anchor-placement="center-bottom">
        <h2 className="text-4xl font-bold mb-10">Awards & <span className="text-pink-700">Recognition</span></h2>
        <div className="flex flex-wrap justify-center gap-8 text-lg text-gray-600">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl transition">🥇 Wedding Photographer of the Year – 2024</div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl transition">🏆 Best Regional Studio – Punjab Awards</div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-xl transition">📸 Featured in Indian Bridal Magazine</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-20 mt-28 text-center" data-aos="slide-right" data-aos-offset="200" data-aos-anchor-placement="center-bottom">
        <h2 className="text-4xl font-bold mb-12">Client <span className="text-pink-700">Testimonials</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition text-left">
              <div className="flex items-center gap-4 mb-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-pink-700" />
                <div>
                  <h4 className="font-bold">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">“{t.message}”</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-pink-700 text-white py-20 mt-28 text-center px-6" data-aos="zoom-in" data-aos-offset="200" data-aos-anchor-placement="center-bottom">
        <h2 className="text-4xl font-bold mb-4">Let’s Create <span className="text-yellow-300">Magic</span> Together</h2>
        <p className="mb-6 text-lg">Your perfect moments deserve to be captured with style. Ready to begin?</p>
        <a href="/booknow" className="bg-white text-pink-700 px-6 py-3 rounded-full font-semibold text-lg hover:bg-black hover:text-white transition">
          Book Now
        </a>
      </section>
    </div>
  );
}

export default Home;
