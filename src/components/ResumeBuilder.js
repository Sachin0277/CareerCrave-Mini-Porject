import React, { useState } from "react";
import Section from "./section";
import "./style.css";

const ResumeBuilder = () => {
  const [sections, setSections] = useState([
    {
      name: "Profile Summary",
      description: "Your Profile Summary ",
      isToggled: true,
    },
    {
      name: "Academic and Cocurricular Achievements",
      description: "Your Academic and Cocurricular Achievements",
      isToggled: true,
    },
    {
      name: "Summer Internship Experience",
      description: "Your Summer Internship Experience",
      isToggled: true,
    },
    {
      name: "Work Experience",
      description: "Your Work Experience",
      isToggled: true,
    },
    { name: "Projects", description: "Your Projects", isToggled: false },
    {
      name: "Certifications",
      description: "Your Certifications",
      isToggled: false,
    },
    {
      name: "Leadership Positions",
      description: "Your Leadership Positions",
      isToggled: true,
    },
    {
      name: "Extracurricular",
      description: "Your Extracurricular",
      isToggled: true,
    },
    {
      name: "Education",
      description: "Your Education details",
      isToggled: true,
    },
  ]);

  const handleDrag = (sourceIndex, targetIndex) => {
    // Placeholder logic for reordering sections
    const updatedSections = [...sections];
    const [removed] = updatedSections.splice(sourceIndex, 1);
    updatedSections.splice(targetIndex, 0, removed);
    setSections(updatedSections);
  };

  const handleEdit = (index, newName) => {
    // Placeholder logic for editing section name
    const updatedSections = [...sections];
    updatedSections[index].name = newName;
    setSections(updatedSections);
  };

  const handleToggle = (index) => {
    // Placeholder logic for toggling section visibility
    const updatedSections = [...sections];
    updatedSections[index].isToggled = !updatedSections[index].isToggled;
    setSections(updatedSections);
  };

  return (
    <div className="container">
      <h2 className="header">Select Your Sections</h2>
      {sections.map((section, index) => (
        <Section
          key={index}
          name={section.name}
          description={section.description}
          index={index}
          handleDrag={handleDrag}
          handleEdit={handleEdit}
          handleToggle={handleToggle}
          isToggled={section.isToggled}
        />
       
       
    
        ))
      }
    
       <button className="save-button"><span >Save and Next</span></button>
    </div>
  );
};

export default ResumeBuilder;
