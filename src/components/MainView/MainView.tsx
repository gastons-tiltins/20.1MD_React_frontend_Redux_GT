import React from 'react';
import {Card} from '../Card/Card';
import './MainView.scss';

import {useSelector} from 'react-redux';
import {selectAllAnimals} from '../../features/animals/animalsSlice';

export interface Animals {
    id: string;
    name: string;
    image: string;
    species: string;
}

export const MainView = () => {
    const animals = useSelector(selectAllAnimals);
    return (
        <div className=''>
            <div className='centerButtons'>
                <button className='button is-link is-light'>All</button>
                <button className='button is-link is-light'>Cats</button>
                <button className='button is-link is-light'>Rodent</button>
                <button className='button is-link is-light'>Elephant</button>
                <button className='button is-link is-light'>Insects</button>
            </div>
            <div className='centerGrid'>
                <div className='cardGrid'>
                    {animals.map((animal: Animals) => (
                        <Card
                            key={animal.id}
                            name={animal.name}
                            image={animal.image}
                            species={animal.species}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
