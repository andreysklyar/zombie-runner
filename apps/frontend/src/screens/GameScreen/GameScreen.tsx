import React, { FunctionComponent, useState } from 'react';
import Header from '../../components/header/Header';
import Game from '../../game/Game';
import StartGameForm from './components/startGameForm';


export const GameScreen: FunctionComponent = () => {
    const [firstStep, setFirstStep] = useState(true);

    return (
        <>
            <Header extraClass="mb-0" />
            {!firstStep ? (
                <StartGameForm />
            ) : (
                <Game />
            )}
        </>
    );
}
