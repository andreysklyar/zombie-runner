import { combineReducers } from "redux";
import reviews from "./reviewsReduser";
import addReview from "./addReviewReduser";
import generateReview from "./generateReview";
import player from "./playerReduser";
import topPlayers from "./topPlayersReduser";
import addPlayerScore from "./addPlayerScore";
import deleteReview from "./deleteReviewReduser";

export const rootReducer = combineReducers({
    reviews: reviews,
    newReview: addReview,
    aiReview: generateReview,
    player: player,
    topPlayers: topPlayers,
    playerScore: addPlayerScore,
    deleteReview: deleteReview
})

export type RootState = ReturnType<typeof rootReducer>
