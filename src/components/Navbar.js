import { BiMenu, BiSun } from 'react-icons/bi';
import { HiCode } from 'react-icons/hi';

import { useEffect, useState } from 'react';

import MobileMenu from './MobileMenu';
import Backdrop from './Backdrop';

const Navbar = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        document.body.classList.add('dark');
    }, []);

    const openMenuMobileHandler = () => {
        setMobileMenuOpen(prevState => !prevState);
    }

    return (
        <div className='navbar'>

                <div className='navbar__content container'>

                    <span><HiCode /></span>

                    <div className="navbar__content__icons">

                        <ul className="navbar__content__links-list">
                            <li>Sobre mi</li>
                            <li>Habilidades</li>
                            <li>Proyectos</li>
                            <li>Contacto</li>
                        </ul>

                        <div className="navbar__content__icon theme__toggle">
                            <BiSun />
                        </div>

                        <div className="navbar__content__icon menu__button" onClick={openMenuMobileHandler}>
                            <BiMenu />
                        </div>

                    </div>

                    {mobileMenuOpen && <Backdrop onClose={openMenuMobileHandler}><MobileMenu opened={mobileMenuOpen}/></Backdrop> }
                </div>
            </div>
    );
}

export default Navbar;