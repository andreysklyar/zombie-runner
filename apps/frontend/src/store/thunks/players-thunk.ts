import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Player, TopPlayers, NewPlayer } from "../../types/players";

export const fetchTopPlayers = createAsyncThunk(
    'topPlayers/get',
    async () => {
        console.log('fetch topPlayers');

        const response = await axios.get<TopPlayers>(`${process.env.REACT_APP_API_URL}/players`);
        console.log('topPlayers response.data ', response.data);
        return response.data;
    }
);

export const addPlayerScore = createAsyncThunk(
    'topPlayers/add',
    async (newPlayer: NewPlayer) => {
        const response = await axios.post<Player>(`${process.env.REACT_APP_API_URL}/players`, newPlayer);
        console.log('add Player score', response);
    }
);
