import React, { FunctionComponent, useEffect } from 'react';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import { topPlayersSelector } from '../../../store/selectors/topPlayers';
import { Player } from '../../../types/players';
import { useDispatch } from '../../../hooks/dispatch';
import { fetchTopPlayers } from '../../../store/thunks/players-thunk';

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
                <div className='text-center'>
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (players.length) ? ( 
                <ol className='list-group list-group-numbered'>
                    {players.map((item: Player, idx) => (
                         <li key={idx} className='list-group-item d-flex justify-content-between align-items-start'>
                            <div className="ms-2 me-auto fw-bold">
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
