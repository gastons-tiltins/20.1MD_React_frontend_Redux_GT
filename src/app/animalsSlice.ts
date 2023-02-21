import {createSlice} from '@reduxjs/toolkit';
import {RootState} from './store';

const animalsFromLocalStorage = localStorage.getItem('allAnimals') || '[]';
const initialAnimals = JSON.parse(animalsFromLocalStorage);

type Animals = {
    id: string;
    name: string;
    image: string;
    species: string;
};

type InitialState = {
    animals: Array<Animals>;
};

const initialState: InitialState = {
    animals: initialAnimals,
};

const animalsSlice = createSlice({
    name: 'animals',
    initialState,
    reducers: {
        addAnimal(state, action) {
            state.animals.push(action.payload);
            localStorage.setItem('allAnimals', JSON.stringify(state.animals));
        },
        removeAnimal(state, action) {
            state.animals = state.animals.filter((animal) => {
                return animal.id !== action.payload;
            });

            localStorage.setItem('allAnimals', JSON.stringify(state.animals));
        },
    },
});

export const selectAllAnimals = (state: RootState) => state.animals.animals;
export const {addAnimal, removeAnimal} = animalsSlice.actions;

export default animalsSlice.reducer;
