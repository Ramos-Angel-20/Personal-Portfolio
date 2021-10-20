import devSvg from '../assets/dev.svg';

const Header = () => {
    return (
        <>
            <header className='container header'>
                <h1>Angel Ramos</h1>
                <p>Estudiante de Ingeniería Informática / Apasionado por la programación.</p>
            </header>
            <img className='dev-img container' src={devSvg} alt='Angel Ramos'></img>
        </>
    );
}

export default Header;