import React from 'react';
import {Card} from '../Card/Card';
import './MainView.scss';

export const MainView = () => {
    return (
        <div className=''>
            <div className='centerButtons'>
                <button className='button is-link is-light'>All</button>
                <button className='button is-link is-light'>Cats</button>
                <button className='button is-link is-light'>Rodent</button>
                <button className='button is-link is-light'>Elephant</button>
                <button className='button is-link is-light'>Insects</button>
            </div>
            <div className='centerGrid'>
                <div className='cardGrid'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};
