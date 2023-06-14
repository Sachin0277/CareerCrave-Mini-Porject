import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaCheck,
} from "react-icons/fa";
import { GrCircleInformation } from "react-icons/gr";
import { ImPencil } from "react-icons/im";
import "./style.css";

const Section = ({
  name,
  description,
  index,
  handleDrag,
  handleEdit,
  handleToggle,
  isToggled,
  details,
}) => {
  const [editing, setEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleToggleEdit = () => {
    if (editing) {
      handleSave();
    } else {
      setEditing(true);
    }
  };

  const handleSave = () => {
    setEditing(false);
    handleEdit(index, editedName);
  };

  const handleInfoClick = () => {
    // Placeholder logic for displaying section description
    alert(description);
  };

  const handleDragStart = (e) => {
    // Placeholder logic for drag and drop
    e.dataTransfer.setData("text/plain", index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const sourceIndex = e.dataTransfer.getData("text/plain");
    const targetIndex = index;
    // Placeholder logic for reordering sections
    handleDrag(sourceIndex, targetIndex);
  };

  return (
    <div
      className={`section ${editing ? "editing" : ""}`}
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="section-header">
        <div className="drag-icon">
          <FaBars />
        </div>
        <div className="info-icon" onClick={handleInfoClick}>
          <GrCircleInformation />
        </div>
        <div className="section-name">
          {editing ? (
            <input
              type="text"
              value={editedName}
              onChange={handleNameChange}
              className="name-input"
            />
          ) : (
            <h4>{name}</h4>
          )}
        </div>
        
      </div>
      <div className="footer">
        <div className="actions">
          <button
            className={`edit-button ${editing ? "save-btn-edit" : "edit-icon"}`}
            onClick={handleToggleEdit}
          >
            {editing ? <p>Save</p> : <ImPencil />}
          </button>
          <button
            className={`toggle ${isToggled ? "correct" : "incorrect"} ${
              isToggled ? "right" : "left"
            }`}
            onClick={() => handleToggle(index)}
          >
            {isToggled ? <FaCheck /> : <FaTimes />}
          </button>
        </div>
       
      </div>
     
    </div>
    
  );
};

export default Section;
