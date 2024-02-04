import React from "react";
import BoardContext from "./BoardContext";

export default function BoardProvider({ children }) {
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
        <BoardContext.Provider value={{ board, setBoard, showNewListForm, setShowNewListForm, newListTitle, setNewListTitle, handleCardSubmit, handleListSubmit }}>
            {children}
        </BoardContext.Provider>
    )
}