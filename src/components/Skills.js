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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nam hic magni eligendi voluptates ducimus provident impedit eius iure quaerat ipsam cumque, inventore corrupti porro rerum iste possimus atque dolor!</p>
                </div>


                <div className='skills__card-container__card'>

                    <div className='skills__card-container__card__image-field'>
                        <FaServer className='skill__icon' />
                    </div>

                    <h2>Programación BackEnd</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ut vero, at commodi maiores perspiciatis magnam quasi qui magni nostrum aspernatur voluptatum placeat dolorem perferendis inventore dolores, minus quod ipsam.</p>
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