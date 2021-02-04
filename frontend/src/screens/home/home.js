import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllHabitsOfUser, fetchSingleHabit } from '../../actions/habitActions';
import styles from './home.module.css';
import book from './../../assets/images/book.png';
import arrow from './../../assets/images/habitArrow.png';
import Spinner from '../../ui/spinner/spinner';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const userHabitsStore = useSelector(state => state.userHabits);
    const { loading, habits } = userHabitsStore;

    const toHabit = id => {
        dispatch(fetchSingleHabit(id));
    };

    useEffect(() => {
        dispatch(fetchAllHabitsOfUser());
    }, [dispatch]);

    return (
        <div className={styles.homeScreenContainer}>
            {loading && <Spinner />}
            {habits && (
                <div className={styles.homeScreenContainerChild}>
                    <div className={styles.currentHabitsTitle}>Current habits</div>
                    {habits.map(habit => {
                        return (
                            <Link
                                to={`/habits/${habit._id}`}
                                className={styles.eachHabit}
                                key={habit._id}
                                data-id={habit._id}
                                onClick={() => toHabit(habit._id)}
                            >
                                <div className={styles.eachHabitChild}>
                                    <div className={styles.habitImageContainer}>
                                        <img src={book} width="30px" alt="book" />
                                    </div>
                                    <div className={styles.habitDetailsContainer}>
                                        <div
                                            style={{
                                                color: '#66a851'
                                            }}
                                        >
                                            {habit.name}
                                        </div>
                                        <div>{habit.doAtTime.join(', ')}</div>
                                        <div>{`${habit.dailyTarget} ${habit.dailyTargetUnit.toLowerCase()} per day`}</div>
                                    </div>
                                    <div className={styles.eachHabitRightArrow}>
                                        <img src={arrow} alt="arrow" width="6px" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <div
                            style={{
                                width: '140px',
                                height: '40px',
                                // backgroundColor: 'red',
                                fontWeight: '700',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10px',
                                color: 'rgb(102, 168, 81)',
                                boxShadow: 'rgb(0 0 0 / 25%) 0px 0px 20px -3px',
                                marginTop: '18px',
                                cursor: 'pointer'
                            }}
                        >
                            Add habit
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomeScreen;
