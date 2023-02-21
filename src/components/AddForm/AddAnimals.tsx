import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {nanoid} from '@reduxjs/toolkit';
import './AddAnimals.scss';
import {selectAllSpecies} from '../../app/speciesSlice';
import {useSelector} from 'react-redux';
import {addAnimal} from '../../app/animalsSlice';
import {addSpecies} from '../../app/speciesSlice';

export const AddAnimals = () => {
    const speciesList = useSelector(selectAllSpecies);

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        image: '',
        species: '',
    });

    const [showSpeciesForm, setShowSpeciesForm] = useState(false);
    const dispatch = useDispatch();

    return (
        <div className='addFormContainer has-background-grey-light'>
            <div>
                <h1 className='has-text-centered'>Add Animal</h1>
            </div>
            <form
                className='addAnimalForm'
                onSubmit={(e) => {
                    e.preventDefault();

                    dispatch(addAnimal({...formData, id: nanoid()}));

                    setFormData({
                        name: '',
                        image: '',
                        species: '',
                    });

                    if (!speciesList.includes(formData.species)) {
                        dispatch(addSpecies(formData.species));
                    }

                    navigate('/');
                }}
            >
                <div className='field'>
                    <label className='label'>Name</label>
                    <div className='control'>
                        <input
                            type='text'
                            className='input'
                            placeholder='Animal name..'
                            required
                            maxLength={20}
                            value={formData.name}
                            onChange={(e) =>
                                setFormData({...formData, name: e.target.value})
                            }
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
                            value={formData.image}
                            onChange={(e) =>
                                setFormData({
                                    ...formData,
                                    image: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <label className='label'>
                    Species (
                    <span
                        className='addSpeciesLink'
                        onClick={() => setShowSpeciesForm(!showSpeciesForm)}
                    >
                        add new species
                    </span>
                    )
                </label>
                {showSpeciesForm ? (
                    <div className='field'>
                        {/* <label className='label'>Species</label> */}
                        <div className='control'>
                            <input
                                className='input'
                                type='text'
                                placeholder='Species..'
                                required
                                value={formData.species}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        species: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>
                ) : (
                    <div className='field'>
                        <div className='control'>
                            <div className='select'>
                                <select
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            species: e.target.value,
                                        })
                                    }
                                    // value={formData.species}
                                    name='fruits'
                                    id='fruit-select'
                                    defaultValue='DISABLED'
                                >
                                    <option value='DISABLED' disabled>
                                        Select dropdown
                                    </option>
                                    {speciesList.map(
                                        (specie: any, index: any) => (
                                            <option key={index} value={specie}>
                                                {specie}
                                            </option>
                                        ),
                                    )}
                                </select>
                            </div>
                        </div>
                    </div>
                )}
                <div className='field is-grouped'>
                    <div className='control'>
                        <button className='button is-link'>Add</button>
                    </div>
                    <div className='control'>
                        <button
                            type='button'
                            onClick={() => navigate('/')}
                            className='button is-link'
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};
