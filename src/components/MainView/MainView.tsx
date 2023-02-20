import React from 'react';
import {Card} from '../Card/Card';
import './MainView.scss';
import {nanoid} from '@reduxjs/toolkit';
import {useState} from 'react';

import {useSelector} from 'react-redux';
import {selectAllAnimals} from '../AddForm/animalsSlice';
import {selectAllSpecies} from '../AddForm/speciesSlice';
import {useDispatch} from 'react-redux';

export interface Animals {
    id: string;
    name: string;
    image: string;
    species: string;
}

export const MainView = () => {
    const animals = useSelector(selectAllAnimals);
    const speciesList = useSelector(selectAllSpecies);
    const [printData, setPrintData] = useState(animals);
    const dispatch = useDispatch();

    // dispatch(selectAllAnimals(storedAnimals ? JSON.parse(storedAnimals) : []));

    const printAllAnimals = () => {
        setPrintData(animals);
    };

    const printSelectedAnimals = (specie: any) => {
        const printSpecie: any = [];
        animals.map((animal: Animals) => {
            if (animal.species === specie) {
                printSpecie.push(animal);
            }
        });

        console.log(specie);
        console.log(printSpecie);

        setPrintData(printSpecie);
    };

    const PrintAllCards = ({inputData}: any) => {
        return (
            <>
                {/* <p>{JSON.stringify(inputData)}</p> */}
                <div className='cardGrid'>
                    {inputData.map((animal: Animals) => (
                        <Card
                            key={animal.id}
                            id={animal.id}
                            name={animal.name}
                            image={animal.image}
                            species={animal.species}
                        />
                    ))}
                </div>
            </>
        );
    };

    return (
        <div className=''>
            {/* <p>{JSON.stringify(speciesList)}</p> */}
            <div className='centerButtons'>
                <button
                    onClick={printAllAnimals}
                    className='button is-link is-light'
                >
                    All
                </button>
                {speciesList.map((specie: any) => (
                    <button
                        onClick={() => printSelectedAnimals(specie)}
                        className='button is-link is-light'
                        key={nanoid()}
                    >
                        {specie}
                    </button>
                ))}
            </div>
            <div className='centerGrid'>
                <PrintAllCards inputData={printData} />
            </div>
        </div>
    );
};
