import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Board from './components/Board';
import './App.css';
import BoardProvider  from './context/BoardContext';




const App = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <BoardProvider>
        <div className="app">
          
          <Board />
        </div>
      </BoardProvider>
    </DndProvider>
  );
};

export default App;



