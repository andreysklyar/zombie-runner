import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CreateReviewState } from '../../types/reviews'
import { createReview } from '../thunks/reviews-thunk';

export const initialState: CreateReviewState = {
    review: {
        name: '',
        review: '',
        id: ''
    },
    loading: false,
    error: null
}

const addReviewSlice = createSlice({
    name: 'addReview',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(
            createReview.pending,
            (state) => {
                state.loading = true;
            }
        )
        .addCase(
            createReview.fulfilled,
            (state, action: PayloadAction<any>) => {
                console.log('addReview.fulfilled');
                console.log(action.payload);
                state.loading = false;
                state.review = action.payload;
            }
        )
        .addCase(
            createReview.rejected,
            (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            }
        )
    }
});

export default addReviewSlice.reducer;
