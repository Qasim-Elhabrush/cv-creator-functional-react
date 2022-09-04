import React, { useEffect } from 'react'
export default function Education({handleChange,addNewEducation,educationStateIndex,educationState}){ 
    return(
        <div className="forms">
            <h2>Education</h2>
            <form id="educationForm">
                <input type="text" placeholder='Name of College or Institution' name = "nameOfCollege" value={educationState[educationStateIndex].nameOfCollege} onChange={(e)=>handleChange(educationStateIndex,e)}
                />
                <input type="text" placeholder='Major' name="major" onChange={(e)=>handleChange(educationStateIndex,e)}/>
                <input type ="text" placeholder='GPA' name="gpa" onChange={(e)=>handleChange(educationStateIndex,e)}/>
                <label htmlFor='startDate'>Start Date</label>
                <input type="month" id="startDate" name="startDate" onChange={(e)=>handleChange(educationStateIndex,e)}/>
                <label htmlFor='endDate'>End Date</label>
                <input type="month" id="endDate" name="endDate" onChange={(e)=>handleChange(educationStateIndex,e)}/>
            </form>
            <button onClick={addNewEducation}>+</button>
        </div>
    )
}