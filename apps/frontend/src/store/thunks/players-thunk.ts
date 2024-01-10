import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Player, TopPlayers, NewPlayer } from "../../types/players";

export const fetchTopPlayers = createAsyncThunk(
    'topPlayers/get',
    async () => {
        const response = await axios.get<TopPlayers>(`${process.env.REACT_APP_API_URL}/players`);
        return response.data;
    }
);

export const addPlayerScore = createAsyncThunk(
    'topPlayers/add',
    async (newPlayer: NewPlayer) => {
        const response = await axios.post<Player>(`${process.env.REACT_APP_API_URL}/players`, newPlayer);
    }
);
