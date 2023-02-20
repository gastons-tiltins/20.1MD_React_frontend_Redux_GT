import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import postsReducer from '../features/posts/postsSlice';
import animalsReducer from '../components/AddForm/animalsSlice';
import speciesReducer from '../components/AddForm/speciesSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        posts: postsReducer,
        animals: animalsReducer,
        species: speciesReducer,
    },
});
