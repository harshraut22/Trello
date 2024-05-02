import "../Styles/TaskCardStyles.css";
import React from "react";
import Card from "./Card";

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <div className="task-card-header">
        <h2 className="task-title">{task.title}</h2>
      </div>
      <div className="task-card-body">
        {task.cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
