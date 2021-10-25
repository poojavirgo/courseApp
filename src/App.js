import React, { useState } from 'react';
import CourseGoalList from './components/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseInput/CourseInput';
import './App.css';

const App = () => {

  const [courseGoals, setCourseGoals] = useState([
    { id: 1, label: 'Do All Excercises' },
    { id: 2, label: 'Finish the courses' }]);

  const onAddingGoalHandler = (newGoal) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ id: Math.random().toString(), label: newGoal });
      return updatedGoals;
    });
  }

  const onDeleteItemHandler = (goalId) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;

    })
  }

  let content = <p>No Goals Found!!</p>;
  if (courseGoals.length > 0) {
    content = <CourseGoalList goals={courseGoals} onDeleteItem={onDeleteItemHandler} />;
  }

  return (
    <div >
      <section id="goal-form">
        <CourseInput addGoal={onAddingGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
}

export default App;
