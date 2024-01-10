// Get all reviews
export enum ReviewsActionTypes {
    FETCH_REVIEWS = 'FETCH_REVIEWS',
    FETCH_REVIEWS_SUCCESS = 'FETCH_REVIEWS_SUCCESS',
    FETCH_REVIEWS_ERROR = 'FETCH_REVIEWS_ERROR',
}

interface FetchReviews {
    type: ReviewsActionTypes.FETCH_REVIEWS
}

interface FetchReviewsSuccess {
    type: ReviewsActionTypes.FETCH_REVIEWS_SUCCESS
    payload: Array<Review>
}

export interface FetchReviewsError {
    type: ReviewsActionTypes.FETCH_REVIEWS_ERROR
    payload: string | null
}

export interface Review {
    name: string
    review: string
    id: string
}
export interface Reviews {
    items: Review[]
    meta: {
        totalItems: number,
        itemCount: number,
        itemsPerPage: number,
        totalPages: number,
        currentPage: number
    }
}

export interface ReviewsState {
    reviews: Review[]
    loading: boolean
    error: string | null
}

export type ReviewsAction = FetchReviews | FetchReviewsSuccess | FetchReviewsError

// Add new review
export enum AddReviewActionTypes {
    FETCH_ADD_REVIEW = 'FETCH_ADD_REVIEW',
    FETCH_ADD_REVIEW_SUCCESS = 'FETCH_ADD_REVIEW_SUCCESS',
    FETCH_ADD_REVIEW_ERROR = 'FETCH_ADD_REVIEW_ERROR',
}

export interface NewReview {
    name: string
    review: string
}

export interface CreateReviewState {
    review: Review
    loading: boolean
    error: string | null
}

interface FetchAddReview {
    type: AddReviewActionTypes.FETCH_ADD_REVIEW
}

interface FetchAddReviewSuccess {
    type: AddReviewActionTypes.FETCH_ADD_REVIEW_SUCCESS
    payload: Review
}

interface FetchAddReviewError {
    type: AddReviewActionTypes.FETCH_ADD_REVIEW_ERROR
    payload: string | null
}

export interface AiReview {
    review: string
    loading: boolean
    error: string | null
}
export interface DeleteReviewState {
    loading: boolean
    error: string | null
}

//export type CreateReviewAction = FetchAddReview | FetchAddReviewSuccess | FetchAddReviewError
