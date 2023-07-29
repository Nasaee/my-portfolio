import { createContext, useContext, useState, useEffect } from 'react';

const AppContact = createContext();

export const AppProvider = ({ children }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // set Hero margin top = nav width
  // useEffect(() => {
  //   const navHeight = document.querySelector('nav').offsetHeight;
  //   document
  //     .querySelector('.hero')
  //     .style.setProperty('--nav-height', `${navHeight}px`);
  // }, []);

  const handleClickLink = (htmlID) => {
    setActiveLink(htmlID);
  };

  const closeMenu = () => setIsMenuOpen(false);
  const openMenu = () => setIsMenuOpen(true);

  return (
    <AppContact.Provider
      value={{
        scrolled,
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
