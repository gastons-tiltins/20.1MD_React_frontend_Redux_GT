import {createSlice} from '@reduxjs/toolkit';
import {nanoid} from '@reduxjs/toolkit';

const initialState = [
    {
        id: nanoid(),
        name: 'Cat',
        image: 'https://picsum.photos/536/354',
        species: 'Species1',
    },
    {
        id: nanoid(),
        name: 'Dog',
        image: 'https://picsum.photos/536/354',
        species: 'Species2',
    },
    {
        id: nanoid(),
        name: 'Lion',
        image: 'https://picsum.photos/536/354',
        species: 'Species3',
    },
];

const animalsSlice = createSlice({
    name: 'animals',
    initialState,
    reducers: {
        // @ts-ignore
        animalAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
        },
    },
});

export const selectAllAnimals = (state: any) => state.animals;
export const {animalAdded} = animalsSlice.actions;

export default animalsSlice.reducer;
