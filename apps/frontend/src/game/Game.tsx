import { useRef } from "react";
import * as PIXI from 'pixi.js';
import GameCore from "./core";
import { useEffectOnce } from "../hooks/use-effect-once";
import { setPlayerName } from "../store/reducers/playerReduser";
import { NewPlayer } from "../types/players";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { playerSelector } from "../store/selectors/player";
import { AsyncThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import { addPlayerScore } from "../store/thunks/players-thunk";
import { useDispatch } from "react-redux";
import { NewReview } from "../types/reviews";

interface Props {
}

const Game: React.FunctionComponent<Props> = () => {
    const ref = useRef<any>(null);
    const dispatch = useDispatch<ThunkDispatch<any, NewReview, any>>();
    const { name } = useTypedSelector(playerSelector);

    useEffectOnce(() => {
        const app = new PIXI.Application({ background: '#fc9', antialias: true, resizeTo: ref.current });
        const game = new GameCore(app);
        ref.current.appendChild(app.view);

        app.ticker.add(game.update, game);
        // TODO: add random value for test api
        dispatch(addPlayerScore({
            name: name || '', // TODO: change null to empty string
            score: 1001
        }));

        return () => {
            // Delete player name
            dispatch(setPlayerName(null));
            // Stop game
            app.stop();
        }
    }, []);

    return (
        <div className='flex-grow-1 w-100' id="canvas" ref={ref} />
    );
};

export default Game;
