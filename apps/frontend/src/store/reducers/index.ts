import { combineReducers } from "redux";
import reviews from "./reviewsReduser";
import addReview from "./addReviewReduser";
import generateReview from "./generateReview";

export const rootReducer = combineReducers({
    reviews: reviews,
    newReview: addReview,
    aiReview: generateReview
})

export type RootState = ReturnType<typeof rootReducer>
