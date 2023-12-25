import React from 'react';
import styles from './assets/header.module.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

interface Props {
    extraClass?: string
}

const Header: React.FunctionComponent<Props> = React.memo(({extraClass}) => (
    <header className={classNames(styles.mainHeader, extraClass ?? '')}>
        <div className='container'>
            <nav className={styles.mainNav}>
                {/* TODO: make loop */}
                <ul className={styles.mainNavList}>
                    <li className={styles.mainNavLi}>
                        <NavLink to="/" className={({ isActive }) => (isActive ? styles.mainNavLinkActive : styles.mainNavLink)}>Home</NavLink>
                    </li>
                    <li className={styles.mainNavLi}>
                        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.mainNavLinkActive : styles.mainNavLink)}>About</NavLink>
                    </li>
                    <li className={styles.mainNavLi}>
                        <NavLink to="/game" className={({ isActive }) => (isActive ? styles.mainNavLinkActive : styles.mainNavLink)}>Game</NavLink>
                    </li>
                    <li className={styles.mainNavLi}>
                        <NavLink to="/top" className={({ isActive }) => (isActive ? styles.mainNavLinkActive : styles.mainNavLink)}>Top players</NavLink>
                    </li>
                    <li className={styles.mainNavLi}>
                        <NavLink to="/reviews" className={({ isActive }) => (isActive ? styles.mainNavLinkActive : styles.mainNavLink)}>Reviews</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
));

export default Header;
