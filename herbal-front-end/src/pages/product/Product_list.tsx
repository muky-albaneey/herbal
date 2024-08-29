import React from 'react';
// import { useTranslation } from 'react-i18next';
import { Trans, useTranslation } from 'react-i18next'

export default function ListComponent() {
  const {t} = useTranslation();

  return (
    <div className=''>
      <Trans i18nKey="message">Welcome to React and react-i18next</Trans>;
        
        {/* {t('message')} */}
    </div>
  );
}
