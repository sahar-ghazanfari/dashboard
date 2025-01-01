import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");

  const changeLanguage = (lang) => {
    setLocale(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("locale", lang);
    }
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);