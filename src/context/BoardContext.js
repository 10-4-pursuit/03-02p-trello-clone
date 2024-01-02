import React, { createContext, useState, useContext } from 'react';
import cardData from '../data';

export const BoardContext = createContext();

const BoardProvider = ({ children }) => {
    const [boards, setBoards] = useState([
        {
            id: 1,
            title: 'Board 1',
            lists: [
                { id: 1, title: 'To Do', cards: cardData.filter(card => card.listId === 1) },
                { id: 2, title: 'In Progress', cards: cardData.filter(card => card.listId === 2) },
                { id: 3, title: 'Done', cards: cardData.filter(card => card.listId === 3) },
            ]
        }
        
    ]);

    const addBoard = (newBoard) => {
        setBoards(prevBoards => [...prevBoards, { ...newBoard, id: Date.now() }]);
    }

    return (
        <BoardContext.Provider value={{ boards, setBoards, addBoard }}>
            {children}
        </BoardContext.Provider>
    );
};

export default BoardProvider;

export const useBoard = () => useContext(BoardContext);


