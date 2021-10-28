import { createPortal } from 'react-dom';

import { FaTimes } from 'react-icons/fa';

const MobileMenuOverlay = (props) => {
    const openedClasses = props.opened ? '' : 'closed-menu';


    return (
        <div className={`mobile-menu ${openedClasses}`}>
            {/* <div className='mobile-menu'>
                <FaTimes/>
            </div> */}
            <ul>
                <li onClick={() => props.onScroll(props.aboutRef)}>Sobre mi</li>
                <li onClick={() => props.onScroll(props.skillsRef)}>Habilidades</li>
                <li>Proyectos</li>
                <li>Contacto</li>
            </ul>
        </div>
    );
}

const MobileMenu = (props) => createPortal(
    <MobileMenuOverlay 
        opened={props.opened} 
        aboutRef={props.aboutRef} 
        skillsRef={props.skillsRef} 
        onScroll={props.onScroll}
    />, document.getElementById('overlays-root')
);

export default MobileMenu;