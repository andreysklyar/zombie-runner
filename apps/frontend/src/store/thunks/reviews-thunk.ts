import { Dispatch } from "redux"
import { ReviewsActionTypes, ReviewsAction, CreateReviewAction, AddReviewActionTypes, NewReview, Review, Reviews } from "../../types/reviews"
import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";

/*export const fetchReviews = (): any => {
    console.log('fetch all');
    return async (dispatch: Dispatch<ReviewsAction>): Promise<void> => {
        try {
            dispatch({type: ReviewsActionTypes.FETCH_REVIEWS});
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/review`);
            dispatch({type: ReviewsActionTypes.FETCH_REVIEWS_SUCCESS, payload: response.data.items});
        } catch(e) {
            dispatch({type: ReviewsActionTypes.FETCH_REVIEWS_ERROR, payload: 'Server error'});
        }
    }
}*/

export const fetchReviews = createAsyncThunk(
    'reviews/get',
    async () => {
        console.log('fetch all');

        const response = await axios.get<Reviews>(`${process.env.REACT_APP_API_URL}/review`);
        console.log('response.data ', response.data);
        return response.data;
    }
);

/*export const createReview = (newReview: NewReview): any => {
    return async (dispatch: Dispatch<CreateReviewAction>): Promise<void> => {
        try {
            dispatch({type: AddReviewActionTypes.FETCH_ADD_REVIEW});
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/review`, newReview);
            console.log(response);
            dispatch({type: AddReviewActionTypes.FETCH_ADD_REVIEW_SUCCESS, payload: response.data});
            // setTimeout(() => {
            // }, 5000);
        } catch(e) {
            dispatch({type: AddReviewActionTypes.FETCH_ADD_REVIEW_ERROR, payload: 'Server error'});
        }
    }
}*/

export const createReview = createAsyncThunk(
    'reviews/add',
    async (newReview: NewReview) => {
        const response = await axios.post<Review>(`${process.env.REACT_APP_API_URL}/review`, newReview);
        console.log(response, ' reviews/add');
    }
);
