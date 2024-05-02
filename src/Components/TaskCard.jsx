import React from "react";
import Draggable from "react-draggable";
import Card from "./Card";

const TaskCard = ({ task }) => {
  return (
    <div className="task-card">
      <div className="task-card-header">
        <h2 className="task-title">{task.title}</h2>
      </div>
      <div className="task-card-body">
        {task.cards.map((card) => (
          <Draggable key={card.id}>
            <div>
              <Card card={card} />
            </div>
          </Draggable>
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
