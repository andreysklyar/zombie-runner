import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { FetchReviewsError, Review, Reviews, ReviewsAction, ReviewsActionTypes, ReviewsState } from './../../types/reviews'
import { fetchReviews } from '../thunks/reviews-thunk'

export const initialState: ReviewsState = {
    reviews: [],
    loading: false,
    error: null
}

/*export const reviewsReduser = (state = initialState, action: ReviewsAction): ReviewsState => {
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
}*/


const reviewslice = createSlice({
    name: 'reviews',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchReviews.pending,
                (state) => {
                    state.loading = true;
                }
            )
            .addCase(
                fetchReviews.fulfilled,
                (state, action: PayloadAction<Reviews>) => {
                    console.log('fetchReviews.fulfilled');
                    console.log(action.payload);
                    state.loading = false;
                    state.reviews = action.payload.items;
                }
            )
            .addCase(
                fetchReviews.rejected,
                (state, action: PayloadAction<any>) => {
                // (state, action: PayloadAction<string>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )
    }
});

export default reviewslice.reducer;
