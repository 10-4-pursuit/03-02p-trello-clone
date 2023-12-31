import React, { createContext, useContext, useState } from 'react';

export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const [boards, setBoards] = useState([]);

  const addBoard = (newBoard) => {
    setBoards([...boards, newBoard]);
  };

  return (
    <BoardContext.Provider value={{ addBoard }}>
      {children}
    </BoardContext.Provider>
  );
};

export const useBoard = () => useContext(BoardContext);

