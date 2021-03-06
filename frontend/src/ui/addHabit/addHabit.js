import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSingleHabit } from './../../actions/habitActions';
import plus from './../../assets/images/plus.png';
import minus from './../../assets/images/minus.png';
import styles from './addHabit.module.css';

const AddHabit = ({ click }) => {
    const dispatch = useDispatch();

    const [times] = useState([]);
    const [habitTitle, setHabitTitle] = useState('');
    const [location, setLocation] = useState('');
    const [dailyGoalCheck, setDailyGoalCheck] = useState(false);
    const [dailyGoalQuantity, setDailyGoalQuantity] = useState(0);
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

        updateExtraTime();
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

        updateExtraTime();
    };

    const updateExtraTime = async () => {
        const defaultTimeVar = document.querySelector('.defaultTime').value;
        const addedTimesVar = Array.from(document.querySelectorAll('.addedTimes'));

        let addedTimesArr = [];

        for (let i = 0; i < addedTimesVar.length; i++) {
            addedTimesArr.push(addedTimesVar[i].value);
        }

        const totalTimes = [defaultTimeVar, ...addedTimesArr];

        while (times.length > 0) {
            times.pop();
        }

        times.push(...totalTimes);
    };

    const toggleDailyGoal = () => {
        setDailyGoalCheck(!dailyGoalCheck);
    };

    const toggleReminder = () => {
        setReminder(!reminder);
    };

    const addHabit = () => {
        updateExtraTime();
        dispatch(addSingleHabit(habitTitle, times, location, dailyGoalQuantity, dailyGoalUnits));
        click();
    };

    const capitalize = title => {
        if (typeof title !== 'string') return '';
        const newTitle = title.charAt(0).toUpperCase() + title.slice(1);
        return newTitle;
    };

    return (
        <div className={styles.addHabitContainer}>
            <div className={styles.addHabitContainerChild}>
                <div>
                    At{' '}
                    <span className="timingsContainer">
                        <input type="time" className={[styles.addHabitDateInput, 'defaultTime'].join(' ')} />
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
                            onChange={e => setHabitTitle(capitalize(e.target.value))}
                            placeholder="read a book"
                        />{' '}
                        at{' '}
                        <input
                            type="text"
                            className={styles.addHabitTextInputs}
                            onChange={e => setLocation(capitalize(e.target.value))}
                            placeholder="study table"
                        />
                        .
                    </span>
                </div>
                <div>
                    <input type="checkbox" id="dailyGoal" onChange={toggleDailyGoal} />
                    <span className={dailyGoalCheck ? styles.dailyGoalEnable : styles.dailyGoalDisable}>
                        <label htmlFor="dailyGoal">
                            Daily goal:{' '}
                            <input
                                type="number"
                                className={[styles.addHabitDateInput, styles.dailyGoalInput].join(' ')}
                                onChange={e => setDailyGoalQuantity(e.target.value)}
                                placeholder="   30"
                            />{' '}
                            <input
                                type="text"
                                className={styles.addHabitDateInput}
                                onChange={e => setDailyGoalUnits(capitalize(e.target.value))}
                                placeholder="pages"
                            />
                        </label>
                    </span>
                </div>
                <div>
                    <input type="checkbox" id="reminder" onChange={toggleReminder} />
                    <label className={reminder ? styles.dailyGoalEnable : styles.dailyGoalDisable} htmlFor="reminder">
                        Reminder
                    </label>
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
