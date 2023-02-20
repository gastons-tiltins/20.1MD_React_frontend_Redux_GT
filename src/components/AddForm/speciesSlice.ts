import {createSlice} from '@reduxjs/toolkit';
const initialState = ['Cats', 'Rodent', 'Insects'];

const speciesSlice = createSlice({
    name: 'species',
    initialState,
    reducers: {
        // @ts-ignore
        speciesAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
        },
    },
});

export const selectAllSpecies = (state: any) => state.species;
export const {speciesAdded} = speciesSlice.actions;

export default speciesSlice.reducer;
