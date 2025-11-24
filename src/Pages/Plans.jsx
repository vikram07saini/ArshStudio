import React from 'react';

function PlansPricing() {
  const faqs = [
    {
      question: "Can I customize a package?",
      answer: "Yes, we offer fully customizable packages to suit your needs and budget."
    },
    {
      question: "How do I book a session?",
      answer: "Simply click on 'Book Now' or contact us directly via phone or Instagram. We'll guide you through it."
    },
    {
      question: "Do you provide raw images?",
      answer: "We usually provide only the edited images unless raw files are specifically requested."
    },
    {
      question: "What if I need to reschedule?",
      answer: "We understand emergencies. You can reschedule 48 hours before your session with no extra fee."
    }
  ];

  const testimonials = [
    {
      name: "Simran & Karan",
      message: "The premium package was worth every penny. The photos, album and video blew us away!"
    },
    {
      name: "Amit Joshi",
      message: "The team is super professional and punctual. Very happy with the outcome of the shoot."
    },
    {
      name: "Tanya Sharma",
      message: "The standard package suited my pre-wedding shoot perfectly. Loved the quality!"
    },
  ];

  return (
    <div className="bg-white text-black font-serif pt-16">

      {/* Hero */}
      <section className="text-center px-6 mb-20">
        <h1 className="text-5xl font-bold mb-4">Plans & <span className="text-pink-700">Pricing</span></h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Whether it's a portrait, pre-wedding, birthday, or big fat wedding — we’ve got the perfect plan for you.
        </p>
      </section>

      {/* Pricing Cards */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 mb-20">
        {/* BASIC */}
        <div className="border rounded-xl shadow-md p-8 hover:shadow-xl transition">
          <h3 className="text-3xl font-bold mb-2">Basic</h3>
          <p className="text-pink-700 text-4xl font-bold mb-4">₹4,999</p>
          <ul className="text-lg text-gray-700 space-y-2">
            <li>✅ 1-Hour Session</li>
            <li>✅ 15 Edited Photos</li>
            <li>✅ Digital Delivery</li>
            <li>❌ Prints</li>
            <li>❌ Video</li>
          </ul>
          <button className="mt-6 w-full bg-pink-700 text-white py-2 rounded-full hover:bg-black transition">
            Book Now
          </button>
        </div>

        {/* STANDARD */}
        <div className="border-2 border-pink-700 rounded-xl shadow-lg p-10 bg-pink-50 hover:shadow-xl transition transform scale-105">
          <h3 className="text-3xl font-bold mb-2">Standard</h3>
          <p className="text-pink-700 text-4xl font-bold mb-4">₹9,999</p>
          <ul className="text-lg text-gray-700 space-y-2">
            <li>✅ 3-Hour Session</li>
            <li>✅ 35 Edited Photos</li>
            <li>✅ Digital + USB Drive</li>
            <li>✅ 1 Outfit Change</li>
            <li>❌ Video</li>
          </ul>
          <button className="mt-6 w-full bg-pink-700 text-white py-2 rounded-full hover:bg-black transition">
            Book Now
          </button>
        </div>

        {/* PREMIUM */}
        <div className="border rounded-xl shadow-md p-8 hover:shadow-xl transition">
          <h3 className="text-3xl font-bold mb-2">Premium</h3>
          <p className="text-pink-700 text-4xl font-bold mb-4">₹19,999</p>
          <ul className="text-lg text-gray-700 space-y-2">
            <li>✅ Full Day Coverage</li>
            <li>✅ 100+ Edited Photos</li>
            <li>✅ Album + Digital</li>
            <li>✅ Multi Locations</li>
            <li>✅ Highlight Video</li>
          </ul>
          <button className="mt-6 w-full bg-pink-700 text-white py-2 rounded-full hover:bg-black transition">
            Book Now
          </button>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Compare Our <span className="text-pink-700">Packages</span></h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full max-w-6xl mx-auto text-center text-lg border-collapse">
            <thead>
              <tr className="bg-pink-700 text-white">
                <th className="border px-4 py-3">Feature</th>
                <th className="border px-4 py-3">Basic</th>
                <th className="border px-4 py-3">Standard</th>
                <th className="border px-4 py-3">Premium</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="border px-4 py-3">Session Time</td>
                <td className="border">1 Hour</td>
                <td className="border">3 Hours</td>
                <td className="border">Full Day</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Edited Photos</td>
                <td className="border">15</td>
                <td className="border">35</td>
                <td className="border">100+</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Outfit Change</td>
                <td className="border">❌</td>
                <td className="border">✅</td>
                <td className="border">✅</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Album</td>
                <td className="border">❌</td>
                <td className="border">❌</td>
                <td className="border">✅</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Locations</td>
                <td className="border">1</td>
                <td className="border">1</td>
                <td className="border">Multiple</td>
              </tr>
              <tr>
                <td className="border px-4 py-3">Video Included</td>
                <td className="border">❌</td>
                <td className="border">❌</td>
                <td className="border">✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Why Clients <span className="text-pink-700">Love Us</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-lg text-gray-700">
          <div><h4 className="text-xl font-semibold mb-2">📸 Creative Storytelling</h4><p>We don’t just shoot — we tell your story through our lens.</p></div>
          <div><h4 className="text-xl font-semibold mb-2">⏱️ Timely Delivery</h4><p>Receive your edited photos within 7-10 days, guaranteed.</p></div>
          <div><h4 className="text-xl font-semibold mb-2">📞 Friendly Support</h4><p>We’re always available via WhatsApp or phone for support.</p></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">What Our <span className="text-pink-700">Clients Say</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
              <p className="italic text-gray-700">“{t.message}”</p>
              <hr className="my-4" />
              <h4 className="font-bold text-lg">{t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Frequently Asked <span className="text-pink-700">Questions</span></h2>
        <div className="space-y-6 text-lg text-gray-700">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h4 className="font-semibold">{faq.question}</h4>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-pink-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Book Your Shoot?</h2>
        <p className="mb-6 text-lg">Let’s turn your moments into magic. Get in touch with Arsh Studio today!</p>
        <button className="bg-white text-pink-700 px-6 py-3 rounded-full text-lg font-semibold hover:bg-black hover:text-white transition">
          Contact Now
        </button>
      </section>
    </div>
  );
}

export default PlansPricing;
