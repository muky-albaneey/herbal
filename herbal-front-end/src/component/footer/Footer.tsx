import React from 'react';
import './footer.css';
import { BsFillTelephoneFill } from "react-icons/bs"; 
import { AiOutlineMail } from "react-icons/ai"; 
import { ImLocation } from "react-icons/im"; 
import { BsWhatsapp, BsInstagram } from "react-icons/bs"; 
import { AiFillFacebook } from "react-icons/ai"; 
import logo from '../../assets/logo.png';

export default function FooterComponent() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
            <img src={logo} alt="KENZY NATURALS" className="h-12 mb-4" />
            <h2 className="text-2xl font-bold mb-2">KENZY NATURALS</h2>
            <div className="flex items-center mb-2">
              <ImLocation className="mr-2" />
              <span>165 Main Street, Kenzy Naturals</span>
            </div>
            <div className="flex items-center mb-2">
              <AiOutlineMail className="mr-2" />
              <span>info@kenzynaturals.com</span>
            </div>
            <div className="flex items-center">
              <BsFillTelephoneFill className="mr-2" />
              <span>+234 9075643219</span>
            </div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-green-400">Home</a></li>
              <li><a href="/about" className="hover:text-green-400">About Us</a></li>
              <li><a href="/services" className="hover:text-green-400">Services</a></li>
              <li><a href="/contact" className="hover:text-green-400">Contact Us</a></li>
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-green-400" aria-label="Facebook">
                <AiFillFacebook size={24} />
              </a>
              <a href="https://instagram.com" className="hover:text-green-400" aria-label="Instagram">
                <BsInstagram size={24} />
              </a>
              <a href="https://whatsapp.com" className="hover:text-green-400" aria-label="WhatsApp">
                <BsWhatsapp size={24} />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-600" />
        <div className="flex justify-between items-center text-sm">
          <span>© 2024 KENZY NATURALS. All Rights Reserved.</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-green-400">Privacy Policy</a>
            <a href="#" className="hover:text-green-400">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
