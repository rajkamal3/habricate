import React from 'react';

const Modal = ({ click }) => {
    return (
        <div
            style={{
                backgroundColor: '#222',
                position: 'absolute',
                width: '100%',
                height: '100%',
                opacity: '0.05',
                color: 'red',
                zIndex: 99
            }}
            className="modal"
            onClick={click}
        ></div>
    );
};

export default Modal;
