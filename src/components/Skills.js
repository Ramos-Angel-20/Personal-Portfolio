import { RiLayout5Fill } from 'react-icons/ri';
import { FaServer, FaDatabase } from 'react-icons/fa';

const Skills = () => {
    return (
        <div className='skills container'>
            <h2 className='skills__title'>Habilidades</h2>

            <div className='skills__card-container'>
                <div className='skills__card-container__card'>

                    <div className='skills__card-container__card__image-field'>
                        <RiLayout5Fill className='skill__icon' />
                    </div>

                    <h2>Programación FrontEnd</h2>
                    <p>En el lado del Frontend tengo conocimientos en las tecnologías fundamentales como Html, Css y Sass con la metodología BEM, Javascript y un poco de Typescript (Types, interfaces, etc), además manejo librerías como React para la creación de interfaces de usuario o Axios para realizar llamadas a APIs.</p>    
                </div>


                <div className='skills__card-container__card'>

                    <div className='skills__card-container__card__image-field'>
                        <FaServer className='skill__icon' />
                    </div>

                    <h2>Programación BackEnd</h2>
                    <p>En Backend he realizado un par de APIs REST con Node.js y el framework Express usando el patrón modelo vista controlador (MVC) para los cuates, implementando un sistema de autenticación basado en Json Web Tokens (JWT) y con consultas a base de datos mediante el ORM sequelize. <br/>Además estoy tomando un curso de Python con el framework Django.</p>
                </div>


                <div className='skills__card-container__card'>

                    <div className='skills__card-container__card__image-field'>
                        <FaDatabase className='skill__icon' />
                    </div>

                    <h2>Diseño y normalización de bases de datos</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In maxime unde facilis, quo voluptate ducimus possimus delectus aliquid commodi distinctio, repudiandae fuga doloremque error aut aperiam eligendi fugiat voluptatum blanditiis.</p>
                </div>

            </div>
        </div>
    );
}

export default Skills;