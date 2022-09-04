import "./App.css";
import React from "react";
import Personal from "./personalForm";
import Education from "./educationForm";
import WorkExperience from "./workExperienceForm";

function App() {
  const [objectsState, setObjectsState] = React.useState([
    [
      {
        formName: "Personal",
        name: "",
        phoneNumber: "",
        email: "",
        objectiveStatement: "",
      },
    ],
    [
      {
        formName: "Education",
        key: 0,
        nameOfCollege: "",
        major: "",
        gpa: "",
        startDate: "",
        endDate: "",
      },
    ],
    [
      {
        formName: "Work",
        key: 0,
        nameOfCompany: "",
        role: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      },
    ],
  ]);

  const [formIndex, setFormIndex] = React.useState(0);

  const formsStack = objectsState.flat(1);
  console.log(formsStack);
  function returnForm() {
    if (formsStack[formIndex].formName === "Personal") {
      return <Personal eventHandler={eventHandler} state={objectsState[0]} />;
    } else if (formsStack[formIndex].formName === "Education") {
      return (
        <Education
          educationStateIndex={formsStack[formIndex].key}
          eventHandler={eventHandler}
          addNewEducation={addNewEducation}
          state = {objectsState[1]}
        />
      );
    } else if (formsStack[formIndex].formName === "Work") {
      return <WorkExperience />;
    }
  }

  function eventHandler(e, subarrIndex, objectIndex) {
    setObjectsState((prevState) => {
      const newArr = [...prevState];
      newArr[subarrIndex][objectIndex] = {
        ...prevState[subarrIndex][objectIndex],
        [e.target.name]: e.target.value,
      };
      return newArr;
    });
  }

  function addNewEducation() {
    setObjectsState((prevState) => {
      const newArr = [...prevState];
      newArr[1][prevState[1].length] = {
        formName: "Education",
        key: prevState[1].length,
        nameOfCollege: "",
        major: "",
        gpa: "",
        startDate: "",
        endDate: "",
      };
      return newArr;
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
      <div id="formContainer">{returnForm()}</div>
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
