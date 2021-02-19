import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './sidebar.module.css';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState('');

    const modalOpened = useSelector(state => state.sidebar.openSidebar);

    useEffect(() => {
        if (modalOpened) {
            setSidebar('0px');
        } else {
            setSidebar('-250px');
        }
    }, [modalOpened]);

    return (
        <div
            className={styles.sidebar}
            style={{
                transform: `translateX(${sidebar})`
            }}
        >
            <h1>Sidebar</h1>
        </div>
    );
};

export default Sidebar;
