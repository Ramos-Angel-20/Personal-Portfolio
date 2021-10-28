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
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);

  
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
      <Navbar classes={navbarClasses} aboutRef={aboutRef} skillsRef={skillsRef} />
      <main ref={mainRef}>
        <Header />
        
        <div ref={aboutRef}>
          <About />
        </div>
        
        <div ref={skillsRef}>
          <Skills />
        </div>

      </main>
      <Footer />
    </>
  );
}

export default App;
 