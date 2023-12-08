import { Dispatch } from "redux"
import { ReviewsActionTypes, ReviewsAction, CreateReviewAction, AddReviewActionTypes, NewReview } from "../../types/reviews"
import axios from 'axios'

export const fetchReviews = (): any => {
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
}

export const createReview = (newReview: NewReview): any => {
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
}
