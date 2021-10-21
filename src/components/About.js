import { FaFileDownload } from 'react-icons/fa';

import devSvg from '../assets/dev.svg';


const About = () => {
    return (
        <div className='about container'>

            <div className='about__img'>
                <img src={devSvg} alt='Sobre Mi'></img>
            </div>

            {/* <div className='about__action'>
                <button className='about__action--cv-button'>Descarga mi CV</button>
            </div> */}

            <div className='about__subgrid'>
                <div className='about__content'>

                    <h1>Sobre Mi</h1>

                    <p>
                        Soy un estudiante del Instituto Tecnológico de Tijuana (ITT) de la carrera de ingeniería
                        informática, actualmente curso el octavo semestre. <br />
                        Estoy en busca de mi primer trabajo o de la liberación de mi servicio social y
                        mis practicas profesionales en alguna empresa que este desarrollando un producto o servicio
                        de software. <br />
                        Mi inteción es formarme como programador web ya que todo ese mundo me parece apasionante, desde
                        el frontend hasta el backend, por tal motivo ofrezco mi tiempo y mis habilidades para
                        desarrollo de software.
                    </p>
                </div>
                <div className='about__action'>
                    <button className='about__action--cv-button'>Descarga mi CV <span><FaFileDownload /></span> </button>
                </div>
            </div>
        </div>
    );
}

export default About;