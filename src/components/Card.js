import React, { useState } from "react";
import { useDrag } from "react-dnd";
import "./Card.css";
import Button from "./common/Button";
import Modal from "./Modal";
import InputField from "./common/InputField";

const Card = ({ cardData, onDeleteCard, onEditCard }) => {
  // Ensure onEditCard is passed as a prop
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editLabels, setEditLabels] = useState(cardData.labels);
  const [editTitle, setEditTitle] = useState(cardData.title); // State for edited title
  const [editDescription, setEditDescription] = useState(cardData.description); // State for edited description]
  const [newCommentText, setNewCommentText] = useState("");
  

  const [{ isDragging }, dragRef] = useDrag({
    type: "CARD",
    item: { id: cardData.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  const handleTitleChange = (e) => setEditTitle(e.target.value);
  const handleDescriptionChange = (e) => setEditDescription(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onEditCard(cardData.id, {
      title: editTitle,
      description: editDescription,
      dueDate: cardData.dueDate,
      labels: editLabels,
      priority: cardData.priority
      
    });
    closeModal();
  };

  const togglePriority = () => {
    switch (cardData.priority) {
      case "low":
        onEditCard(cardData.id, { ...cardData, priority: "medium" });
        break;
      case "medium":
        onEditCard(cardData.id, { ...cardData, priority: "high" });
        break;
      case "high":
        onEditCard(cardData.id, { ...cardData, priority: "urgent" });
        break;
      case "urgent":
        onEditCard(cardData.id, { ...cardData, priority: "optional" });
        break;
      default: // Default case will handle "optional" and any undefined priorities
        onEditCard(cardData.id, { ...cardData, priority: "low" });
    }
  };

  const priorityColor = {
    low: "green",
    medium: "orange",
    high: "red",
    urgent: "#ff00ff", // magenta for urgent
    optional: "#cccccc", // grey for optional
  };
  

  const handleLabelChange = (index, field, value) => {
    const newLabels = [...editLabels];
    newLabels[index] = { ...newLabels[index], [field]: value };
    setEditLabels(newLabels);
  }

  const addNewLabel = () => {
    setEditLabels([...editLabels, { id: editLabels.length + 1, name: "", color: "#ffffff" }]);
  }

const handleNewCommentChange = (e) => {
  setNewCommentText(e.target.value);
}

const comments =[]

  const addComment = () => {
    if(newCommentText.trim()!== "")
    onEditCard(cardData.id, { ...cardData, comments: [...cardData.comments, { text: newCommentText }] });
    setNewCommentText("");
  }



  return (
    <div
      ref={dragRef}
      className="card"
      style={{ opacity: isDragging ? 0.5 : 1, borderColor: priorityColor[cardData.priority] }}
      onClick={openModal}
    >
      <div className={`card-priority ${cardData.priority}`}></div>
      <h4>{cardData.title}</h4>
      <p>{cardData.description}</p>
      {cardData.dueDate && <p className="card-due-date">Due: {cardData.dueDate}</p>}
      <div className="card-labels">
        {cardData.labels &&
          cardData.labels.map((label) => (
            <span
              key={label.id}
              className="card-label"
              style={{ backgroundColor: label.color }}
            >
              {label.name}
            </span>
          ))}
      </div>
  
      {/* Modal Content */}
      <Modal show={isModalOpen} onClose={closeModal}>
        <form onSubmit={handleFormSubmit}>
          <InputField
            type="text"
            value={editTitle}
            onChange={handleTitleChange}
          />
          <textarea
            value={editDescription}
            onChange={handleDescriptionChange}
          />
          <InputField
            type="date"
            value={cardData.dueDate}
            onChange={(e) =>
              onEditCard(cardData.id, { ...cardData, dueDate: e.target.value })
            }
            placeholder="Enter due date"
          />
  
          {editLabels.map((label, index) => (
            <div key={label.id} className="add-card-label">
              <InputField
                className="label-name-input"
                type="text"
                value={label.name}
                onChange={(e) => handleLabelChange(index, "name", e.target.value)}
                placeholder="Label name"
              />
              <InputField
                className="label-color-input"
                type="color"
                value={label.color}
                onChange={(e) => handleLabelChange(index, "color", e.target.value)}
              />
            </div>
          ))}

<div className="priority-color" style={{ backgroundColor: priorityColor[cardData.priority] }}>
        Priority: {cardData.priority}
      </div>
      <Button type="button" onClick={togglePriority}>
        {cardData.priority}
      </Button>
      <div className="comments">
            {comments.map(comment => (
              <div key={comment.id}>{comment.text}</div>
            ))}
            <InputField
              type="text"
              value={newCommentText}
              onChange={handleNewCommentChange}
              placeholder="Add a comment"
            />
            <Button type="button" onClick={addComment}>Add Comment</Button>
          </div>
          <Button type="button" onClick={addNewLabel}>Add New Label</Button>
          <Button type="submit">Save Changes</Button>
        </form>
      </Modal>
  
      <Button
        className="delete-card-button"
        onClick={(e) => { e.stopPropagation(); onDeleteCard(cardData.id); }}
      >
        Delete
      </Button>
  
      <div className="priority-color" style={{ backgroundColor: priorityColor[cardData.priority] }}>
        Priority: {cardData.priority}
      </div>
      <Button type="button" onClick={togglePriority}>
        {cardData.priority}
      </Button>
    </div>
  );
};

export default Card;
