import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from './sidebar.module.css';

const Sidebar = () => {
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
