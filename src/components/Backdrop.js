import { createPortal } from 'react-dom';

//TODO: crear el portal

const BackdropOverlay = props => {
    return (
        <div className='backdrop' onClick={props.onClose}>
            {props.children}
        </div>
    );
}


const Backdrop = props => {
    return createPortal(<BackdropOverlay onClose={props.onClose}>{props.children}</BackdropOverlay>, document.getElementById('backdrop-root'));
} 


export default Backdrop;