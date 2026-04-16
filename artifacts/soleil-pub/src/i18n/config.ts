import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import frTranslations from './locales/fr.json';
import arTranslations from './locales/ar.json';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: frTranslations },
      ar: { translation: arTranslations }
    },
    lng: localStorage.getItem('i18nextLng') || 'fr',
    fallbackLng: 'fr',
    ns: ['translation'],
    defaultNS: 'translation',
    interpolation: {
      escapeValue: false
    }
  });

// Update document direction on language change
i18next.on('languageChanged', (lng) => {
  const dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dir = dir;
  document.documentElement.lang = lng;
  // Update Tailwind direction class
  document.documentElement.classList.toggle('rtl', lng === 'ar');
  document.documentElement.classList.remove('ltr');
  document.documentElement.classList.add(dir);
});

export default i18next;
