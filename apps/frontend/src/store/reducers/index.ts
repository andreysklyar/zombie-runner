import { combineReducers } from "redux";
import reviews from "./reviewsReduser";
import addReview from "./addReviewReduser";

export const rootReducer = combineReducers({
    reviews: reviews,
    newReview: addReview
})

export type RootState = ReturnType<typeof rootReducer>
