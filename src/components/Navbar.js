import { BiMenu, BiSun, BiMoon } from 'react-icons/bi';
import { HiCode } from 'react-icons/hi';

import { useState, useContext, useRef } from 'react';

import MobileMenu from './MobileMenu';
import Backdrop from './Backdrop';
import ThemeContext from '../context/ThemeContext';
import toggleAnimationHandler from '../helpers/AnimationHandler';

//TODO: Agregar animación pop-up al botón theme.

const Navbar = (props) => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const themeCtx = useContext(ThemeContext);

    const menuButtonRef = useRef(null);
    const themeButtonRef = useRef(null);

    const sectionScrollHandler = sectionRef => {
        sectionRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }


    const openMenuMobileHandler = () => {
        setMobileMenuOpen(prevState => !prevState);
    }

    const toggleAnimationHandler = (ref, callback) => {

        /*
            recibimos como parámetro un ref y una función callback,
            este ref nos sirve para agregar la animación al botón
            menú o theme a traves de una clase de css, misma que 
            sera removida con la ayuda de un setTimeout con el 
            mismo tiempo que la duración de la animación, de esta 
            forma en lo que termina la animación se retira del ref 
            la clase que la activa. 
        */

        ref.current.classList.add('toggled');
        callback();

        setTimeout(() => {
            ref.current.classList.remove('toggled');
        }, 200);
    }




    return (
        <div className={`navbar ${props.classes}`}>

            <div className='navbar__content container'>

                <span><HiCode /></span>

                <div className="navbar__content__icons">

                    <ul className="navbar__content__links-list">
                        <li onClick={() => sectionScrollHandler(props.aboutRef)} >Sobre mi</li>
                        <li onClick={() => sectionScrollHandler(props.skillsRef)} >Habilidades</li>
                        <li>Proyectos</li>
                        <li>Contacto</li>
                    </ul>

                    <div className="navbar__content__icon lang-toggle">
                        <p>Es</p>
                    </div>

                    <div
                        className="navbar__content__icon theme-toggle"
                        ref={themeButtonRef}
                        onClick={() => toggleAnimationHandler(themeButtonRef, themeCtx.themeChangeHandler)}
                    >
                        {themeCtx.theme === 'dark' ? <BiSun /> : <BiMoon />}
                    </div>


                    <div
                        className="navbar__content__icon menu-button"
                        ref={menuButtonRef}
                        onClick={() => toggleAnimationHandler(menuButtonRef, openMenuMobileHandler)}
                    >
                        <BiMenu />
                    </div>

                </div>

                {mobileMenuOpen && <Backdrop onClose={openMenuMobileHandler}></Backdrop>}
                <MobileMenu opened={mobileMenuOpen} onScroll={sectionScrollHandler} aboutRef={props.aboutRef} skillsRef={props.skillsRef}/>
            </div>
        </div>
    );
}

export default Navbar;