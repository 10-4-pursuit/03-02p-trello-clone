import { useState } from "react";
import InputField from "./common/InputField";
import Button from "./common/Button";
import "./AddCard.css";
import './common/Button.css'

const AddCard = ({ listId, onAddCard }) => {
    const [showForm, setShowForm] = useState(false);
    const [cardTitle, setCardTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCard(listId, { title: cardTitle });
        setCardTitle('');
        setShowForm(false); 
    };

    return (
        <div className="add-card-container">
            {showForm ? (
                <form onSubmit={handleSubmit}>
                    <InputField
                        type="text" 
                        value={cardTitle} 
                        onChange={(e) => setCardTitle(e.target.value)} 
                        placeholder="Enter card title"
                    />
                    <Button type="submit">Add Card</Button>
                    <Button onClick={() => setShowForm(false)}>Cancel</Button>
                </form>
            ) : (
                <Button onClick={() => setShowForm(true)}>Add Card</Button>
            )}
        </div>
    );
};


export default AddCard;