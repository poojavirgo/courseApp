import React from 'react';
import './CourseGoalItems.css';

const CourseGoalItem = (props) => {
    const onDeleteHandler = () => {
        props.onDelete(props.id);
    }
    return (
        <li className="goal-item" onClick={onDeleteHandler}>
            {props.children}
        </li>
    );

}


export default CourseGoalItem;