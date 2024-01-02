import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Board from './components/Board';
import './App.css';
import BoardProvider  from './context/BoardContext';
import AddBoardComponent from './components/AddBoardComponent';



const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <BoardProvider>
        <div className="app">
          <AddBoardComponent />
          <Board />
        </div>
      </BoardProvider>
    </DndProvider>
  );
};

export default App;



