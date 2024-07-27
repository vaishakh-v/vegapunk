import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black px-4 py-8 text-white">
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-8 flex flex-col items-center justify-center md:flex-row md:justify-between">
          {/* Footer Links */}
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
            <a href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="hover:underline">
              Terms of Service
            </a>
            <a href="/support" className="hover:underline">
              Support
            </a>
          </div>

          {/* Social Media Links */}
          <div className="mt-4 flex gap-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaFacebook size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Shortcut Links */}
        <div className="mt-8 text-center text-sm">
          <p className="mb-2 font-semibold">Quick Links:</p>
          <div className="flex flex-col items-center gap-2 md:flex-row md:justify-center">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/about" className="hover:underline">
              About
            </a>
            <a href="/services" className="hover:underline">
              Services
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
