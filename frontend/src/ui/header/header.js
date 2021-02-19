import React from 'react';
import { openModalAction, openSidebarAction } from './../../actions/uiActions';
import { useDispatch } from 'react-redux';
import hamburger from './../../assets/images/hamburger.png';
import user from './../../assets/images/user.png';
import styles from './header.module.css';

const userLoggedIn = localStorage.getItem('userId');

const Header = () => {
    console.log(window.location);
    const dispatch = useDispatch();

    const openSidebar = () => {
        dispatch(openSidebarAction());
        dispatch(openModalAction());
        document.body.querySelector('.homeScreenContainerChild').style.filter = 'blur(5px)';
        document.body.querySelector('.header').style.filter = 'blur(5px)';
    };

    return (
        <header className={[styles.header, 'header'].join(' ')}>
            <div className={styles.headerIconContainer} onClick={openSidebar}>
                <img src={hamburger} className={styles.headerIcons} alt="menu" />
            </div>
            <div className={styles.habricateTitle}>Habricate</div>
            <div className={styles.headerIconContainer}>{userLoggedIn && <img src={user} className={styles.headerIcons} alt="user" />}</div>
        </header>
    );
};

export default Header;
