import { createContext, useContext, useState } from 'react';

const AppContact = createContext();

export const AppProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [isCertificatePageOpen, setIsCertificatePageOpen] = useState(false);

  const handleClickLink = (htmlID) => {
    setActiveLink(htmlID);
  };

  const closeMenu = () => setIsMenuOpen(false);
  const openMenu = () => setIsMenuOpen(true);

  const closeCertificatePage = () => setIsCertificatePageOpen(false);
  const openCertificatePage = () => setIsCertificatePageOpen(true);

  return (
    <AppContact.Provider
      value={{
        activeLink,
        handleClickLink,
        closeMenu,
        openMenu,
        isMenuOpen,
        language,
        setLanguage,
        closeCertificatePage,
        openCertificatePage,
        isCertificatePageOpen,
      }}
    >
      {children}
    </AppContact.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContact);
};
