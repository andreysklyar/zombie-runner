import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AddReviewActionTypes, CreateReviewAction, CreateReviewState, NewReview, Review } from '../../types/reviews'
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

// export const addReviewReduser = (state = initialState, action: CreateReviewAction): CreateReviewState => {
//     switch (action.type) {
//         case AddReviewActionTypes.FETCH_ADD_REVIEW:
//             return {...state, loading: true}
//         case AddReviewActionTypes.FETCH_ADD_REVIEW_SUCCESS:
//             return {...state, loading: false, review: action.payload}
//         case AddReviewActionTypes.FETCH_ADD_REVIEW_ERROR:
//             return {...state, loading: false, error: action.payload}
//         default: 
//             return state
//     }
// }


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
