import { AddReviewActionTypes, CreateReviewAction, CreateReviewState } from '../../types/reviews'

export const initialState: CreateReviewState = {
    review: {
        name: '',
        review: '',
        id: ''
    },
    loading: false,
    error: null
}

export const addReviewReduser = (state = initialState, action: CreateReviewAction): CreateReviewState => {
    switch (action.type) {
        case AddReviewActionTypes.FETCH_ADD_REVIEW:
            return {...state, loading: true}
        case AddReviewActionTypes.FETCH_ADD_REVIEW_SUCCESS:
            return {...state, loading: false, review: action.payload}
        case AddReviewActionTypes.FETCH_ADD_REVIEW_ERROR:
            return {...state, loading: false, error: action.payload}
        default: 
            return state
    }
}
