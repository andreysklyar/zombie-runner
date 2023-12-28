import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TopPlayersState } from "../../types/players";
import { fetchTopPlayers } from "../thunks/players-thunk";

export const initialState: TopPlayersState = {
    players: [],
    loading: false,
    error: null
}

const topPlayersSlice = createSlice({
    name: 'topPlayers',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(
                fetchTopPlayers.pending,
                (state) => {
                    state.loading = true;
                }
            )
            .addCase(
                fetchTopPlayers.fulfilled,
                (state, action) => {
                    console.log(action.payload);
                    state.loading = false;
                    state.players = action.payload.items;
                }
            )
            .addCase(
                fetchTopPlayers.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false;
                    state.error = action.payload;
                }
            )
    }
});

export default topPlayersSlice.reducer;
