import { useState, createContext, useContext } from "react";

export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const [boards, setBoards] = useState([]);

  const addBoard = (NewBoard) => {
    setBoards([...boards, NewBoard]);
  };

  const contextValue = {
    boards,
    addBoard,
  };

  return (
    <BoardContext.Provider
     value={contextValue}>
    {children}
    </BoardContext.Provider>
  )
  
};

export const useBoard = () => useContext(BoardContext);
