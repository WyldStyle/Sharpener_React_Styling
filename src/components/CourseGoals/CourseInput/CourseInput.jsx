import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => (props.invalid ? 'red' : 'black')};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 1px solid ${props => (props.invalid ? 'red' : '#ccc')};
//     background: ${props => (props.invalid ? '#ffd7d7' : 'transparent')};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }
// `;

// const CourseInput = props => {
//   const [enteredValue, setEnteredValue] = useState('');
//   const [isValid, setIsValid] = useState(true);

//   const goalInputChangeHandler = event => {
//     if (event.target.value.trim().length > 0) {
//       setIsValid(true);
//     }
//     setEnteredValue(event.target.value);
//   };

//   const formSubmitHandler = event => {
//     event.preventDefault();
//     if (enteredValue.trim().length === 0) {
//       setIsValid(false);
//       return;
//     }
//     props.onAddGoal(enteredValue);
//   };

//   return (
//     <form onSubmit={formSubmitHandler}>
//       <div
//         // className = {`form-control ${!isValid ? 'invalid' : ''}`}
//         //styles.form-control is invalid
//         // but since styles is an object we can access it like
//         className={`${styles['form-control']} ${!isValid && styles.invalid}`}

//       >
//         <label>Course Goal</label>
//         <input type="text" onChange={goalInputChangeHandler} />
//       </div>
//       <Button type="submit">Add Goal</Button>
//     </form>
//   );
// };

// export default CourseInput;

const CourseInput = ({ courseGoalsArrApp, setCourseGoalArr }) => {

  const [enteredValue, setEnteredValue] = useState('')
  const [isValid, setIsValid] = useState(false);



  const goalInputChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
      setEnteredValue(e.target.value);
    }
    else {
      setIsValid(false);
    }
  }
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (isValid) {
      addGoalHandler(enteredValue);
      console.log(courseGoalsArrApp);
    }
    else {
      console.log('wrong goal');
    }
  }
  const addGoalHandler = (enteredValue) => {
    setCourseGoalArr(prevGoals => {
      const updatedGoals = [];
      const single_goal = {
        text: enteredValue,
        id: new Date()
      }
      updatedGoals.push(single_goal)
      prevGoals.forEach(goal => {
        updatedGoals.push(goal)
      })
      return updatedGoals;
    })
  }

  return (
    <form action="" onSubmit={formSubmitHandler}>
      <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label htmlFor="newGoal">New Goal</label>
        <input type="text" name="newGoal" id="newGoal" onChange={goalInputChangeHandler} />
      </div>
      <Button type='submit'addOnClass = {isValid}>Add Goal</Button>
    </form>
  )
}
export default CourseInput