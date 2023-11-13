import React, { FunctionComponent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';

export const HomeScreen: FunctionComponent = () => {
    return (
        <div>
            <Header />
            <div className='container'>
                <h1>Home page</h1>
            </div>
        </div>
    );
}
