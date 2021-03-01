import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './../../actions/userActions';
import { closeModalAction, closeSidebarAction } from './../../actions/uiActions';
import styles from './sidebar.module.css';

const Sidebar = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [sidebar, setSidebar] = useState('-250px');

    const modalOpened = useSelector(state => state.sidebar.openSidebar);

    useEffect(() => {
        if (modalOpened) {
            setSidebar('0px');
            document.body.style.overflow = 'hidden';
        } else {
            setSidebar('-250px');
            document.body.style.overflow = 'auto';
        }
    }, [modalOpened]);

    const logoutAction = () => {
        dispatch(logout());
        dispatch(closeModalAction());
        dispatch(closeSidebarAction());
        history.push('/login');
    };

    return (
        <div
            className={styles.sidebar}
            style={{
                transform: `translateX(${sidebar})`
            }}
        >
            <div className={styles.sidebarChild}>
                <div className={styles.logoutButton} onClick={logoutAction}>
                    Log out
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
