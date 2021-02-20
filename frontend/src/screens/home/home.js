import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllHabitsOfUser, fetchSingleHabit } from '../../actions/habitActions';
import { openModalAction } from '../../actions/uiActions';
import { openAddHabitAction } from '../../actions/uiActions';
import styles from './home.module.css';
import book from './../../assets/images/book.png';
import arrow from './../../assets/images/habitArrow.png';
import Spinner from '../../ui/spinner/spinner';
import { Link } from 'react-router-dom';
import AddHabit from '../../ui/addHabit/addHabit';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const userHabitsFromStore = useSelector(state => state.userHabits);
    const { loading, habits } = userHabitsFromStore;

    const addHabitFromStore = useSelector(state => state.addHabit);
    const { openAddHabit } = addHabitFromStore;

    const toHabit = id => {
        dispatch(fetchSingleHabit(id));
    };

    useEffect(() => {
        dispatch(fetchAllHabitsOfUser());
    }, [dispatch]);

    const openModalClick = () => {
        dispatch(openModalAction());
        dispatch(openAddHabitAction());
        // document.body.querySelector('.homeScreenContainerChild').style.filter = 'blur(5px)';
        // document.body.querySelector('.header').style.filter = 'blur(5px)';
    };

    return (
        <div className={styles.homeScreenContainer}>
            {loading && <Spinner />}
            {openAddHabit && <AddHabit />}
            {habits && (
                <div className={[styles.homeScreenContainerChild, 'homeScreenContainerChild'].join(' ')}>
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
                    <div className={styles.addHabitButtonContainer}>
                        <div className={styles.addHabitButton} onClick={openModalClick}>
                            Add habit
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomeScreen;
