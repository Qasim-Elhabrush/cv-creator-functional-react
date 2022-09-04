import React from "react";
import "./formsStyle.css";

export default function Personal({handleEvent, state}) {
    const {name, phoneNumber,email,objectiveStatement} = state;



  return (
    <div className="forms">
        <h2>Personal Details</h2>
        <form id="personalForm">
          <input type="text"  placeholder="Name" name="name" value={name} onChange={handleEvent}/>
          <input type="phoneNumber" placeholder="Phone Number" name="phoneNumber" value={phoneNumber} onChange={handleEvent} />
          <input type="email" placeholder="Email" name = "email" value ={email} onChange={handleEvent}/>
          <textarea id="objectiveTextArea" placeholder="Enter Objective Statement Here (optional)" name = "objectiveStatement" value = {objectiveStatement} onChange={handleEvent} />
        </form>
      </div>
    
  );
}
