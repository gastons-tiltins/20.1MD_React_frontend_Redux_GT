import {useState} from 'react';
import {InitialView} from './components/InitialView/InitialView';
import {AddForm} from './components/AddForm/AddForm';
import {MainView} from './components/MainView/MainView';
import {NavBar} from './components/NavBar/NavBar';
import {NoPage} from './components/NoPage/NoPage';
import {Routes, Route} from 'react-router-dom';
import {AddAnimals} from './components/AddForm/AddAnimals';
import Fruits from './Fruits';

function App() {
    return (
        <>
            {/* <AddAnimals /> */}
            {/* <hr /> */}
            {/* <AddForm /> */}
            {/* <AddPostForm /> */}
            {/* <AnimalsList /> */}
            {/* <Fruits /> */}
            {/* <Counter />
             <InitialView /> */}
            <Routes>
                <Route path='/' element={<NavBar />}>
                    <Route index element={<MainView />} />
                    <Route path='add' element={<AddAnimals />} />
                    <Route path='*' element={<NoPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
