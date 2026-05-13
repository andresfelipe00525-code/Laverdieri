import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Navigation
    nav: {
      stays: 'Stays',
      yachts: 'Yachts',
      concierge: 'Concierge',
      experiences: 'Experiences',
      contact: 'Contact',
    },
    // Hero
    hero: {
      subtitle: 'Caribe Privé Concierge',
      title: 'Luxury Stays & Private Experiences',
      titleHighlight: 'in Colombia',
      description: 'Premium hospitality and exclusive experiences in Cartagena and San Andrés for travelers seeking the extraordinary.',
      cta: 'Plan Your Experience',
    },
    // Stays
    stays: {
      overline: 'Premium Accommodations',
      title: 'Curated Luxury Stays',
      description: 'We don\'t manage properties — we curate hospitality experiences. Each stay is handpicked for impeccable check-in, hotel-grade amenities, and an atmosphere of refined comfort.',
      cta: 'Explore Properties',
    },
    // Yachts
    yachts: {
      overline: 'Private Maritime Experiences',
      title: 'Yachts & Catamarans',
      description: 'Navigate the Caribbean in style aboard our exclusive fleet. From intimate sunset cruises to full-day island adventures, every journey is tailored to your desires.',
      cta: 'View Fleet',
    },
    // Concierge
    concierge: {
      overline: 'Bespoke Services',
      title: 'Personal Concierge',
      description: 'From reservations at the finest restaurants to private transportation and exclusive events — our concierge team transforms every moment into an unforgettable experience.',
      cta: 'Request Service',
    },
    // Experiences
    experiences: {
      overline: 'Exclusive Activities',
      title: 'Extraordinary Experiences',
      description: 'Discover a world of curated activities designed for the discerning traveler.',
      items: {
        golf: 'Golf',
        tennis: 'Tennis',
        paddle: 'Paddle',
        waterSports: 'Water Sports',
        scuba: 'Scuba Diving',
      },
    },
    // Contact
    contact: {
      overline: 'Get in Touch',
      title: 'Plan Your Experience',
      description: 'Let us craft your perfect Colombian escape. Our team is ready to design an experience tailored exclusively for you.',
      form: {
        name: 'Your Name',
        email: 'Email Address',
        phone: 'Phone Number',
        message: 'Tell us about your ideal experience',
        submit: 'Send Message',
        success: 'Thank you! We\'ll contact you soon.',
      },
      whatsapp: 'Contact via WhatsApp',
    },
    // Footer
    footer: {
      tagline: 'Luxury stays & private experiences in Colombia',
      copyright: '© 2025 Caribe Privé Concierge. All rights reserved.',
      locations: 'Cartagena · San Andrés',
    },
  },
  es: {
    // Navegación
    nav: {
      stays: 'Estancias',
      yachts: 'Yates',
      concierge: 'Concierge',
      experiences: 'Experiencias',
      contact: 'Contacto',
    },
    // Hero
    hero: {
      subtitle: 'Caribe Privé Concierge',
      title: 'Estancias de Lujo & Experiencias Privadas',
      titleHighlight: 'en Colombia',
      description: 'Hospitalidad premium y experiencias exclusivas en Cartagena y San Andrés para viajeros que buscan lo extraordinario.',
      cta: 'Planifica Tu Experiencia',
    },
    // Estancias
    stays: {
      overline: 'Alojamientos Premium',
      title: 'Estancias de Lujo Curadas',
      description: 'No gestionamos propiedades — curamos experiencias de hospitalidad. Cada estancia está seleccionada por su check-in impecable, amenidades de hotel y una atmósfera de confort refinado.',
      cta: 'Explorar Propiedades',
    },
    // Yates
    yachts: {
      overline: 'Experiencias Marítimas Privadas',
      title: 'Yates & Catamaranes',
      description: 'Navega el Caribe con estilo a bordo de nuestra flota exclusiva. Desde cruceros íntimos al atardecer hasta aventuras de día completo por las islas, cada viaje está diseñado a tu medida.',
      cta: 'Ver Flota',
    },
    // Concierge
    concierge: {
      overline: 'Servicios a Medida',
      title: 'Concierge Personal',
      description: 'Desde reservas en los mejores restaurantes hasta transporte privado y eventos exclusivos — nuestro equipo de concierge transforma cada momento en una experiencia inolvidable.',
      cta: 'Solicitar Servicio',
    },
    // Experiencias
    experiences: {
      overline: 'Actividades Exclusivas',
      title: 'Experiencias Extraordinarias',
      description: 'Descubre un mundo de actividades curadas diseñadas para el viajero exigente.',
      items: {
        golf: 'Golf',
        tennis: 'Tenis',
        paddle: 'Paddle',
        waterSports: 'Deportes Acuáticos',
        scuba: 'Buceo',
      },
    },
    // Contacto
    contact: {
      overline: 'Contáctanos',
      title: 'Planifica Tu Experiencia',
      description: 'Permítenos diseñar tu escape colombiano perfecto. Nuestro equipo está listo para crear una experiencia hecha exclusivamente para ti.',
      form: {
        name: 'Tu Nombre',
        email: 'Correo Electrónico',
        phone: 'Número de Teléfono',
        message: 'Cuéntanos sobre tu experiencia ideal',
        submit: 'Enviar Mensaje',
        success: '¡Gracias! Te contactaremos pronto.',
      },
      whatsapp: 'Contactar por WhatsApp',
    },
    // Footer
    footer: {
      tagline: 'Estancias de lujo y experiencias privadas en Colombia',
      copyright: '© 2025 Caribe Privé Concierge. Todos los derechos reservados.',
      locations: 'Cartagena · San Andrés',
    },
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
