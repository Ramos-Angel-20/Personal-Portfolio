import { RiLayout5Fill } from 'react-icons/ri';
import { FaServer, FaDatabase } from 'react-icons/fa';

const Skills = () => {
    return (
        <div className='skills container'>
            <h1>Habilidades</h1>

            <div className='skills__card-container'>
                <div className='skills__card-container__card'>

                    <div className='skills__card-container__card__image-field'>
                        <RiLayout5Fill className='skill__icon' />
                    </div>

                    <h2>Programación FrontEnd</h2>
                </div>


                <div className='skills__card-container__card'>

                    <div className='skills__card-container__card__image-field'>
                        <FaServer className='skill__icon' />
                    </div>

                    <h2>Programación BackEnd</h2>
                </div>


                <div className='skills__card-container__card'>

                    <div className='skills__card-container__card__image-field'>
                        <FaDatabase className='skill__icon' />
                    </div>

                    <h2>Diseño y normalización de bases de datos</h2>
                </div>

            </div>
        </div>
    );
}

export default Skills;