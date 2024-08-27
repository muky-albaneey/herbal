import React from 'react';
import './footer.css'
import { BsFillTelephoneFill } from "react-icons/bs"; 
import { AiOutlineMail } from "react-icons/ai"; 
import { ImLocation } from "react-icons/im"; 
import { BsWhatsapp } from "react-icons/bs"; 
import { BsInstagram } from "react-icons/bs"; 
import { FiX } from "react-icons/fi"; 
import { AiFillFacebook } from "react-icons/ai"; 

export default function FooterComponent() {
  return (
    <>
    
    <footer className="home_footer">
            <div className="foo_items" style={{ textAlign:'left' }}>
                <h1>
                KENZY  NATURALS
                </h1>
                <div className="foo_icon">
                    <ImLocation />
                    <span>
                         165 Main Street kenzy naturals
                    </span>
                  
                </div>
                <div className="foo_icon">
                <AiOutlineMail />
                     <span>
                        Info@kenzy natural
                    </span>
                </div>
                <div className="foo_icon">
                    <BsFillTelephoneFill />
                    <span>
                         +234 9075643219
                    </span>
                </div>
            </div>
            <div className="foo_items">
                <h6>links</h6>
                <p>Home</p>
                <p>About Us </p>
                <p>Services</p>
                <p>Contant US</p>
            </div>
            <div className="foo_items">
                <h4>
                     Follow us on
                </h4>
                <div className="foo_social_icons">
                        <AiFillFacebook />
                        <FiX /><BsInstagram /><BsWhatsapp />

                </div>
            </div>
        </footer>
    </>
  );
}
