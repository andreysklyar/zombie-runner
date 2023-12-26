import { NewReview, Review, Reviews } from "../../types/reviews"
import axios from 'axios'
import { createAsyncThunk } from "@reduxjs/toolkit";
import OpenAI from "openai";

export const fetchReviews = createAsyncThunk(
    'reviews/get',
    async () => {
        console.log('fetch all');

        const response = await axios.get<Reviews>(`${process.env.REACT_APP_API_URL}/review`);
        console.log('response.data ', response.data);
        return response.data;
    }
);

export const createReview = createAsyncThunk(
    'reviews/add',
    async (newReview: NewReview) => {
        const response = await axios.post<Review>(`${process.env.REACT_APP_API_URL}/review`, newReview);
        console.log(response, ' reviews/add');
    }
);

export const generateReview = createAsyncThunk(
    'review/generate',
    async (isPositive: boolean) => {
        const openai = new OpenAI({
          apiKey: process.env.REACT_APP_CHAT_GPT,
          dangerouslyAllowBrowser: true
        });

        try {
          const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
              {
                "role": "user",
                "content": `Create a short ${isPositive ? 'positive' : 'negative'} review of a game called Zombie Runner. from 3 to 20 words. In the game you are able to fight with zombies, shot, run, jump`
              }
            ],
            temperature: 0.5,
            max_tokens: 64,
            top_p: 1,
          });
          console.log(response);

          return response.choices[0].message.content || '';
        }

        catch (e) {
          console.log(e);
        }
    }
);
