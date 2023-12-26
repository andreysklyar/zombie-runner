import { combineReducers } from "redux";
import reviews from "./reviewsReduser";
import addReview from "./addReviewReduser";
import generateReview from "./generateReview";
import player from "./playerReduser";

export const rootReducer = combineReducers({
    reviews: reviews,
    newReview: addReview,
    aiReview: generateReview,
    player: player
})

export type RootState = ReturnType<typeof rootReducer>
