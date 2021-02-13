import React, { useState } from 'react';
import plus from './../../assets/images/plus.png';
import minus from './../../assets/images/minus.png';
import styles from './addHabit.module.css';

const AddHabit = () => {
    let defaultTime = [];
    let addedTimes = [];

    const [times, setTimes] = useState([]);
    const [habitTitle, setHabitTitle] = useState('');
    const [location, setLocation] = useState('');
    const [dailyGoalCheck, setDailyGoalCheck] = useState(false);
    const [dailyGoalQuantity, setDailyGoalQuantity] = useState('');
    const [dailyGoalUnits, setDailyGoalUnits] = useState('');
    const [reminder, setReminder] = useState(false);
    const [plusImg, setPlusImg] = useState(true);
    const [minusImg, setMinusImg] = useState(false);

    const addExtraTiming = () => {
        document
            .querySelector('.timingsContainer')
            .insertAdjacentHTML(
                'beforeend',
                `<span class='timingCounter'>,&nbsp;<input class='${styles.addHabitDateInput} addedTimes' type="time" /></span>`
            );

        const counterToDisplayMinus = document.querySelectorAll('.timingCounter').length;
        if (counterToDisplayMinus > 0) {
            setMinusImg(true);
        }
        if (counterToDisplayMinus > 4) {
            setPlusImg(false);
        }
    };

    const removeExtraTiming = () => {
        const timingCounterForRemoval = document.querySelectorAll('.timingCounter');
        const removeEl = document.querySelectorAll('.timingCounter')[timingCounterForRemoval.length - 1];
        document.querySelector('.timingsContainer').removeChild(removeEl);

        const counterToDisplayMinus = document.querySelectorAll('.timingCounter').length;
        if (counterToDisplayMinus === 0) {
            setMinusImg(false);
        }
        if (counterToDisplayMinus <= 4) {
            setPlusImg(true);
        }
    };

    const addHabit = () => {
        const defaultTimeVar = document.querySelector('.defaultTime').value;
        const addedTimesVar = document.querySelectorAll('.addedTimes');

        let addedTimesArr = [];

        for (let i = 0; i < addedTimesVar.length; i++) {
            addedTimesArr.push(addedTimesVar[i].value);
        }

        console.log([defaultTimeVar, ...addedTimesArr]);

        // console.log(addedTimesVar);
        // console.log(times);
        // console.log(habitTitle);
        // console.log(location);
        // console.log(dailyGoal);
        // console.log(reminder);
    };

    return (
        <div className={styles.addHabitContainer}>
            <div className={styles.addHabitContainerChild}>
                <div>
                    At{' '}
                    <span className="timingsContainer">
                        <input
                            type="time"
                            className={[styles.addHabitDateInput, 'defaultTime'].join(' ')}
                            onChange={e => setTimes(e.target.value)}
                        />
                    </span>
                    {plusImg && <img onClick={addExtraTiming} className={styles.addExtraTimeImage} src={plus} alt="plus" width="22px" />}
                    {minusImg && (
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
                        <span>
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
                        </span>
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
