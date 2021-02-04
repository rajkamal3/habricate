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
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                    >
                        <div className={styles.currentHabitTitle}>{habit && habit.name}</div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                width: '95px',
                                border: '2px solid rgb(102, 168, 81)',
                                borderRadius: '5px',
                                padding: '1px 6px',
                                backgroundColor: 'rgb(102, 168, 81)',
                                height: '30px',
                                color: 'white',
                                fontWeight: '500'
                            }}
                        >
                            <span>
                                <img src={pen} alt="pen" width="14px" />
                            </span>
                            <span>Edit habit</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SingleHabit;
