import React from "react";
import { useDrag } from 'react-dnd';
import "./Card.css";
import Button from "./common/Button";

const Card = ({ cardData, onDeleteCard }) => {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: { id: cardData.id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={dragRef} 
      className="card"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className={`card-priority ${cardData.priority}`}></div>
      <h4>{cardData.title}</h4>
      <p>{cardData.description}</p>
      {cardData.dueDate && (
        <p className="card-due-date">Due: {cardData.dueDate}</p>
      )}
      <div className="card-labels">
        {cardData.labels &&
          cardData.labels.map((label) => (
            <span key={label.id} className="card-label" style={{ backgroundColor: label.color }}>
              {label.name}
            </span>
          ))}
      </div>
      <Button className="delete-card-button" onClick={() => onDeleteCard(cardData.id)}>
        Delete
      </Button>
    </div>
  );
};

export default Card;


