// import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem.jsx'
import './CourseGoalList.css';


const CourseGoalList = ({ courseGoalArrApp, setCourseGoalArr }) => {
  // console.log('arrin List', courseGoalArrApp, courseGoalArrApp[0]);
  return (
    <div>
      {
        courseGoalArrApp.map(single_goal =>(
          <CourseGoalItem courseGoalArrItem={courseGoalArrApp} singleGoal={single_goal} setCourseGoalArr = {setCourseGoalArr}/>
        ))
      }
    </div>
  )
}
export default CourseGoalList