import React from "react";
import { useDrop } from 'react-dnd';
import Card from "./Card";
import "./List.css";
import AddCard from "./AddCard";

const List = ({
  listId,
  title,
  cards,
  onAddCard,
  onDeleteCard,
  onEditCard,
  onCardDropped // Function to handle card drop logic
}) => {
  const [, dropRef] = useDrop({
    accept: 'CARD',
    drop: (item, monitor) => {
      if (monitor) {
        onCardDropped(listId, item.id); // Handle the drop of the card
      }
    },
  });

  return (
    <div ref={dropRef} className="list">
      <h3>{title}</h3>
      <div className="cards-container">
        {cards && cards.map((card) => (
          <Card
            key={card.id}
            cardData={card}
            onDeleteCard={onDeleteCard}
            onEditCard={onEditCard}
          />
        ))}
        <AddCard listId={listId} onAddCard={onAddCard} />
      </div>
    </div>
  );
};

export default List;


