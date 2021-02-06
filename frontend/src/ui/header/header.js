import React from 'react';
// import user from './../../assets/images/user.png';
import styles from './header.module.css';

const header = () => {
    return (
        <header className={[styles.header, 'header'].join(' ')}>
            <div className={styles.habricateTitle}>Habricate</div>
            {/* {false && (
                <div
                    style={{
                        height: '70px',
                        display: 'flex',
                        alignItems: 'center',
                        width: '100px',
                        justifyContent: 'center',
                        cursor: 'pointer'
                    }}
                >
                    <img
                        src={user}
                        style={{
                            height: '50px'
                        }}
                        alt="user"
                    />
                </div>
            )} */}
        </header>
    );
};

export default header;
