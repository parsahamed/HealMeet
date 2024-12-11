import React from 'react';
import { useTranslation } from "react-i18next";
import './localizationToggle.css'

export const LocalizationToggle: React.FC = () => {
  const { i18n: { changeLanguage, language } } = useTranslation();

  const toggleLocalization = () => {
    const newLang = language === 'en' ? 'fa' : 'en';
    changeLanguage(newLang);
  };

  return (
    <div onClick={toggleLocalization} className={`toggle-locale toggle-locale-${language}`}>
      {(language === 'en' ? 'fa' : 'en').toUpperCase()}
    </div>
  );
};

export default LocalizationToggle;