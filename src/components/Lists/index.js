import React from "react";
import Cards from "../Cards";
import BoardContext from "../../helpers/BoardContext";

export default function Lists({ listId, title, cards }) {

    const { handleCardSubmit } = React.useContext(BoardContext);

    const [newCardTitle, setNewCardTitle] = React.useState('');
    const [newCardDescript, setNewCardDescript] = React.useState('');
    const [newCardDueDate, setNewCardDueDate] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newCard = {
            title: newCardTitle,
            description: newCardDescript,
            dueDate: newCardDueDate,
        };
        handleCardSubmit(listId, newCard);
        setNewCardTitle('');
        setNewCardDescript('');
        setNewCardDescript('')
    };

    return (
        <div className="list">
            <form className="card-submit-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newCardTitle}
                    placeholder="Title"
                    onChange={(e) => {
                        setNewCardTitle(e.target.value);
                    }} />
                <input
                    type="text"
                    value={newCardDescript}
                    placeholder="Description..."
                    onChange={(e) => {
                        setNewCardDescript(e.target.value);
                    }} />
                <input
                    type="date"
                    value={newCardDueDate}
                    placeholder="Due Date"
                    onChange={(e) => {
                        setNewCardDueDate(e.target.vaule);
                    }} />
                    <button type="card-submit-button">Add Card</button>
            </form>
            <h3>{title}</h3>
            {cards.map(card => (
                <Cards key={card.id} {...card} />
            ))}
        </div>
    )
}