import { useRef } from "react";
import * as PIXI from 'pixi.js';
import GameCore from "./core";
import { useEffectOnce } from "../hooks/use-effect-once";
import { useDispatch } from "../hooks/dispatch";
import { setPlayerName } from "../store/reducers/playerReduser";

interface Props {
}

const Game: React.FunctionComponent<Props> = () => {
    const ref = useRef<any>(null);
    const dispatch = useDispatch();

    useEffectOnce(() => {
        const app = new PIXI.Application({ background: '#fc9', antialias: true, resizeTo: ref.current });
        const game = new GameCore(app);
        ref.current.appendChild(app.view);

        app.ticker.add(game.update, game);

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
