// import React from 'react';
// import './footer.css'
// import { BsFillTelephoneFill } from "react-icons/bs"; 
// import { AiOutlineMail } from "react-icons/ai"; 
// import { ImLocation } from "react-icons/im"; 
// import { BsWhatsapp } from "react-icons/bs"; 
// import { BsInstagram } from "react-icons/bs"; 
// import { FiX } from "react-icons/fi"; 
// import { AiFillFacebook } from "react-icons/ai"; 

// export default function FooterComponent() {
//   return (
//     <>
    
//     <footer className="home_footer">
//             <div className="foo_items" style={{ textAlign:'left' }}>
//                 <h1>
//                 KENZY  NATURALS
//                 </h1>
//                 <div className="foo_icon">
//                     <ImLocation />
//                     <span>
//                          165 Main Street kenzy naturals
//                     </span>
                  
//                 </div>
//                 <div className="foo_icon">
//                 <AiOutlineMail />
//                      <span>
//                         Info@kenzy natural
//                     </span>
//                 </div>
//                 <div className="foo_icon">
//                     <BsFillTelephoneFill />
//                     <span>
//                          +234 9075643219
//                     </span>
//                 </div>
//             </div>
//             <div className="foo_items">
//                 <h6>links</h6>
//                 <p>Home</p>
//                 <p>About Us </p>
//                 <p>Services</p>
//                 <p>Contant US</p>
//             </div>
//             <div className="foo_items">
//                 <h4>
//                      Follow us on
//                 </h4>
//                 <div className="foo_social_icons">
//                         <AiFillFacebook />
//                         <FiX /><BsInstagram /><BsWhatsapp />

//                 </div>
//             </div>
//         </footer>
//     </>
//   );
// }
import React from 'react';
import './footer.css';

export default function FooterComponent() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://kenzynaturals.com" className="flex items-center">
              <img src="/path-to-logo.svg" className="h-8 me-3" alt="Kenzy Naturals Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Kenzy Naturals</span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/" className="hover:underline">Home</a>
                </li>
                <li>
                  <a href="/services" className="hover:underline">Services</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://facebook.com/kenzynaturals" className="hover:underline">Facebook</a>
                </li>
                <li>
                  <a href="https://instagram.com/kenzynaturals" className="hover:underline">Instagram</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms-conditions" className="hover:underline">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://kenzynaturals.com" className="hover:underline">Kenzy Naturals™</a>. All Rights Reserved.</span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a href="https://facebook.com/kenzynaturals" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <span className="sr-only">Facebook page</span>
              {/* Replace with Facebook SVG Icon */}
            </a>
            <a href="https://instagram.com/kenzynaturals" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <span className="sr-only">Instagram page</span>
              {/* Replace with Instagram SVG Icon */}
            </a>
            <a href="https://twitter.com/kenzynaturals" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
              <span className="sr-only">Twitter page</span>
              {/* Replace with Twitter SVG Icon */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
