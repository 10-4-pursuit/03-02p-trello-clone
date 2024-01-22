import './App.css';
import React from 'react';
import Board from './components/Board';
import Lists from './components/Lists';
import Cards from './components/Cards';

function App() {

  const [board, setBoard] = React.useState({
    lists: [
      {
        id: 1,
        title: 'To Do',
        cards: [
          { id: 1, title: 'Task 1', description: 'Description 1', comments: [], dueDate: '2022-09-01', labels: [] },
        ]
      },
    ]
  });

  React.useEffect(() => {
    const savedBoard = localStorage.getItem('visionBoard');

    if (savedBoard) {
      setBoard(JSON.parse(savedBoard));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('visionBoard', JSON.stringify(board));
  }, [board]);

  const [showNewListForm, setShowNewListForm] = React.useState(false);

  const [newListTitle, setNewListTitle] = React.useState('');

  const handleCardSubmit = (listId, cardData) => {
    const newBoard = { ...board };
    const listIndex = newBoard.lists.findIndex(list => list.id === listId);

    if (listIndex > -1) {
      newBoard.lists[listIndex].cards.push({
        id: Date.now(),
        ...cardData
      });
      setBoard(newBoard);
    }
  };

  const handleListSubmit = (event) => {
    event.preventDefault();
    if (newListTitle.trim() !== "") {
      const newList = {
        id: Date.now(),
        title: newListTitle,
        cards: []
      };
      setBoard({ ...board, lists: [...board.lists, newList] });
      setNewListTitle('');
      setShowNewListForm(false);
    }
  };

  return (
    <div className="App">
      <h1>Vision Board</h1>
      <header className="App-header">

      </header>
      <main className='App-content'>
        <Board lists={board.lists}>
          {board.lists.map(list => (
            <Lists key={list.id} title={list.title} initialCards={list.cards}>
              {list.cards.map(card => (
                <Cards key={card.id} {...card} onCardSubmit={(cardData) => handleCardSubmit(list.id, cardData)} />
              ))}
            </Lists>
          ))}

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

        </Board>

      </main>

    </div>
  );
}

export default App;
