import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { deleteReview } from "../thunks/reviews-thunk";
import { DeleteReviewState } from "../../types/reviews";

export const initialState: DeleteReviewState = {
    loading: false,
    error: null
}

const deleteReviewslice = createSlice({
    name: 'deleteReview',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(
            deleteReview.pending,
            (state) => {
                state.loading = true;
            }
        )
        .addCase(
            deleteReview.fulfilled,
            (state, action) => {
                state.loading = false;
            }
        )
        .addCase(
            deleteReview.rejected,
            (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            }
        )
    }
});

export default deleteReviewslice.reducer;
