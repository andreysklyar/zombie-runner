import { combineReducers } from "redux";
import { reviewsReduser } from "./reviewsReduser";
import { addReviewReduser } from "./addReviewReduser";

export const rootReducer = combineReducers({
    reviews: reviewsReduser,
    newReview: addReviewReduser
})

export type RootState = ReturnType<typeof rootReducer>
