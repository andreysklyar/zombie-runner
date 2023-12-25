import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { generateReview } from '../thunks/reviews-thunk';
import { AiReview } from "../../types/reviews";

export const initialState: AiReview = {
    review: '',
    loading: false,
    error: null
}

const generateReviewSlice = createSlice({
    name: 'generateReview',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                generateReview.pending,
                (state) => {
                    state.loading = true;
                }
            )
            .addCase(
                generateReview.fulfilled,
                (state, action: PayloadAction<any>) => {
                    console.log(action.payload);
                    state.loading = false;
                    state.review = action.payload;
                }
            )
            .addCase(
                generateReview.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )
    }
});

export default generateReviewSlice.reducer;
