import React from 'react';

function BookNow() {
  return (
    <div className="bg-white text-black font-serif pt-16">

      {/* Hero Section */}
      <section className="text-center px-6 mb-14">
        <h1 className="text-5xl font-bold mb-4">Book a <span className="text-pink-700">Session</span></h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We’re excited to capture your moments. Fill out the form below and we’ll get back to you within 24 hours.
        </p>
      </section>

      {/* Booking Form */}
      <section className="max-w-4xl mx-auto bg-gray-50 shadow-lg rounded-2xl p-10 mb-20">
        <form className="space-y-6 text-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input type="text" placeholder="Your Name" className="w-full border border-gray-300 p-3 rounded-lg" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email Address</label>
              <input type="email" placeholder="you@example.com" className="w-full border border-gray-300 p-3 rounded-lg" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <input type="tel" placeholder="+91 9876543210" className="w-full border border-gray-300 p-3 rounded-lg" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Choose Package</label>
              <select className="w-full border border-gray-300 p-3 rounded-lg" required>
                <option>Basic - ₹4,999</option>
                <option>Standard - ₹9,999</option>
                <option>Premium - ₹19,999</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block mb-1 font-medium">Preferred Date</label>
            <input type="date" className="w-full border border-gray-300 p-3 rounded-lg" required />
          </div>
          <div>
            <label className="block mb-1 font-medium">Additional Notes</label>
            <textarea rows="4" className="w-full border border-gray-300 p-3 rounded-lg" placeholder="Let us know any special requests or ideas..."></textarea>
          </div>
          <button type="submit" className="w-full bg-pink-700 text-white py-3 rounded-lg hover:bg-black transition-all">
            Submit Booking Request
          </button>
        </form>
      </section>

      {/* Package Summary Cards */}
      <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold text-center mb-10">Choose the Right <span className="text-pink-700">Plan</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 border rounded-xl shadow text-center">
            <h3 className="text-2xl font-semibold mb-2">Basic</h3>
            <p className="text-pink-700 text-3xl font-bold mb-4">₹4,999</p>
            <p>1-Hour Shoot</p>
            <p>15 Edited Photos</p>
            <p>Digital Delivery</p>
          </div>
          <div className="p-6 border-2 border-pink-700 bg-pink-50 rounded-xl shadow text-center scale-105">
            <h3 className="text-2xl font-semibold mb-2">Standard</h3>
            <p className="text-pink-700 text-3xl font-bold mb-4">₹9,999</p>
            <p>3-Hour Shoot</p>
            <p>35 Edited Photos</p>
            <p>Digital + USB</p>
          </div>
          <div className="p-6 border rounded-xl shadow text-center">
            <h3 className="text-2xl font-semibold mb-2">Premium</h3>
            <p className="text-pink-700 text-3xl font-bold mb-4">₹19,999</p>
            <p>Full Day Coverage</p>
            <p>100+ Photos & Album</p>
            <p>Video Highlights</p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Contact <span className="text-pink-700">Details</span></h2>
        <p className="text-lg">📞 +91 123456789</p>
        <p className="text-lg">📧 arshstudio@email.com</p>
        <p className="text-lg">📍 Kathar, Punjab, India</p>
      </section>

      {/* Google Map (Optional Embed) */}
      <section className="pt-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Our <span className="text-pink-700">Studio Location</span></h2>
        <div className="w-full max-w-5xl mx-auto h-[400px]">
          <iframe
            title="Arsh Studio Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3425.2171072491343!2d75.6242!3d31.4427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a5b49c57b471d%3A0xabcdefgh12345678!2sTanda%2C%20Punjab%2C%20India!5e0!3m2!1sen!2sin!4v1681234567890"
            className="w-full h-full border-0 rounded-xl shadow-lg"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-pink-700 text-white py-20 mt-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
        <p className="text-lg mb-6">We're here to help you plan your perfect session. Reach out anytime!</p>
        <button className="bg-white text-pink-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}

export default BookNow;
