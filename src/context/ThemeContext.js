import { createContext } from 'react';

const ThemeContext = createContext({
    theme: '',
    themeChangeHandler: () => {}
});

export default ThemeContext;