import React from "react";
import Card from "./Card";
import "./List.css";
import AddCard from "./AddCard";

const List = ({
  listId,
  title,
  cards,
  onAddCard,
  cardDragStart,
  cardDragOver,
  cardDrop,
  onEditCard,
  onDeleteCard
}) => {
  return (
    <div
      className="list"
      onDragOver={cardDragOver}
      onDrop={(e) => cardDrop(e, listId)}
    >
      <h3>{title}</h3>
      <div className="cards-container">
        {cards && cards.map((card) => ( 
          <Card 
            key={card.id}
            cardData={card}
            cardDragStart={cardDragStart}
            onEditCard={onEditCard}
            onDeleteCard={onDeleteCard}
          />
        ))}
        <AddCard listId={listId} onAddCard={onAddCard} />
      </div>
    </div>
  );
};

export default List;

