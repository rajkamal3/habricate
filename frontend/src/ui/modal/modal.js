import React from 'react';
import styles from './modal.module.css';

const Modal = ({ click }) => {
    return <div className={[styles.modal, 'modal'].join(' ')} onClick={click}></div>;
};

export default Modal;
