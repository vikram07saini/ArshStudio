import React from 'react';

function Footer() {
  return (
    <div className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Arsh Studio</h2>
          <p className="text-gray-400 text-sm">
            We capture memories with elegance and creativity. Based in Hoshiarpur, Punjab — available for weddings, portraits, and events.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Portfolio</a></li>
            <li><a href="#" className="hover:text-white">Gallery</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" aria-label="Instagram">
              <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="Facebook">
              <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
            <a href="#" aria-label="WhatsApp">
              <img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-6 h-6 hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        © 2025 Arsh Studio. All rights reserved. | Made with ❤️ by Vikii Sainii
      </div>
    </div>
  );
}

export default Footer;
