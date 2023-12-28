import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CreatePlayerState, NewPlayer, Player } from '../../types/players';
import { addPlayerScore } from '../thunks/players-thunk';

export const initialState: CreatePlayerState = {
    player: {
        name: '',
        score: 0,
        id: ''
    },
    loading: false,
    error: null
}

const addPlayerScoreSlice = createSlice({
    name: 'addPlayerScore',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(
            addPlayerScore.pending,
            (state) => {
                state.loading = true;
            }
        )
        .addCase(
            addPlayerScore.fulfilled,
            (state, action: PayloadAction<any>) => {
                state.loading = false;
                console.log(action.payload, ' addPlayerScore');
                state.player = action.payload;
            }
        )
        .addCase(
            addPlayerScore.rejected,
            (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            }
        )
    }
});

export default addPlayerScoreSlice.reducer;
