import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from './../../ui/spinner/spinner';
import styles from './singleHabit.module.css';
import pen from './../../assets/images/pen.png';
import { fetchSingleHabit } from '../../actions/habitActions';
import { setCurrentPageAction } from '../../actions/uiActions';

const SingleHabit = ({ history }) => {
    const dispatch = useDispatch();
    const id = history.location.pathname.split('/')[2];
    const habitState = useSelector(state => state.singleHabit);
    const { loading, habit } = habitState;

    useEffect(() => {
        dispatch(fetchSingleHabit(id));
        dispatch(setCurrentPageAction('singleHabit'));
        // console.log(Date());
    }, [dispatch, id]);

    const postChecked = id => {
        console.log(id);
    };

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
                                {habit.doAtTime.map(goal => {
                                    return (
                                        <div
                                            key={goal._id}
                                            data-id={goal._id}
                                            className={styles.doAtGoal}
                                            onClick={e => postChecked(e.target.parentNode.getAttribute('data-id'))}
                                        >
                                            <input type="checkbox" id={goal._id} defaultChecked={goal.checked} />
                                            <label htmlFor={goal._id}>
                                                {goal.time} - {habit.averageGoal} {habit.dailyTargetUnit} {goal._id}
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
