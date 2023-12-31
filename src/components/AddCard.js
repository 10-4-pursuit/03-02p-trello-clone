import { useState } from "react";
import "./AddCard.css";
import "./common/Button.css";


const AddCard = ({ listId, onAddCard }) => {
  const [showForm, setShowForm] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [labels, setLabels] = useState([{ id: 1, name: "", color: "#ffffff" }]);

  
    




  const handleLabelChange = (index, field, value) => {
    const newLabels = [...labels];
    newLabels[index] = { ...newLabels[index], [field]: value };
    setLabels(newLabels);
};

   const addNewLabel = () => {
        setLabels([...labels, { id: labels.length + 1, name: '', color: '#ffffff' }]);
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCard(listId, {
      title: cardTitle,
      description,
      dueDate,
      labels, 
    });
    setCardTitle("");
    setShowForm(false);
    setLabels([{ id: 1, name: "", color: "#ffffff" }]);
    setDescription("");
    setDueDate("");
  };

  return (
    <div className="add-card-container">
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
            placeholder="Enter card title"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter card description"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

       
         
         {labels.map((label, index) => (
                        <div key={label.id} className="add-card-label">
                            <input
                                className="label-name-input"
                                type="text"
                                value={label.name}
                                onChange={(e) => handleLabelChange(index, 'name', e.target.value)}
                                placeholder="Label name"
                            />
                            <input 
                                className="label-color-input"
                                type="color"
                                value={label.color}
                                onChange={(e) => handleLabelChange(index, 'color', e.target.value)}
                            />
                        </div>
                    ))}
                    <button type="button" onClick={addNewLabel}>Add Label</button>

          <button type="submit">Add Card</button>
          <button onClick={() => setShowForm(false)}>Delete</button>
        </form>
      ) : (
        <button onClick={() => setShowForm(true)}>Add Card</button>
      )}
    </div>
  );
};

export default AddCard;
