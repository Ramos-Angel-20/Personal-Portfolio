import { useRef, useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';

//token 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

const App = () => {

  const [navbarClasses, setNavbarClasses] = useState('');
  const mainRef = useRef(null);


  useEffect(() => {
    const handleScroll = () => {
      const { y } = mainRef.current.getBoundingClientRect();

      if (y <= 50) {
        setNavbarClasses('scrolled');
      }
      else {
        setNavbarClasses('');
      }

    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);



  return (
    <>
      <Navbar classes={navbarClasses} />
      <main ref={mainRef}>
        <Header />
        <About />
        <Skills />
      </main>
      <Footer />
    </>
  );
}

export default App;
 