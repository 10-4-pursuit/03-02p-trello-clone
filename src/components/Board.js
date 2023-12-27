import { useState } from "react";
import List from "./List";
import  useDragDrop  from "../hooks/useDragDrop";
import  cardData  from "../data";
import "./Board.css";



const Board = () => {
  const [lists, setLists] = useState([
    { id: 1, title: 'To Do', cards: cardData.filter(card => card.listId === 1) },
    { id: 2, title: 'In Progress', cards: cardData.filter(card => card.listId === 2) },
    { id: 3, title: 'Done', cards: cardData.filter(card => card.listId === 3) }
  ]);
  const { cardDragStart, cardDragOver, cardDrop } = useDragDrop(setLists);

  const handleAddCard = (listId, newCard) => {
    setLists(lists.map(list => {
        if (list.id === listId) {
            return { ...list, cards: [...list.cards, { ...newCard, id: Math.random() /* Generate unique ID here */ }] };
        }
        return list;
    }));
};

const handleDeleteCard = (cardId) => {
  setLists(prevLists => prevLists.map(list => ({
      ...list,
      cards: list.cards.filter(card => card.id !== cardId)
  })));
};

const handleEditCard = (updatedCardData) => {
  setLists(prevLists => prevLists.map(list => ({
      ...list,
      cards: list.cards.map(card => card.id === updatedCardData.id ? updatedCardData : card)
  })));
};







  return (

 
    <div className="board">
      <h1>Board</h1>
      { lists.map((list) =>
       <List
        key={list.id}
        listId={list.id}
        title={list.title}
        cards={list.cards}
        onEditCard={handleEditCard}
        onDeleteCard={handleDeleteCard}
        onAddCard={handleAddCard}
        cardDragStart={cardDragStart}
        cardDragOver={cardDragOver}
        cardDrop={cardDrop}
         />)}
    </div>
  );
};

export default Board;
