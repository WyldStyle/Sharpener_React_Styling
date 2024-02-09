import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

export default function App() {
    const [courseGoalsArr, setCourseGoalArr] = useState(
    [
      { text: 'This is test1', id: `${new Date()}` },
      { text: 'This is test2', id: 2 }
    ]
    )
    let contentList = "";
    if(!courseGoalsArr.length) contentList = "No goals decided"
  return (
    <div>
      <div id="goal-form">
        <CourseInput courseGoalsArrApp={courseGoalsArr} setCourseGoalArr = {setCourseGoalArr}/>
        <section id='goals'>{contentList}</section>
        <CourseGoalList courseGoalArrApp={courseGoalsArr} setCourseGoalArr = {setCourseGoalArr}/>
      </div>
    </div>
  )
}
