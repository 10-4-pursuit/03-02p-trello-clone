import React from "react";
import "./Card.css";
import Button from "./common/Button";

const Card = ({ cardData, cardDragStart, onEditCard, onDeleteCard }) => {
  return (
    <div
      className="card"
      draggable
      onDragStart={(e) => cardDragStart(e, cardData.id)}
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
            <span
              key={label.id}
              className="card-label"
              style={{ backgroundColor: label.color }}
            >
              {label.name}
            </span>
          ))}

        <Button
          className="delete-card-button"
          onClick={() => onDeleteCard(cardData.id)}
        >
          Delete
        </Button>
        <Button
          className="edit-card-button"
          onClick={() => onEditCard(cardData)}
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default Card;
