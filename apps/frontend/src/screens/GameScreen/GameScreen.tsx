import React, { FunctionComponent } from 'react';
import Header from '../../components/header/Header';
import Game from '../../game/Game';
import StartGameForm from './components/startGameForm';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { playerSelector } from '../../store/selectors/player';

export const GameScreen: FunctionComponent = () => {
    const { name } = useTypedSelector(playerSelector);

    return (
        <>
            <Header extraClass="mb-0" />
            {name ? (
                <Game />
            ) : (
                <StartGameForm />
            )}
        </>
    );
}
