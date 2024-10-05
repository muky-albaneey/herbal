import { BiGasPump } from "react-icons/bi"; 
import { RiGasStationFill } from "react-icons/ri"; 
import React from 'react';
// import './whatsapp.css';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';
// import logo from '../assets/logo.png';

const Whatsapp = () => {
  return (     
    
    
    <div className="whatsapp-widget-container"> 
    <WhatsAppWidget 
    //   CompanyIcon={logo}
      companyName='Kenzy Naturals'
      phoneNumber="7060941707"
      sendButtonText='Chat us'
      inputPlaceHolder='Say hi!'
      replyTimeText='We reply immediately after your message'      
      open={false}
      style={{ marginTop: '2rem' }}
    />
  </div>
    
  )
}

export default Whatsapp