import { createContext, useContext, useState } from 'react';

const AppContact = createContext();

export const AppProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickLink = (htmlID) => {
    setActiveLink(htmlID);
  };

  const closeMenu = () => setIsMenuOpen(false);
  const openMenu = () => setIsMenuOpen(true);

  return (
    <AppContact.Provider
      value={{
        activeLink,
        handleClickLink,
        closeMenu,
        openMenu,
        isMenuOpen,
      }}
    >
      {children}
    </AppContact.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContact);
};
