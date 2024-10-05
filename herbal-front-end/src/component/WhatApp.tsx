import { BiGasPump } from "react-icons/bi"; 
import { RiGasStationFill } from "react-icons/ri"; 
import React from 'react';
// import './whatsapp.css';
import { WhatsAppWidget } from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';


const Whatsapp = () => {
  return (     
    
    
      <div className="whatsapp-widget-container" > 
      
      {/* WhatsApp Widget */}
        <WhatsAppWidget 
      // CompanyIcon={react}
        companyName ='Kenzy Naturals.' 
      phoneNumber="7060941707"
      // containerClass="whatsapp-widget-container"      
      sendButtonText = 'chart us'
      inputPlaceHolder = 'say hi!'
      replyTimeText = 'we reply immediately after your message'      
      open = {false}
      style={{marginTop: '2rem'}}
    />
    </div>
    
  )
}

export default Whatsapp