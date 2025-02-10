import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Check if the required translation files exist
const resources = {
    en: { translation: require("./locales/en.json") },
    es: { translation: require("./locales/es.json") },
    fr: { translation: require("./locales/fr.json") },
    de: { translation: require("./locales/de.json") },
    scandinavian: { translation: require("./locales/scandinavian.json") }
};

i18n
    .use(initReactI18next)
    .init({
        resources: resources,
        lng: "en", // default language
        fallbackLng: "en", // use English if language is not available
        interpolation: {
            escapeValue: false, // React already does escaping
        },
        // Optionally, check if the language files are loaded dynamically
        load: 'languageOnly', // Only load the language file, not the entire country code
    })
    .then(() => {
        console.log("i18n initialized with language:", i18n.language);
    })
    .catch(err => {
        console.error("i18n initialization failed", err);
    });

export default i18n;