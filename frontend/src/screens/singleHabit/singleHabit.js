import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from './../../ui/spinner/spinner';
import styles from './singleHabit.module.css';
import pen from './../../assets/images/pen.png';
import { fetchSingleHabit } from '../../actions/habitActions';

const SingleHabit = ({ history }) => {
    const dispatch = useDispatch();
    const id = history.location.pathname.split('/')[2];
    const habitState = useSelector(state => state.singleHabit);
    const { loading, habit } = habitState;

    useEffect(() => {
        dispatch(fetchSingleHabit(id));
    }, [dispatch, id]);

    console.log(loading, habit);

    return (
        <div className={styles.singleHabitContainer}>
            {loading && <Spinner />}
            {habit && (
                <div className={styles.singleHabitContainerChild}>
                    <div className={styles.singleHabitTitleAndEditContainer}>
                        <div className={styles.currentHabitTitle}>{habit && habit.name}</div>
                        <div className={styles.editButtonContainer}>
                            <span>
                                <img src={pen} alt="pen" width="14px" />
                            </span>
                            <span>Edit habit</span>
                        </div>
                    </div>
                    <div className={styles.habitDetailsContainer}>
                        <div className={[styles.habitDetailsContainerChild, 'ticks'].join(' ')}>
                            <span>
                                {habit.doAtTime.map(time => {
                                    return (
                                        <div key={time} className={styles.doAtTime}>
                                            <input type="checkbox" id={`${time} - ${habit.averageGoal} ${habit.dailyTargetUnit}`} />
                                            <label htmlFor={`${time} - ${habit.averageGoal} ${habit.dailyTargetUnit}`}>
                                                {time} - {habit.averageGoal} {habit.dailyTargetUnit}
                                            </label>
                                        </div>
                                    );
                                })}
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleHabit;
