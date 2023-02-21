import {createSlice} from '@reduxjs/toolkit';

const speciesFromLocalStorage = localStorage.getItem('allSpecies') || '[]';
const initialSpecies = JSON.parse(speciesFromLocalStorage);

const initialState: string[] = initialSpecies;

const speciesSlice = createSlice({
    name: 'species',
    initialState,
    reducers: {
        addSpecies(state, action) {
            state.push(action.payload);
            localStorage.setItem('allSpecies', JSON.stringify(state));
        },
        removeSpecies(state, action) {
            state = state.filter((specie) => {
                return specie !== action.payload;
            });

            localStorage.setItem('allSpecies', JSON.stringify(state));
        },
    },
});

export const selectAllSpecies = (state: any) => state.species;
export const {addSpecies, removeSpecies} = speciesSlice.actions;

export default speciesSlice.reducer;
