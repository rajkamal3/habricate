import React from 'react';
import { useHistory } from 'react-router-dom';
// import store from './../../store';
import { openModalAction, openSidebarAction } from './../../actions/uiActions';
import { useSelector, useDispatch } from 'react-redux';
import hamburger from './../../assets/images/hamburger.png';
import back from './../../assets/images/back.png';
import user from './../../assets/images/user.png';
import styles from './header.module.css';

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const userLoggedIn = localStorage.getItem('userId');
    // console.log('LOGGED IN ' + userLoggedIn);
    // const globalStore = store.getState();

    const currentPageName = useSelector(state => state.currentPageName.pageName);
    // const storeChange = useSelector(state => state.currentPageName.pageName);

    // console.log(name);

    const openSidebar = () => {
        dispatch(openSidebarAction());
        dispatch(openModalAction());
    };

    const goBack = () => {
        history.push('/');
    };

    // useEffect(() => {
    //     console.log('huell');
    // }, [globalStore, render]);

    // useForceUpdate();
    // useEffect(() => {

    // }, [globalStore, userLoggedIn, currentPageName, useForceUpdate]);

    return (
        <header className={[styles.header, 'header'].join(' ')}>
            <div className={styles.headerIconContainerForSpace}>
                {userLoggedIn && (
                    <div className={styles.headerIconContainer} onClick={currentPageName === 'singleHabit' ? goBack : openSidebar}>
                        <img src={currentPageName === 'singleHabit' ? back : hamburger} className={styles.headerIcons} alt="menu/back" />
                    </div>
                )}
            </div>
            <div className={styles.habricateTitle}>Habricate</div>
            <div className={styles.headerIconContainerForSpace}>
                {userLoggedIn && (
                    <div className={styles.headerIconContainer}>
                        <img src={user} className={styles.headerIcons} alt="user" />
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
