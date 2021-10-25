import React from 'react';
import './CourseGoalList.css';
import CourseGoalItem from '../CourseGoalItems/CourseGoalItems';

const CourseGoalList = (props) => {

    return (
        <ul className="goal-list">
            {props.goals.map(goal => {
                return (
                    <CourseGoalItem
                        onDelete={props.onDeleteItem}
                        key={goal.id}
                        id={goal.id}>
                        {goal.label}
                    </CourseGoalItem>
                )
            })

            }
        </ul>
    );

}


export default CourseGoalList;