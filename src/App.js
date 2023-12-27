import React from 'react';
import Board from './components/Board';
import Modal from './components/Modal';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Board />
      <Modal />
    </div>
  );
};

export default App;


