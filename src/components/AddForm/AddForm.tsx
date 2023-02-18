import React from 'react';
import './AddForm.scss';

export const AddForm = () => {
    return (
        <div className='addFormContainer has-background-grey-light'>
            <div>
                <h1 className='has-text-centered'>Add Animal</h1>
            </div>
            <form className='addAnimalForm'>
                <div className='field'>
                    <label className='label'>Name</label>
                    <div className='control'>
                        <input
                            className='input'
                            type='text'
                            placeholder='Animal name..'
                            required
                            maxLength={20}
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
                        />
                    </div>
                </div>

                <div className='field'>
                    <label className='label'>Species (add new species)</label>
                    <div className='control'>
                        <div className='select'>
                            <select>
                                <option>Select dropdown</option>
                                <option>With options</option>
                            </select>
                        </div>
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
