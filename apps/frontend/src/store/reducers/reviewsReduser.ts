import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Reviews, ReviewsState } from './../../types/reviews'
import { fetchReviews } from '../thunks/reviews-thunk'

export const initialState: ReviewsState = {
    reviews: [],
    loading: false,
    error: null
}

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
