import {configureStore} from '@reduxjs/toolkit';
import animalsReducer from '../components/AddForm/animalsSlice';
import speciesReducer from '../components/AddForm/speciesSlice';

export const store = configureStore({
    reducer: {
        animals: animalsReducer,
        species: speciesReducer,
    },
});
