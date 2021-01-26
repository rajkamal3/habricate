import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHabits } from './../../actions/habitActions';
import book from './../../assets/images/book.png';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const habitsStore = useSelector(state => state.habits);
    const { loading, habits } = habitsStore;

    useEffect(() => {
        dispatch(getHabits());
    }, [dispatch]);

    return (
        <div
            style={{
                // backgroundColor: 'red',
                width: '100%',
                height: 'calc(100vh - 70px)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#222'
            }}
        >
            <div
                style={{
                    width: '90%',
                    height: '93%'
                    // backgroundColor: 'green'
                }}
            >
                <div
                    style={{
                        fontWeight: '700'
                    }}
                >
                    Current habits
                </div>
                {loading && <div>Loading...</div>}
                {habits &&
                    habits.map(habit => {
                        return (
                            <div
                                style={{
                                    width: '100%',
                                    // backgroundColor: 'mediumvioletred',
                                    height: '150px',
                                    borderRadius: '10px',
                                    marginTop: '10px',
                                    boxShadow: '0px 0px 10px -3px rgba(0,0,0,0.5)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column'
                                }}
                                key={habit._id}
                            >
                                <div
                                    style={{
                                        // backgroundColor: 'orange',
                                        width: '90%',
                                        height: '75%',
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}
                                >
                                    <div
                                        style={{
                                            // backgroundColor: '#edeeef',
                                            width: '25%',
                                            borderRadius: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <img src={book} width="45px" alt="book" />
                                    </div>
                                    <div
                                        style={{
                                            // backgroundColor: '#81d4fa',
                                            width: '70%',
                                            boxSizing: 'border-box',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-around',
                                            fontSize: '20px',
                                            fontWeight: '500'
                                        }}
                                    >
                                        <div>{habit.name}</div>
                                        <div>{habit.doAt}</div>
                                        <div>{habit.goalUnits}</div>
                                    </div>
                                    <div
                                        style={{
                                            width: '5%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            fontWeight: '400',
                                            transform: 'scaleY(2)'
                                        }}
                                    >
                                        &#x3e;
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default HomeScreen;
