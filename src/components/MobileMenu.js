import { createPortal } from 'react-dom';

import { FaTimes } from 'react-icons/fa';

const MobileMenuOverlay = ({ opened }) => {
    const openedClasses = opened ? '' : 'closed-menu';


    return (
        <div className={`mobile-menu ${openedClasses}`}>
            {/* <div className='mobile-menu'>
                <FaTimes/>
            </div> */}
            <ul>
                <li>Sobre mi</li>
                <li>Habilidades</li>
                <li>Proyectos</li>
                <li>Contacto</li>
            </ul>
        </div>
    );
}

const MobileMenu = ({ opened }) => createPortal(<MobileMenuOverlay opened={opened}/>, document.getElementById('overlays-root'));

export default MobileMenu;