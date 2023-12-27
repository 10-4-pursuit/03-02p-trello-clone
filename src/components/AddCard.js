import { useState, useEffect } from "react";
import "./AddCard.css";
import "./common/Button.css";

const AddCard = ({ listId, onAddCard, onEditCard, editingCard }) => {
  const [showForm, setShowForm] = useState(false);
  const [cardTitle, setCardTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [labels, setLabels] = useState([{ id: 1, name: "", color: "#ffffff" }]);

  // Initialize form with editing card data if available
  useEffect(() => {
    if (editingCard) {
      setCardTitle(editingCard.title);
      setDescription(editingCard.description);
      setDueDate(editingCard.dueDate);
      setLabels(editingCard.labels || [{ id: 1, name: "", color: "#ffffff" }]);
      setShowForm(true); // Automatically show form if editing
    }
  }, [editingCard]);

  const handleLabelChange = (index, field, value) => {
    const newLabels = [...labels];
    newLabels[index] = { ...newLabels[index], [field]: value };
    setLabels(newLabels);
  };

  const addNewLabel = () => {
    setLabels([
      ...labels,
      { id: labels.length + 1, name: "", color: "#ffffff" },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cardData = {
      title: cardTitle,
      description,
      dueDate,
      labels,
    };

    if (editingCard) {
      onEditCard({ ...editingCard, ...cardData });
    } else {
      onAddCard(listId, cardData);
    }

    resetForm();
  };

  const resetForm = () => {
    setCardTitle("");
    setDescription("");
    setDueDate("");
    setLabels([{ id: 1, name: "", color: "#ffffff" }]);
    setShowForm(false);
  };

  return (
    <div className="add-card-container">
      {showForm && (
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
                onChange={(e) =>
                  handleLabelChange(index, "name", e.target.value)
                }
                placeholder="Label name"
              />
              <input
                className="label-color-input"
                type="color"
                value={label.color}
                onChange={(e) =>
                  handleLabelChange(index, "color", e.target.value)
                }
              />
            </div>
          ))}
          <button type="button" onClick={addNewLabel}>
            Add Label
          </button>

          <button type="submit">
            {editingCard ? "Save Changes" : "Add Card"}
          </button>
          <button type="button" onClick={() => setShowForm(false)}>
            Cancel
          </button>

    

          <button type="button" onClick={resetForm}>
            Reset
          </button>
        </form>
      )}

      {!showForm && (
        <button onClick={() => setShowForm(true)}>
          {editingCard ? "Edit Card" : "Add Card"}
          
        </button>
      )}
   
    </div>
  );
};

export default AddCard;
