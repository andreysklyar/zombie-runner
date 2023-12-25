import { useEffect, useRef } from "react";
import * as PIXI from 'pixi.js';
import GameCore from "./core";

interface Props {
}

const Game: React.FunctionComponent<Props> = () => {
    const ref = useRef<any>(null);

    const app = new PIXI.Application({ background: '#fc9', antialias: true, resizeTo: ref.current });
    const game = new GameCore(app);

    useEffect(() => {
        ref.current.appendChild(app.view);
    
        app.ticker.add(game.update, game);

        return () => {
            app.stop();
        }
    });

    return (
        <div className='flex-grow-1 w-100' id="canvas" ref={ref} />
    );
};

export default Game;
