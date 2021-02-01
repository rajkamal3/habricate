import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAllHabitsOfUser } from './../../actions/habitActions';
import styles from './homeScreen.module.css';
import book from './../../assets/images/book.png';
import Spinner from './../../ui/spinner/spinner';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const userHabitsStore = useSelector(state => state.userHabits);
    const { loading, habits } = userHabitsStore;

    useEffect(() => {
        dispatch(fetchAllHabitsOfUser());
    }, [dispatch]);

    return (
        <div className={styles.homeScreenContainer}>
            <div className={styles.homeScreenContainerChild}>
                <div className={styles.currentHabitsTitle}>Current habits</div>
                {loading && <Spinner />}
                {habits &&
                    habits.map(habit => {
                        return (
                            <div className={styles.eachHabit} key={habit._id}>
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
                                        <div>{habit.dailyTargetUnit}</div>
                                    </div>
                                    <div className={styles.eachHabitRightArrow}>&#x3e;</div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default HomeScreen;
