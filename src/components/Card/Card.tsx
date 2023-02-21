import {useSelector} from 'react-redux';
import {selectAllAnimals} from '../../app/animalsSlice';
import './Card.scss';
import {nanoid} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

export interface Animal {
    id: string;
    name: string;
    image: string;
    species: string;
    onDelete: () => void;
}
export const Card = ({id, name, image, species, onDelete}: Animal) => {
    return (
        <div className='card gridStretch'>
            <div className='card-image'>
                <figure className='image is-4by3'>
                    <img src={image} alt={name} />
                </figure>
            </div>
            <div className='card-content'>
                <div className='content has-text-centered'>
                    <p className='title is-5 has-text-centered'>{name}</p>
                </div>
                <div className='content has-text-centered'>
                    <p>{species}</p>
                </div>
                <div>
                    <button className='button is-link' onClick={onDelete}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};
