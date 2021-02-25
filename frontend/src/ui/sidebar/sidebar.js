import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './../../actions/userActions';
import styles from './sidebar.module.css';

const Sidebar = ({ history }) => {
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
    };

    return (
        <div
            className={styles.sidebar}
            style={{
                transform: `translateX(${sidebar})`,
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <div
                style={{
                    width: '80%',
                    height: 'inherit'
                    // backgroundColor: 'red'
                }}
            >
                <div
                    style={{
                        width: '140px',
                        height: '40px',
                        fontWeight: '500',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '5px',
                        color: 'white',
                        boxShadow: 'rgb(0 0 0 / 25%) 0px 0px 20px -3px',
                        backgroundColor: 'rgb(102, 168, 81)',
                        cursor: 'pointer'
                    }}
                    onClick={logoutAction}
                >
                    Log out
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
