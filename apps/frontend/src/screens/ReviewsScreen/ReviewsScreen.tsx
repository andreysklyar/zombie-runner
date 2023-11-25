import React, { FunctionComponent, useEffect } from 'react';
import Header from '../../components/header/Header';
import ReviewsList from './components/reviewsList/reviewsList';
import ReviewForm from './components/reviewForm/reviewForm';

export const ReviewsScreen: FunctionComponent = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <h1>Reviews page</h1>
                <ReviewsList />
                <ReviewForm />
            </div>
        </div>
    );
}
