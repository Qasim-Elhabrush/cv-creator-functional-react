import React, { useEffect } from 'react'
export default function Education({eventHandler,educationStateIndex,addNewEducation,state}){ 
    return(
        <div className="forms">
            <h2>Education</h2>
            <form id="educationForm">
                <input type="text" placeholder='Name of College or Institution' name = "nameOfCollege" value={state[educationStateIndex].nameOfCollege} onChange={(e)=>eventHandler(e,1,educationStateIndex)}
                />
                <input type="text" placeholder='Major' name="major" value={state[educationStateIndex].major} onChange={(e)=>eventHandler(e,1,educationStateIndex)}/>
                <input type ="text" placeholder='GPA' name="gpa" value={state[educationStateIndex].gpa} onChange={(e)=>eventHandler(e,1,educationStateIndex)}/>
                <label htmlFor='startDate'>Start Date</label>
                <input type="month" id="startDate" name="startDate" value={state[educationStateIndex].startDate} onChange={(e)=>eventHandler(e,1,educationStateIndex)}/>
                <label htmlFor='endDate'>End Date</label>
                <input type="month" id="endDate" name="endDate" value={state[educationStateIndex].endDate} onChange={(e)=>eventHandler(e,1,educationStateIndex)}/>
            </form>
            <button onClick={addNewEducation}>+</button>
        </div>
    )
}