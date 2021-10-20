import { useState, useEffect } from 'react';

import ThemeContext from './ThemeContext';

const ThemeProvider = ({ children }) => {
    
    const [theme, setTheme] = useState('');    

    useEffect(() => {
        
        const fetchedTheme = localStorage.getItem('portfolio-theme');

        if (!fetchedTheme || fetchedTheme === 'light') {
            setTheme('light');
            document.body.classList.remove('dark');
            localStorage.setItem('portfolio-theme', "light");
        } else {
            setTheme('dark');
            document.body.classList.add('dark');
            localStorage.setItem('portfolio-theme', "dark");
            
        }

    }, [theme]); 
    
    const themeChangeHandler = () => {

        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('portfolio-theme', "dark");
        }

        if (theme === 'dark') {
            setTheme('light');
            localStorage.setItem('portfolio-theme', "light");
        }
    }

    const context = {
        theme, 
        themeChangeHandler
    };
    
    return (
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;