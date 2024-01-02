import {  useState } from "react";
import List from "./List";
import  cardData  from "../data";
import "./Board.css";





const Board = ({ board}) => {

 
  const [lists, setLists] = useState([
    { id: 1, title: 'To Do', cards: cardData.filter(card => card.listId === 1) },
    { id: 2, title: 'In Progress', cards: cardData.filter(card => card.listId === 2) },
    { id: 3, title: 'Done', cards: cardData.filter(card => card.listId === 3) }
  ]);

  const handleCardDropped = (targetListId, cardId) => {
    setLists(prevLists => {
        // Find the source list and the card being moved
        let sourceList = prevLists.find(list => list.cards.some(card => card.id === cardId));
        let card = sourceList ? sourceList.cards.find(c => c.id === cardId) : null;

        // If the card and source list are found and the target list is different
        if (card && sourceList.id !== targetListId) {
            // Remove the card from the source list
            let newSourceListCards = sourceList.cards.filter(c => c.id !== cardId);

            // Add the card to the target list
            return prevLists.map(list => {
                if (list.id === sourceList.id) {
                    return { ...list, cards: newSourceListCards };
                } else if (list.id === targetListId) {
                    return { ...list, cards: [...list.cards, card] };
                }
                return list;
            });
        }

        // Return the lists unchanged if the card is not found or dropped in the same list
        return prevLists;
    });
};

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

const handleEditCard = (cardId, updatedCard) => {
  setLists(prevLists => prevLists.map(list => ({
      ...list,
      cards: list.cards.map(card => card.id === cardId ? { ...card, ...updatedCard } : card)
  })));
}







return (
  <div className="board">
    <h1>Trello Board Clone</h1>
    {lists.map((list) => (
      <List
        key={list.id}
        listId={list.id}
        title={list.title}
        cards={list.cards}
        onEditCard={handleEditCard}
        onDeleteCard={handleDeleteCard}
        onAddCard={handleAddCard}
        onCardDropped={handleCardDropped}
        
      />
    ))}
  </div>
);
};

export default Board;
