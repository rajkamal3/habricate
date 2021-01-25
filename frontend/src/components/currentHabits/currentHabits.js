import React from 'react';

const currentHabits = ({ data }) => {
    console.log(data);
    return (
        <div>
            <div
                style={{
                    width: '500px',
                    height: '150px',
                    backgroundColor: 'red',
                    borderRadius: '10px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: 'rgb(0 0 0 / 20%) 0px 0px 15px 0px'
                }}
            >
                <div
                    style={{
                        height: '75%',
                        width: '90%',
                        backgroundColor: 'green',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <div
                        className="image"
                        style={{
                            backgroundColor: '#edeeef',
                            height: '100%',
                            width: '100px',
                            borderRadius: '10px'
                        }}
                    >
                        image
                    </div>
                    <div
                        className="image"
                        style={{
                            height: '100%',
                            backgroundColor: 'rebeccapurple',
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <div>details</div>
                        <div>arrow</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default currentHabits;
