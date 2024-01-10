import React, { FunctionComponent, useEffect } from 'react';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { topPlayersSelector } from '../../../../store/selectors/topPlayers';
import { Player } from '../../../../types/players';
import { useDispatch } from '../../../../hooks/dispatch';
import { fetchTopPlayers } from '../../../../store/thunks/players-thunk';
import classNames from 'classnames';
import styles from './assets/PlayersList.module.scss';
import Spinner from '../../../../components/Spinner/Spinner';

interface Props {}

const PlayersList: React.FunctionComponent<Props> = () => {
    const { loading, players } = useTypedSelector(topPlayersSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch<any>(fetchTopPlayers());
    }, [dispatch]);

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (players.length) ? (
                <ol className='list-group list-group-numbered'>
                    {players.map((item: Player, idx) => (
                         <li key={idx} className='list-group-item d-flex justify-content-between align-items-start'>
                            <div className={classNames(
                                !idx
                                    ? styles.first
                                    : idx === 1 
                                    ? styles.second
                                    : idx === 2
                                    ? styles.third
                                    : '',
                                idx < 3 ? 'fw-bold' : '',
                                'ms-2 me-auto'
                            )}>
                                {item.name}
                            </div>
                            <span className="badge bg-primary rounded-pill">{item.score}</span>
                         </li>
                    ))}
                </ol>
            ) : (
                <div className='text-center'>No Results</div>
            )}
        </>
    );
}

export default PlayersList;
