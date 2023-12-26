import React, { useState } from "react";
import Modal from "./Modal";
import Button from "./common/Button"; 
import  InputField  from "./common/InputField"; 
import Label from "./common/Label"; 
import "./ParentComponent.css";
import "./common/InputField.css"; 
import "./common/Button.css"; 
import "./common/Label.css"; 


const ParentComponent = () => {
  const [modalContent, setModalContent] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  // Handlers for opening different modals
  const openInformationModal = () => {
    setModalContent("information");
    setModalOpen(true);
  };

  const openConfirmationModal = () => {
    setModalContent("confirmation");
    setModalOpen(true);
  };

  const openFormModal = () => {
    setModalContent("form");
    setModalOpen(true);
  };

  const openErrorModal = () => {
    setModalContent("error");
    setModalOpen(true);
  };

  // Handler for form submission (example)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
    setModalOpen(false);
  };

  // Helper function to render different modal content
  const renderModalContent = () => {
    switch (modalContent) {
      case "information":
        return (
          <p>
            This modal provides information about the latest features of our
            application.
          </p>
        );

      case "confirmation":
        return (
          <>
            <p>Are you sure you want to delete this item?</p>
            <Button onClick={() => console.log("Item deleted")}>
              Confirm Delete
            </Button>
          </>
        );

      case "form":
        return (
            <form onSubmit={handleSubmit}>
              <Label htmlFor="name">Name:</Label>
              <InputField type="text" name="name" />
              <Button type="submit">Submit</Button>
          </form>
        );

      case "error":
        const errorMessage = "An unexpected error occurred";
        return <p>An error occurred: {errorMessage}</p>;

      default:
        return <p>Default content</p>;
    }
  };

  return (
    <div>
      <Button onClick={openInformationModal}>Open Information Modal</Button>
      <Button onClick={openConfirmationModal}>Open Confirmation Modal</Button>
      <Button onClick={openFormModal}>Open Form Modal</Button>
      <Button onClick={openErrorModal}>Open Error Modal</Button>
      <Modal show={isModalOpen} onClose={() => setModalOpen(false)}>
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default ParentComponent;
