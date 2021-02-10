import React, { useState } from 'react';
import plus from './../../assets/images/plus.png';
import minus from './../../assets/images/minus.png';
import styles from './addHabit.module.css';

const AddHabit = () => {
    const [times, setTimes] = useState([]);
    const [habitTitle, setHabitTitle] = useState('');
    const [location, setLocation] = useState('');
    const [dailyGoal, setDailyGoal] = useState('');
    const [reminder, setReminder] = useState(false);
    const [plusMinus, setPlusMinus] = useState(false);

    // const extraTimeHTML = <input type="time" className={styles.addHabitDateInput} onChange={e => setTimes(e.target.value)} />;

    const timingsArr = [];

    const addExtraTiming = () => {
        document
            .querySelector('.timingsContainer')
            .insertAdjacentHTML(
                'beforeend',
                `<span class='timingCounter'>,&nbsp;<input class='${styles.addHabitDateInput}' type="time" /></span>`
            );

        const counterToDisplayPlusMinus = document.querySelectorAll('.timingCounter').length;
        if (counterToDisplayPlusMinus > 0) {
            setPlusMinus(true);
        }
    };

    const removeExtraTiming = () => {
        const timingCounterForRemoval = document.querySelectorAll('.timingCounter');
        const removeEl = document.querySelectorAll('.timingCounter')[timingCounterForRemoval.length - 1];
        document.querySelector('.timingsContainer').removeChild(removeEl);

        const counterToDisplayPlusMinus = document.querySelectorAll('.timingCounter').length;
        if (counterToDisplayPlusMinus === 0) {
            setPlusMinus(false);
        }
    };

    const addHabit = () => {
        console.log(times);
        console.log(habitTitle);
        console.log(location);
        console.log(dailyGoal);
        console.log(reminder);
    };

    return (
        <div className={styles.addHabitContainer}>
            <div className={styles.addHabitContainerChild}>
                <div>
                    At{' '}
                    <span className="timingsContainer">
                        <input type="time" className={styles.addHabitDateInput} onChange={e => setTimes(e.target.value)} />
                    </span>
                    <img onClick={addExtraTiming} className={styles.addExtraTimeImage} src={plus} alt="plus" width="22px" />
                    {plusMinus && (
                        <img onClick={removeExtraTiming} className={styles.addExtraTimeImage} src={minus} alt="plus" width="22px" />
                    )}
                    <span>
                        {' '}
                        everyday, I want to{' '}
                        <input
                            type="text"
                            className={styles.addHabitTextInputs}
                            onChange={e => setHabitTitle(e.target.value)}
                            placeholder="read a book"
                        />{' '}
                        at the{' '}
                        <input
                            type="text"
                            className={styles.addHabitTextInputs}
                            onChange={e => setLocation(e.target.value)}
                            placeholder="study table"
                        />
                        .
                    </span>
                </div>
                <div>
                    <input type="checkbox" id="dailyGoal" />
                    <label htmlFor="dailyGoal">
                        Daily goal:{' '}
                        <input
                            type="number"
                            className={styles.addHabitDateInput}
                            onChange={e => setDailyGoal(e.target.value)}
                            placeholder="   30"
                            style={{ width: '50px' }}
                        />{' '}
                        <input
                            type="text"
                            className={styles.addHabitDateInput}
                            onChange={e => setReminder(!reminder)}
                            placeholder="pages"
                        />
                    </label>
                </div>
                <div>
                    <input type="checkbox" id="reminder" />
                    <label htmlFor="reminder">Reminder</label>
                </div>
                <div className={styles.addHabitButtonContainer}>
                    <div className={styles.addHabitButton} onClick={addHabit}>
                        Add habit
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddHabit;
