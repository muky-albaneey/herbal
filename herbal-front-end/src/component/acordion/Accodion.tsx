import React, { useState } from 'react';
import './acordion.css'

const CustomCollapse = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ width:'100%', borderRadius:'2rem'}}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='inner_acodion'
        // style={{ borderRadius:'2rem' }}
        // style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent:'space-between', transition:'' }}
      >
      
        <span style={{ marginLeft: '8px' }}>{label}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
export default function AccodionComponent() {
  return (
    <div className='acodion_wrapper'>
     <div className="collapse_item">
      <CustomCollapse label="This is panel header 1">
          <p> {text}</p>
        </CustomCollapse>
     </div>
     <div className="collapse_item">
      <CustomCollapse label="This is panel header 1">
      <p>{text} </p>
        </CustomCollapse>
     </div>
     <div className="collapse_item">
      <CustomCollapse label="This is panel header 1">
      <p>{text} </p>
        </CustomCollapse>
     </div>
     <div className="collapse_item">
      <CustomCollapse label="This is panel header 1">
      <p>{text } </p>
        </CustomCollapse>
     </div>
     <div className="collapse_item">
      <CustomCollapse label="This is panel header 1">
      <p>{text}</p>
        </CustomCollapse>
     </div>
     
    </div>
  );
}
