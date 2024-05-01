import jsonData from "../Data/base.json";
import React from 'react';
import TaskCard from './TaskCard';
import "../Styles/TaskCardStyles.css";

const TaskListComponent = () => {
  return (
    <div className="task-list">
      {jsonData.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskListComponent;
