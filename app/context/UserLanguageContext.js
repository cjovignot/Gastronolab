import React, { createContext, useContext, useState, useEffect } from 'react';

const UserLanguageContext = createContext();

export const useUserLanguage = () => useContext(UserLanguageContext);

export const UserLanguageProvider = ({ children }) => {
  const [userLanguage, setUserLanguage] = useState('');

  // Update localStorage when userLanguage changes
  useEffect(() => {
    localStorage.setItem('userLanguage', navigator.language);
    setUserLanguage(localStorage.getItem("userLanguage"))
  }, []);

  return (
    <UserLanguageContext.Provider value={userLanguage}>
      {children}
    </UserLanguageContext.Provider>
  );
};