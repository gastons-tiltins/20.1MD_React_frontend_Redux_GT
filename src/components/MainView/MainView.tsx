import {useNavigate} from 'react-router-dom';
import React from 'react';
import {Card} from '../Card/Card';
import './MainView.scss';
import {nanoid} from '@reduxjs/toolkit';
import {useState} from 'react';
import {useEffect} from 'react';

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
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [allAnimals, setAllAnimals] = useState([]);

    const animals = useSelector(selectAllAnimals);
    const speciesList = useSelector(selectAllSpecies);

    //first data get
    // useEffect(() => {
    //     const storedAnimals = localStorage.getItem('animals');
    //     // dispatch(setLoading(true));
    //     dispatch(
    //         setAllAnimals(storedAnimals ? JSON.parse(storedAnimals) : []),
    //     );
    //     // dispatch(setLoading(false));
    // }, []);

    // const [animalState, setAnimalState] = useState([]);

    // useEffect(() => {
    //     const animalsFromLocalStorage =
    //         JSON.parse(localStorage.getItem('allAnimals') as any) || '[]';
    //     if (animals) {
    //         setAnimalState(animals);
    //     }
    // }, []);

    // const animals = animalsFromLocalStorage;

    const [printData, setPrintData] = useState(animals);

    // useEffect(() => {
    //     localStorage.setItem('allAnimals', JSON.stringify(animals));
    // }, [animals]);

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

        // console.log(specie);
        // console.log(printSpecie);

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

    const handleAddAnimals = (e: any) => {
        navigate('/add');
    };

    return (
        <div className=''>
            {/* <p>{JSON.stringify(speciesList)}</p> */}
            {/* <p>{JSON.stringify(animals)}</p> */}

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
                {printData.length > 0 ? (
                    <PrintAllCards inputData={printData} />
                ) : (
                    <div className='flexCenterColumn control'>
                        <div>
                            <h1>No animals added yet</h1>
                        </div>
                        <div>
                            <button
                                className='button is-link'
                                onClick={handleAddAnimals}
                            >
                                Add animal
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
