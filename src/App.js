import "./App.css";
import React from "react";
import Personal from "./personalForm";
import Education from "./educationForm";
import WorkExperience from "./workExperienceForm";

function App() {
  const [personalState, setPersonalState] = React.useState({
    name: "",
    phoneNumber: "",
    email: "",
    objectiveStatement: "",
  });

  const [educationState, setEducationState] = React.useState([
    {
      key: 0,
      nameOfCollege: "",
      major: "",
      gpa: "",
      startDate: "",
      endDate: "",
    },
  ]);
  const [workExperienceState, setWorkExperienceState] = React.useState([]);
  const [honorsState, setHonorsState] = React.useState([]);
  const [formIndex, setFormIndex] = React.useState(0);
  const [forms, setForms] = React.useState([
    <Personal handleEvent={personalEventHandler} state={personalState} />,
    <Education
      educationStateIndex={0}
      addNewEducation={addNewEducation}
      handleChange={EducationEventHandler}
      educationState = {educationState}
    />,
    <WorkExperience />,
  ]);

  function personalEventHandler(e) {
    setPersonalState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
   
  }

  function addNewEducation() {
    setEducationState((prevState) =>    
    [
      ...prevState,
      {
        key: prevState.length,
        nameOfCollege: "",
        major: "",
        gpa: "",
        startDate: "",
        endDate: "",
      },
    ]);   
    setForms((prevState) => {
      const newArr = prevState;
      newArr.splice(educationState.length+1, 0,<Education
        educationStateIndex={educationState.length}
        addNewEducation={addNewEducation}
        handleChange={EducationEventHandler}
        educationState={educationState}
      />)
     return newArr;
    });
    setFormIndex(prevState=>prevState+1)
  }

  function EducationEventHandler(key, e) {
    setEducationState((prevState) => {
      const newState = prevState.map((educationObject) => {
        if (educationObject.key === key) {
          return { ...educationObject, [e.target.name]: e.target.value };
        }
        return educationObject;
      });
      return newState;
    });   
  }

  function nextForm() {
    setFormIndex((prevState) => {
      return prevState + 1;
    });
  }
  function previousForm() {
    setFormIndex((prevState) => {
      return prevState - 1;
    });
  }

  return (
    <div id="app">
      <div id="formContainer">{forms[formIndex]}</div>
      <div id="display"></div>
      <div id="buttons">
        {formIndex !== 0 && (
          <button id="previousFormButton" onClick={previousForm}>
            Back
          </button>
        )}
        <button id="nextFormButton" onClick={nextForm}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
