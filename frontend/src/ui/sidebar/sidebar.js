import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import styles from './sidebar.module.css';

const Sidebar = props => {
    const [sidebar, setSidebar] = useState('');

    const modalOpened = useSelector(state => state.sidebar.openSidebar);
    console.log(modalOpened);

    useEffect(() => {
        if (modalOpened) {
            setSidebar('0px');
        } else {
            setSidebar('-250px');
        }
    }, [modalOpened]);

    return (
        <div
            style={{
                zIndex: '99999',
                position: 'absolute',
                width: '250px',
                height: '100%',
                backgroundColor: 'white',
                transform: `translateX(${sidebar})`,
                transition: '0.3s ease'
            }}
        >
            <h1>Sidebar</h1>
        </div>
    );
};

export default Sidebar;
