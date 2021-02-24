import React from 'react';
import { useHistory } from 'react-router-dom';
import { openModalAction, openSidebarAction } from './../../actions/uiActions';
import { useSelector, useDispatch } from 'react-redux';
import hamburger from './../../assets/images/hamburger.png';
import back from './../../assets/images/back.png';
import user from './../../assets/images/user.png';
import styles from './header.module.css';

const userLoggedIn = localStorage.getItem('userId');

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const currentPageName = useSelector(state => state.currentPageName.pageName);

    const openSidebar = () => {
        dispatch(openSidebarAction());
        dispatch(openModalAction());
    };

    const goBack = () => {
        history.push('/');
    };

    return (
        <header className={[styles.header, 'header'].join(' ')}>
            <div className={styles.headerIconContainer} onClick={currentPageName === 'singleHabit' ? goBack : openSidebar}>
                {currentPageName === 'singleHabit' ? (
                    <img src={back} className={styles.headerIcons} alt="back" />
                ) : (
                    <img src={hamburger} className={styles.headerIcons} alt="menu" />
                )}
            </div>
            <div className={styles.habricateTitle}>Habricate</div>
            <div className={styles.headerIconContainer}>{userLoggedIn && <img src={user} className={styles.headerIcons} alt="user" />}</div>
        </header>
    );
};

export default Header;
