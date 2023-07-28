import { useEffect } from 'react';
import './App.css';
import Hero from './components/hero/Hero';
import NavBar from './components/navBar/Navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: 'mobile',
    });
  }, []);

  return (
    <main>
      <NavBar />
      <Hero />
    </main>
  );
}

export default App;
