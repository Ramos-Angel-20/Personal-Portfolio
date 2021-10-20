import { useRef, useEffect, useState } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

//token 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

const App = () => {

  const [navbarClasses, setNavbarClasses] = useState('');
  const mainRef = useRef(null);


  // const options = {
  //   rootMargin: "-170px 0px 0px 0px"
  // };

  // const mainElementCallback = entries => {
  //   entries.forEach(entry => {
  //     if (entry.isIntersecting) {
  //       setNavbarClasses('');

  //     }

  //     if (!entry.isIntersecting) {
  //       setNavbarClasses('scrolled');

  //     }
  //   });
  // }

  // useEffect(() => {
  //   console.log(mainRef.current)
  //   const mainObserver = new IntersectionObserver(mainElementCallback, options);
  //   mainObserver.observe(mainRef.current);
  // }, [mainRef, options]);

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
      </main>
      <Footer />
    </>
  );
}

export default App;
