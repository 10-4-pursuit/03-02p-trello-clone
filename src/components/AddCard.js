import React, { useState } from "react";
import "./Card.css";
import Button from "./common/Button";
import InputField from "./common/InputField";
import Modal from "./Modal";
import './AddCard.css';

const AddCard = ({ listId, onAddCard }) => {
  const [cardTitle, setCardTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [labels, setLabels] = useState([{ id: 1, name: "", color: "#ffffff" }]);
  const [priority, setPriority] = useState("low");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [comments, setComments] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    resetForm();
  };

  const togglePriority = () => {
    switch (priority) {
      case "low":
        setPriority("medium");
        break;
      case "medium":
        setPriority("high");
        break;
      case "high":
        setPriority("urgent");
        break;
      case "urgent":
        setPriority("optional");
        break;
      default:
        setPriority("low");
    }
  };

  const priorityColor = {
    low: "green",
    medium: "orange",
    high: "red",
    urgent: "#ff00ff", // Example: magenta for urgent
    optional: "#cccccc", // Example: grey for optional
  };

  const addNewComment = () => {
    // Create a unique ID for the new comment
    const newId = comments.length > 0 ? Math.max(...comments.map(c => c.id)) + 1 : 1;
    setComments([...comments, { id: newId, text: "" }]);
  };
  

  const handleCommentChange = (index, value) => {
    const updatedComments = comments.map((comment, i) => {
      if (i === index) {
        return { ...comment, text: value };
      }
      return comment;
    });
    console.log(updatedComments);
    setComments(updatedComments);
  };
  
  

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
    onAddCard(listId, {
      title: cardTitle,
      description,
      dueDate,
      labels,
      priority,
    });
    closeModal();
  };

  const resetForm = () => {
    setCardTitle("");
    setDescription("");
    setDueDate("");
    setLabels([{ id: 1, name: "", color: "#ffffff" }]);
    setPriority("low");
    setComments([]);
  };

  return (
    <div className="add-card-container">
      <Button onClick={openModal}>Add Card</Button>
      <Modal show={isModalOpen} onClose={closeModal}>
        <form onSubmit={handleSubmit}>
          <InputField
            type="text"
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
            placeholder="Enter card title"
          />
          <InputField
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter card description"
          />
          <InputField
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />

          {labels.map((label, index) => (
            <div key={label.id} className="add-card-label">
              <InputField
                className="label-name-input"
                type="text"
                value={label.name}
                onChange={(e) =>
                  handleLabelChange(index, "name", e.target.value)
                }
                placeholder="Label name"
              />
              <InputField
                className="label-color-input"
                type="color"
                value={label.color}
                onChange={(e) =>
                  handleLabelChange(index, "color", e.target.value)
                }
              />
            </div>
          ))}
          <Button type="button" onClick={addNewLabel}>
            Add Label
          </Button>

          <div
            className="priority-color"
            style={{ backgroundColor: priorityColor[priority] }}
          >
            Priority: {priority}
          </div>
          <Button type="button" onClick={togglePriority}>
            { priority }
          </Button>

          {comments.map((comment, index) => {
  console.log("Rendering comment", index, comment.text);
  return (
    <InputField
      className="comment-container"
      key={comment.id}
      type="text"
      value={comment.text}
      onChange={(e) => handleCommentChange(index, e.target.value)}
      placeholder="Enter comment"
    />
  );
})}
          { comments.map((comment) => comment.text).join(", ") }
          <Button type="button" onClick={addNewComment}>
            Add Comment
          </Button>


          <Button type="submit">Add Card</Button>
          <Button onClick={closeModal}>Cancel</Button>
        </form>
      </Modal>
    </div>
  );
};

export default AddCard;
