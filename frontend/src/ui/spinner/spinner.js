import React from 'react';
import styles from './spinner.module.css';

const Spinner = () => {
    return (
        <div className={styles.skFoldingCube}>
            <div className={[styles.skCube1, styles.skCube].join(' ')}></div>
            <div className={[styles.skCube2, styles.skCube].join(' ')}></div>
            <div className={[styles.skCube4, styles.skCube].join(' ')}></div>
            <div className={[styles.skCube3, styles.skCube].join(' ')}></div>
        </div>
    );
};

export default Spinner;
