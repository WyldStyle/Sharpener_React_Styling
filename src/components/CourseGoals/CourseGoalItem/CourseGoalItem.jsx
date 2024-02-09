// import React from 'react';

import { useState } from "react";

import './CourseGoalItem.css';

// const CourseGoalItem = props => {
//   // const [deleteText, setDeleteText] = useState('');

//   const deleteHandler = () => {
//     // setDeleteText('(Deleted!)');
//     props.onDelete(props.id);
//   };

//   return (
//     <li className="goal-item" onClick={deleteHandler}>
//       {props.children}
//     </li>
//   );
// };

// export default CourseGoalItem;

const CourseGoalItem = ({courseGoalArrItem,singleGoal, setCourseGoalArr})=>{
  // console.log('singleGoal in item',singleGoal);
  const goalId = singleGoal.id;
  const editGoal = (id)=>{
    return(
      <input placeholder="enter new goal" ></input>
    )
  }
  const deleteGoal = () =>{
    setCourseGoalArr(prevGoals =>{
      // const updatedArr = prevGoals.filter(goals => goals.id !== goalId);
      const updatedArr = [];
      // console.log('courseGoalArr =',courseGoalArrItem, 'prevGoals =',prevGoals);
      for(let i = 0; i < prevGoals.length; i++){
        // console.log('goalId = ',goalId, 'prevGoals[i].id=',prevGoals[i].id);
        if(prevGoals[i].id !== goalId){
          updatedArr.push(prevGoals[i]);
        }
      }
      return updatedArr;
    })
    console.log(courseGoalArrItem);
  }
  return (
    <>
    <li className="goal-item" >{singleGoal.text}</li>
    <button onClick={editGoal}>Edit</button>
    <button onClick={deleteGoal}>Delete</button>
    </>
  )
}
export default CourseGoalItem