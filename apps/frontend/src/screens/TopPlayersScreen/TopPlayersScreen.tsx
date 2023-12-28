import React, { FunctionComponent } from 'react';
import Header from '../../components/header/Header';
import PlayersList from './components/PlayersList';

export const TopPlayersScreen: FunctionComponent = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <h1>Top players page</h1>
                <PlayersList />
            </div>
        </div>
    );
}
