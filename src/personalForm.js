import React from "react";
import "./formsStyle.css";

export default function Personal({eventHandler}) {
   



  return (
    <div className="forms">
        <h2>Personal Details</h2>
        <form id="personalForm">
          <input type="text"  placeholder="Name" name="name"  onChange={(e)=>eventHandler(e,0,0)}/>
          <input type="phoneNumber" placeholder="Phone Number" name="phoneNumber"  onChange={(e)=>eventHandler(e,0,0)} />
          <input type="email" placeholder="Email" name = "email"  onChange={(e)=>eventHandler(e,0,0)}/>
          <textarea id="objectiveTextArea" placeholder="Enter Objective Statement Here (optional)"  onChange={(e)=>eventHandler(e,0,0)} />
        </form>
      </div>
    
  );
}
