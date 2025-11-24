import React from 'react';
import AboutImage from '../assets/Images/Image4.jpg'; // Replace with your image
import StudioWork from '../assets/Images/Image2.jpg'; // Another image for behind the scenes

function About() {
  return (
    <div className="bg-white text-black font-serif scroll-smooth pt-16">

      {/* Hero Section */}
      <section className="text-center px-4 mb-16">
        <h1 className="text-5xl font-bold mb-4">About <span className="text-pink-700">Arsh Studio</span></h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Turning real moments into timeless art — we're not just photographers, we're storytellers.
        </p>
      </section>

      {/* Our Story */}
      <section className="flex flex-col md:flex-row justify-around items-center px-6 md:px-16 gap-10 mb-24">
        <img
          src={AboutImage}
          alt="Arsh Studio"
          className="rounded-3xl shadow-2xl w-full md:w-[45%] object-cover hover:scale-105 transition duration-500"
        />

        <div className="md:w-[50%] text-lg space-y-6">
          <p>
            Founded with a passion to capture love, culture, and beauty — Arsh Studio has grown into a creative space where every photo tells a personal story.
          </p>
          <p>
            Based in Punjab and shooting across India, we specialize in weddings, portraits, events, maternity, and fashion photography with a soulful touch.
          </p>
          <p>
            Our team believes every memory deserves to be relived through a photograph. That’s why we focus on authenticity, emotion, and artistic flair in everything we deliver.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Our <span className="text-pink-700">Mission</span> & <span className="text-pink-700">Vision</span></h2>
        <p className="text-lg max-w-4xl mx-auto text-gray-700">
          Our mission is to capture the real, raw, and beautiful emotions of your life. We envision a world where photography is not just a profession, but a personal connection between the artist and the story.
        </p>
      </section>

      {/* Our Values */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-4xl font-bold mb-10">Our <span className="text-pink-700">Values</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-left text-lg text-gray-700">
          <div><h3 className="text-xl font-semibold mb-2">✨ Authenticity</h3><p>We capture moments as they happen — raw, honest, and full of soul.</p></div>
          <div><h3 className="text-xl font-semibold mb-2">🎨 Creativity</h3><p>Every shoot is a canvas. We blend ideas, colors, and light to make it art.</p></div>
          <div><h3 className="text-xl font-semibold mb-2">❤️ Relationships</h3><p>We build long-lasting bonds with our clients, treating them like family.</p></div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="text-center px-6 py-20 bg-pink-50">
        <h2 className="text-4xl font-bold mb-10">Meet Our <span className="text-pink-700">Creative Team</span></h2>
        <div className="flex flex-col md:flex-row justify-center gap-16">
          <div className="text-center">
            <img src="https://via.placeholder.com/150" alt="Arshdeep" className="rounded-full w-36 h-36 mx-auto mb-4 border-4 border-pink-700" />
            <h3 className="text-xl font-semibold">Arshdeep Singh</h3>
            <p className="text-sm text-gray-500">Founder & Lead Photographer</p>
          </div>
          <div className="text-center">
            <img src="https://via.placeholder.com/150" alt="Riya" className="rounded-full w-36 h-36 mx-auto mb-4 border-4 border-pink-700" />
            <h3 className="text-xl font-semibold">Riya Sharma</h3>
            <p className="text-sm text-gray-500">Photo Editor & Creative Head</p>
          </div>
        </div>
      </section>

      {/* Workflow / How We Work */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our <span className="text-pink-700">Workflow</span></h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center text-gray-800 text-lg">
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-bold mb-2">📅 Consultation</h4>
            <p>We discuss ideas, requirements & vision with clients.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-bold mb-2">📸 Shoot Day</h4>
            <p>We capture you naturally — guided by light & expression.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-bold mb-2">🖥️ Editing</h4>
            <p>Our editors enhance every photo to look magical & real.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h4 className="font-bold mb-2">📁 Delivery</h4>
            <p>Clients get private albums, prints & digital copies.</p>
          </div>
        </div>
      </section>

      {/* Client Collaboration Section */}
      <section className="bg-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">We Work <span className="text-pink-700">With You</span>, Not Just For You</h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          Our process is interactive. We encourage client input from concept to delivery. Whether it's a wedding or a creative portrait session, you're part of the vision from the very start.
        </p>
      </section>

      {/* Tools & Tech */}
      <section className="py-20 px-6 bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-8">Technology That <span className="text-pink-700">Elevates</span> Our Art</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-lg text-gray-700 max-w-6xl mx-auto">
          <div><h4 className="font-semibold mb-2">📷 Camera Gear</h4><p>We use industry-leading Canon & Sony cameras for crisp quality.</p></div>
          <div><h4 className="font-semibold mb-2">💻 Editing Tools</h4><p>Lightroom, Photoshop, and custom LUTs to create stunning edits.</p></div>
          <div><h4 className="font-semibold mb-2">☁️ Cloud Access</h4><p>Clients can securely access and download photos from anywhere.</p></div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 py-20">
        <img src={StudioWork} alt="Behind the scenes" className="w-full md:w-[45%] rounded-2xl shadow-2xl hover:scale-105 transition duration-500" />
        <div className="md:w-[50%] space-y-5 text-lg">
          <h3 className="text-3xl font-bold">Behind The <span className="text-pink-700">Scenes</span></h3>
          <p>It’s more than cameras. It’s teamwork, creativity, and dedication behind every session we shoot. Here’s a glimpse of how we build your memories with care.</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-pink-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Let’s Capture Your Story Next</h2>
        <p className="mb-6 text-lg">We’re excited to work with you. Schedule a session and let’s make magic together.</p>
        <button className="bg-white text-pink-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition-all duration-300">
          Book a Consultation
        </button>
      </section>
    </div>
  );
}

export default About;
