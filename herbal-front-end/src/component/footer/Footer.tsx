import { FaTiktok } from "react-icons/fa"; 
import React from 'react';
import './footer.css';
import { BsFillTelephoneFill, BsWhatsapp, BsInstagram } from "react-icons/bs"; 
import { AiOutlineMail, AiFillFacebook } from "react-icons/ai"; 
import { ImLocation } from "react-icons/im"; 
import logo from '../../assets/logo.png';

export default function FooterComponent() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <section className="flex items-center">
              <img src={logo} className="h-8 me-3" alt="Kenzy Naturals Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">KENZY NATURALS</span>
            </section>
            <div className="foo_items mt-4">
              <h1 className="text-lg font-bold">Contact Us</h1>
              <div className="foo_icon flex items-center mt-2">
                <ImLocation className="text-lg" />
                <span className="ml-2">165 Main Street, Kenzy Naturals</span>
              </div>
              <div className="foo_icon flex items-center mt-2">
                <AiOutlineMail className="text-lg" />
                <span className="ml-2">info@kenzynaturals.com</span>
              </div>
              <div className="foo_icon flex items-center mt-2">
                <BsFillTelephoneFill className="text-lg" />
                <span className="ml-2">+234 9075643219</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Resources</h2>
              <ul className="text-gray-200 font-medium">
                <li className="mb-4">
                  <a href="" className="hover:underline">Kenzy herbal</a>
                </li>
                {/* <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                </li> */}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Follow us</h2>
              <ul className="text-gray-200 font-medium">
                <li className="mb-4">
                  <a href="https://www.tiktok.com/@kenzynaturals/" className="hover:underline">Tiktok</a>
                </li>
                <li>
                  <a href="https://www.facebook.com/profile.php?id=61555739194210&mibextid=kFxxJD" className="hover:underline">Facebook</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase">Legal</h2>
              <ul className="text-gray-200 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Search Input */}
        <div className="mt-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-200 sm:text-center">© 2024 Kenzy Naturals. All Rights Reserved powered by nava tech.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="https://www.facebook.com/profile.php?id=61555739194210&mibextid=kFxxJD" className="text-gray-200 hover:text-white">
              <AiFillFacebook className="w-5 h-5" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="https://www.instagram.com/kenzynaturals/" className="text-gray-200 hover:text-white ms-5">
              <BsInstagram className="w-5 h-5" />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="https://www.tiktok.com/@kenzynaturals/" className="text-gray-200 hover:text-white ms-5">
              {/* <BsWhatsapp className="w-5 h-5" /> */}
              <FaTiktok className="w-5 h-5"/>
              <span className="sr-only">Tiktok</span>
            </a>

          </div>
        </div>
      </div>
    </footer>


  );
}
