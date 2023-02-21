import {useNavigate} from 'react-router-dom';
import {Card} from '../Card/Card';
import './MainView.scss';
import {nanoid} from '@reduxjs/toolkit';

import {useSelector} from 'react-redux';
import {selectAllAnimals, removeAnimal} from '../../app/animalsSlice';
import {selectAllSpecies} from '../../app/speciesSlice';
import {removeSpecies} from '../../app/speciesSlice';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

export interface Animals {
    id: string;
    name: string;
    image: string;
    species: string;
}

export const MainView = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const animals: any = useSelector(selectAllAnimals);
    const speciesList = useSelector(selectAllSpecies);

    const [printData, setPrintData] = useState(animals);

    const handleAddAnimals = (e: any) => {
        navigate('/add');
    };

    const handleDelete = (id: string, species: string) => {
        dispatch(removeAnimal(id));
        console.log(id);
        console.log(species);
        console.log(speciesList);
        dispatch(removeSpecies(species));
        location.reload();
    };

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
                            onDelete={() =>
                                handleDelete(animal.id, animal.species)
                            }
                        />
                    ))}
                </div>
            </>
        );
    };

    return (
        <div>
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
            <div>
                {printData.length <= 0 ? (
                    <div className='flexCenterColumn'>
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
                ) : (
                    <PrintAllCards inputData={printData} />
                )}
            </div>
        </div>
    );
};
