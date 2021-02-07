import React, { useState } from 'react';
import plus from './../../assets/images/plus.png';
import styles from './addHabit.module.css';

const AddHabit = () => {
    const [times, setTimes] = useState([]);
    const [habitTitle, setHabitTitle] = useState('');
    const [location, setLocation] = useState('');
    const [dailyGoal, setDailyGoal] = useState('');
    const [reminder, setReminder] = useState(false);

    console.log(times);

    return (
        <div className={styles.addHabitContainer}>
            <div className={styles.addHabitContainerChild}>
                <div>
                    At <input type="time" className={styles.addHabitDateInput} onChange={e => setTimes(e.target.value)} />{' '}
                    <input type="time" className={styles.addHabitDateInput} onChange={e => setTimes(e.target.value)} />{' '}
                    <img src={plus} alt="plus" width="22px" />
                    <span>
                        {' '}
                        everyday, I want to <input type="text" className={styles.addHabitTextInputs} placeholder="read a book" /> at the{' '}
                        <input type="text" className={styles.addHabitTextInputs} placeholder="study table" />.
                    </span>
                </div>
                <div>
                    <input type="checkbox" id="dailyGoal" />
                    <label htmlFor="dailyGoal">
                        Daily goal: <input type="text" className={styles.addHabitDateInput} placeholder="30" style={{ width: '50px' }} />{' '}
                        <input type="text" className={styles.addHabitDateInput} placeholder="pages" />
                    </label>
                </div>
                <div>
                    <input type="checkbox" id="reminder" />
                    <label htmlFor="reminder">Reminder</label>
                </div>
                <div className={styles.addHabitButtonContainer}>
                    <div className={styles.addHabitButton}>Add habit</div>
                </div>
            </div>
        </div>
    );
};

export default AddHabit;
