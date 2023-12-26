import React from 'react';
import Board from './components/Board';
import Modal from './components/Modal';
import ParentComponent from './components/ParentComponent';
import Button from './components/common/Button';
import InputField from './components/common/InputField';
import Label from './components/common/Label';
import './App.css';

const App = () => {
  return (
    <div className="app">
      {/* Your components and layout */}
      <Board />
      <Modal />
      <ParentComponent />

      {/* Example usage of Button, InputField, and Label */}
      {/* You can remove or adjust these based on your actual application layout */}
      <Button>Example Button</Button>
      <InputField type="text" placeholder="Example Input" />
      <Label htmlFor="exampleInput">Example Label</Label>
      
      {/* Rest of your components */}
    </div>
  );
};

export default App;


