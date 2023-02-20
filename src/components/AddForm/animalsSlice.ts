import {createSlice} from '@reduxjs/toolkit';
import {nanoid} from '@reduxjs/toolkit';
import {useEffect, useState} from 'react';

// const animalsFromLocalStorage = localStorage.getItem('allAnimals') || '[]';

const initialState: any = [
    // {
    //     id: nanoid(),
    //     name: 'Cat',
    //     image: 'https://picsum.photos/536/354',
    //     species: 'Cats',
    // },
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
