import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="footer py-12 md:py-16" data-testid="footer">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-[#F5F5F5] mb-2">Caribe Privé</h3>
            <p className="text-sm text-[#F5F5F5]/60 font-light">{t('footer.tagline')}</p>
          </div>

          {/* Locations */}
          <div className="text-center">
            <p className="text-[#C6A96B] text-sm tracking-widest uppercase">
              {t('footer.locations')}
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-[#F5F5F5]/40 font-light">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
