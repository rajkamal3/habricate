import React from 'react';
import styles from './spinner.module.css';

const Spinner = () => {
    return (
        <div className={styles.habricateFoldingCube}>
            <div className={[styles.habricateCube1, styles.habricateCube].join(' ')}></div>
            <div className={[styles.habricateCube2, styles.habricateCube].join(' ')}></div>
            <div className={[styles.habricateCube4, styles.habricateCube].join(' ')}></div>
            <div className={[styles.habricateCube3, styles.habricateCube].join(' ')}></div>
        </div>
    );
};

export default Spinner;
