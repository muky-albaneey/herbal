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
  const text = t('text');

  return (
    <div className='acodion_wrapper'>
      <div className="collapse_item">
        <CustomCollapse label={t('collapse.label')}>
          <p>{text}</p>
        </CustomCollapse>
      </div>
      <div className="collapse_item">
        <CustomCollapse label={t('collapse.label')}>
          <p>{text}</p>
        </CustomCollapse>
      </div>
      <div className="collapse_item">
        <CustomCollapse label={t('collapse.label')}>
          <p>{text}</p>
        </CustomCollapse>
      </div>
      <div className="collapse_item">
        <CustomCollapse label={t('collapse.label')}>
          <p>{text}</p>
        </CustomCollapse>
      </div>
      <div className="collapse_item">
        <CustomCollapse label={t('collapse.label')}>
          <p>{text}</p>
        </CustomCollapse>
      </div>
    </div>
  );
}
