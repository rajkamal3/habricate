import React from 'react';
import plus from './../../assets/images/plus.png';

const AddHabit = () => {
    return (
        <div
            style={{
                width: '85%',
                height: '30%',
                position: 'absolute',
                // marginTop: '34px',
                zIndex: '999',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: 'rgb(0 0 0 / 25%) 0px 0px 20px -3px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column'
            }}
        >
            <div
                style={{
                    width: '80%',
                    height: '65%',
                    // backgroundColor: 'red',
                    fontSize: '17px',
                    fontWeight: 500,
                    lineHeight: '24px',
                    color: '#888888'
                }}
            >
                <div>
                    At{' '}
                    <input
                        type="time"
                        style={{
                            width: '74px',
                            border: 'none',
                            borderBottom: '2px solid rgb(102, 168, 81)',
                            fontFamily: "'Gilroy'",
                            fontWeight: '500',
                            fontSize: '17px',
                            color: 'rgb(102, 168, 81)'
                        }}
                    />{' '}
                    <img src={plus} alt="plus" />
                    <span>
                        everyday, I want to{' '}
                        <input
                            type="text"
                            style={{
                                width: '100px',
                                border: 'none',
                                borderBottom: '2px solid rgb(102, 168, 81)',
                                fontFamily: "'Gilroy'",
                                fontWeight: '500',
                                fontSize: '17px',
                                color: 'rgb(102, 168, 81)'
                            }}
                            placeholder="read a book"
                        />{' '}
                        at the
                        <input
                            type="text"
                            style={{
                                width: '100px',
                                border: 'none',
                                borderBottom: '2px solid rgb(102, 168, 81)',
                                fontFamily: "'Gilroy'",
                                fontWeight: '500',
                                fontSize: '17px',
                                color: 'rgb(102, 168, 81)'
                            }}
                            placeholder="study table"
                        />
                        .
                    </span>
                </div>
            </div>
        </div>
    );
};

export default AddHabit;
