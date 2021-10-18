import { BiMenu, BiSun, BiMoon } from 'react-icons/bi';
import { HiCode } from 'react-icons/hi';

import { useState, useContext } from 'react';

import MobileMenu from './MobileMenu';
import Backdrop from './Backdrop';
import ThemeContext from '../context/ThemeContext';


const Navbar = (props) => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const themeCtx = useContext(ThemeContext);

    const openMenuMobileHandler = () => {
        setMobileMenuOpen(prevState => !prevState);
    }

    return (
        <div className={`navbar ${props.classes}`}>

                <div className='navbar__content container'>

                    <span><HiCode /></span>

                    <div className="navbar__content__icons">

                        <ul className="navbar__content__links-list">
                            <li>Sobre mi</li>
                            <li>Habilidades</li>
                            <li>Proyectos</li>
                            <li>Contacto</li>
                        </ul>

                        <div className="navbar__content__icon theme-toggle" onClick={() => themeCtx.themeChangeHandler()}>
                            {themeCtx.theme === 'dark' ? <BiSun /> : <BiMoon/>}
                        </div>

                        <div className="navbar__content__icon menu-button" onClick={openMenuMobileHandler}>
                            <BiMenu />
                        </div>

                    </div>

                    {mobileMenuOpen && <Backdrop onClose={openMenuMobileHandler}></Backdrop> }
                    <MobileMenu opened={mobileMenuOpen}/>
                </div>
            </div>
    );
}

export default Navbar;