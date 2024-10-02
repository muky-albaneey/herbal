import React, { useState } from 'react';
import './acordion.css';
import { useTranslation } from 'react-i18next';

const CustomCollapse = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ width: '100%', borderRadius: '2rem' }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='inner_acodion'
      >
        <span style={{ marginLeft: '8px' }}>{label}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default function AccodionComponent() {
  const { t } = useTranslation();
  const text1 = t('text1');
  const text2 = t('text2');
  const text3 = t('text3');
  const text4 = t('text4');

  return (
    <div className='acodion_wrapper'>
      <div className="collapse_item">
        <CustomCollapse label={t('collapse1.label')}>
          <p>{text1}</p>
        </CustomCollapse>
      </div>
      <div className="collapse_item">
        <CustomCollapse label={t('collapse2.label')}>
          <p>{text2}</p>
        </CustomCollapse>
      </div>
      <div className="collapse_item">
        <CustomCollapse label={t('collapse3.label')}>
          <p>{text3}</p>
        </CustomCollapse>
      </div>
      <div className="collapse_item">
        <CustomCollapse label={t('collapse4.label')}>
          <p>{text4}</p>
        </CustomCollapse>
      </div>
      {/* <div className="collapse_item">
        <CustomCollapse label={t('collapse.label')}>
          <p>{text}</p>
        </CustomCollapse>
      </div> */}
    </div>
  );
}
