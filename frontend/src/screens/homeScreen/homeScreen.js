import React from 'react';
import CurrentHabits from './../../components/currentHabits/currentHabits';
import user from './../../assets/images/user.png';

const HomeScreen = ({ data }) => {
    return (
        <div>
            <header
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    height: '70px',
                    width: '100%',
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    boxShadow: '0px -25px 40px 0px rgba(0,0,0,0.5)'
                }}
            >
                <div
                    style={{
                        height: 'inherit',
                        width: '220px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: '900',
                        fontSize: '34px',
                        color: '#66a851'
                    }}
                >
                    Habricate
                </div>
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
            </header>
            {/* <CurrentHabits data={data} /> */}
        </div>
    );
};

export default HomeScreen;
