import {createSlice} from '@reduxjs/toolkit';
import {nanoid} from '@reduxjs/toolkit';

const initialState = [
    {
        id: nanoid(),
        name: 'Cat',
        image: 'https://picsum.photos/536/354',
        species: 'Cats',
    },
    {
        id: nanoid(),
        name: 'Dog',
        image: 'https://picsum.photos/536/354',
        species: 'Rodent',
    },
    {
        id: nanoid(),
        name: 'Lion',
        image: 'https://picsum.photos/536/354',
        species: 'Insects',
    },
    {
        id: nanoid(),
        name: 'Zebra',
        image: 'https://picsum.photos/536/354',
        species: 'Insects',
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
