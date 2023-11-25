import { ReviewsAction, ReviewsActionTypes, ReviewsState } from './../../types/reviews'

export const initialState: ReviewsState = {
    reviews: [],
    loading: false,
    error: null
}

export const reviewsReduser = (state = initialState, action: ReviewsAction): ReviewsState => {
    switch (action.type) {
        case ReviewsActionTypes.FETCH_REVIEWS:
            return {...state, loading: true}
        case ReviewsActionTypes.FETCH_REVIEWS_SUCCESS:
            return {...state, loading: false, reviews: action.payload}
        case ReviewsActionTypes.FETCH_REVIEWS_ERROR:
            return {...state, loading: false, error: action.payload}
        default: 
            return state
    }
}
