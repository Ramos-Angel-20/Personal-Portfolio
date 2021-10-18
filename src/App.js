import { useRef, useEffect, useState } from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';

//token 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

const App = () => {

  const [navbarClasses, setNavbarClasses] = useState('');
  const mainRef = useRef(null);


  const options = {
    rootMargin: "-170px 0px 0px 0px"
  };

  const mainCallback = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setNavbarClasses('');
      }

      if (!entry.isIntersecting) {
        setNavbarClasses('scrolled');
      }
    });
  }

  useEffect(() => {
    const mainObserver = new IntersectionObserver(mainCallback, options);
    mainObserver.observe(mainRef.current);
  }, [mainRef, options]);



  return (
    <>
      <Navbar classes={navbarClasses} />
      <main ref={mainRef}>
        <Header />
      </main>
    </>
  );
}

export default App;
