import React from 'react';
import styles from './assets/header.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

interface Props {}

const Header: React.FunctionComponent<Props> = React.memo(() => (
    <header className={styles.mainHeader}>
        <div className='container'>
            <nav className={styles.mainNav}>
                <ul className={styles.mainNavList}>
                    <li className={styles.mainNavLi}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.mainNavLi}>
                        <Link to="about">About</Link>
                    </li>
                    <li className={styles.mainNavLi}>
                        <Link to="game">Game</Link>
                    </li>
                    <li className={styles.mainNavLi}>
                        <Link to="top">Top players</Link>
                    </li>
                    <li className={styles.mainNavLi}>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
));

export default Header;
