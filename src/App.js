import './App.css';
import React from 'react';
import Board from './components/Board';
import Lists from './components/Lists';
import Cards from './components/Cards';
import BoardContext from './helpers/BoardContext';

function App() {
  const { board, setBoard, showNewListForm,setShowNewListForm, newListTitle, setNewListTitle, handleCardSubmit, handleListSubmit } = React.useContext(BoardContext)

  React.useEffect(() => {
    const savedBoard = localStorage.getItem('visionBoard');

    if (savedBoard) {
      setBoard(JSON.parse(savedBoard));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('visionBoard', JSON.stringify(board));
  }, [board]);

  return (
    <div className="App">
      <header className="App-header">
      <h1>Vision Board</h1>
      </header>
      <main className='App-content'>
        <Board lists={board.lists} />
        {showNewListForm ? (
            <form onSubmit={handleListSubmit}>
              <input
                type='text'
                value={newListTitle}
                onChange={(event) => setNewListTitle(event.target.value)}
                placeholder='List Title'
              />
            </form>
          ) : (
            <button onClick={() => setShowNewListForm(true)}>Add New List</button>
          )}
      </main>

    </div>
  );
}

export default App;
