import {configureStore} from '@reduxjs/toolkit';
import animalsReducer from './animalsSlice';
import speciesReducer from './speciesSlice';

export const store = configureStore({
    reducer: {
        animals: animalsReducer,
        species: speciesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
