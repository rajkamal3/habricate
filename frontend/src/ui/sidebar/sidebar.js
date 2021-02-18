import React from 'react';
import styles from './sidebar.module.css';

const Sidebar = () => {
    let showSideMenu;
    let modalActive;

    if (!this.props.showModal) {
        modalActive = [styles.modal, styles.modalClose].join(' ');
        showSideMenu = [styles.sideMenu, styles.sideMenuClose].join(' ');
    }

    if (this.props.showMenu) {
        showSideMenu = [styles.sideMenu, styles.sideMenuOpen].join(' ');
        modalActive = [styles.modal, styles.modalOpen].join(' ');
    }

    return (
        <div>
            <div className={modalActive} onClick={this.props.clicked}></div>
            <div className={showSideMenu}>
                <h1>Huell</h1>
            </div>
        </div>
    );
};

export default Sidebar;
