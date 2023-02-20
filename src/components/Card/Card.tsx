import {useSelector} from 'react-redux';
import {selectAllAnimals} from '../AddForm/animalsSlice';
import './Card.scss';
import {nanoid} from '@reduxjs/toolkit';
import {animalAdded} from '../AddForm/animalsSlice';
import {useDispatch} from 'react-redux';

export interface Animals {
    id: string;
    name: string;
    image: string;
    species: string;
}
export const Card = ({id, name, image, species}: Animals) => {
    const dispatch = useDispatch();
    const {animals} = useSelector(selectAllAnimals);

    const handleDelete = (id: any) => {
        if (id) {
            console.log(id);
            //TODO: delete animal
        }
    };

    return (
        <div className='card gridStretch'>
            <div className='card-image'>
                <figure className='image is-4by3'>
                    <img src={image} alt={name} />
                </figure>
            </div>
            <div className='card-content'>
                <div className='media'>
                    <div className='media-content'>
                        <p className='title is-5 has-text-centered'>{name}</p>
                    </div>
                </div>
                <div className='content has-text-centered'>
                    <p>{species}</p>
                </div>
                {/* <div>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                </div> */}
            </div>
        </div>
    );
};
