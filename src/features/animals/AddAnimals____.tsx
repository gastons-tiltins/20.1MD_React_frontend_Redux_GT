import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';

// TODO:
import {animalAdded} from './animalsSlice';

export const AddAnimals = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    // const [speciesList, setSpeciesList] = useState([
    //     'Species 1',
    //     'Species 2',
    //     'Species 3',
    // ]);
    // const [speciesList, setSpeciesList] = useState([
    //     {value: '', text: '--Choose an option--'},
    //     {value: 'apple', text: 'Apple 🍏'},
    //     {value: 'banana', text: 'Banana 🍌'},
    //     {value: 'kiwi', text: 'Kiwi 🥝'},
    // ]);
    const [speciesList, setSpeciesList] = useState([
        'species1',
        'species2',
        'species3',
    ]);

    const [species, setSpecies] = useState('');

    const dispatch = useDispatch();

    const onNameChanged = (e: any) => setName(e.target.value);
    const onImageChanged = (e: any) => setImage(e.target.value);
    const onSpeciesChanged = (e: any) => {
        setSpecies(e.target.value);
    };

    const onSaveFormClicked = (e: any) => {
        e.preventDefault();
        if (name && image && species) {
            dispatch(
                animalAdded({
                    id: nanoid(),
                    name,
                    image,
                    species,
                }),
            );
            setName('');
            setImage('');
            setSpecies('');
        }
    };

    return (
        <div className='addFormContainer has-background-grey-light'>
            <div>
                <h1 className='has-text-centered'>Add Animal</h1>
            </div>
            <form className='addAnimalForm' onSubmit={onSaveFormClicked}>
                <div className='field'>
                    <label className='label'>Name</label>
                    <div className='control'>
                        <input
                            type='text'
                            className='input'
                            placeholder='Animal name..'
                            required
                            maxLength={20}
                            value={name}
                            onChange={onNameChanged}
                        />
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>Image source</label>
                    <div className='control'>
                        <input
                            className='input'
                            type='url'
                            placeholder='http..'
                            required
                            value={image}
                            onChange={onImageChanged}
                        />
                    </div>
                </div>
                {/* <div className='field'>
                    <label className='label'>Species</label>
                    <div className='control'>
                        <input
                            className='input'
                            type='text'
                            placeholder='Species..'
                            required
                            // value={species}
                            // onChange={onSpeciesChanged}
                        />
                    </div>
                </div> */}
                <div className='field'>
                    <label className='label'>Species (add new species)</label>
                    <div className='control'>
                        <select
                            defaultValue={'DISABLED'}
                            onChange={onSpeciesChanged}
                            name='fruits'
                            id='fruit-select'
                        >
                            <option value='DISABLED' disabled>
                                Select dropdown
                            </option>
                            {speciesList.map((specie, index) => (
                                <option key={index} value={specie}>
                                    {specie}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='field is-grouped'>
                    <div className='control'>
                        <button className='button is-link'>Add</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
