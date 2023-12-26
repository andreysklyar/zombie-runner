import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface PlayerState {
    name: string | null;
    // score: number;
}

export const initialState: PlayerState = {
    name: null,
    // score: 0
}

const playerSlice = createSlice({
    name: 'player',
    initialState: initialState,
    reducers: {
        setPlayerName: (state, action: PayloadAction<any>) => {
            console.log(action, ' pl action');
            state.name = action.payload;
        }
    }
});

export const { setPlayerName } = playerSlice.actions;

export default playerSlice.reducer;
