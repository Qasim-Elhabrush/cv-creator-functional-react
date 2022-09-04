import React from 'react'

export default function WorkExperience(){
    return(
        <div className="forms">
            <h2>Work Experience</h2>
            <form id="workExperienceForm">
                <input type="text" placeholder='Name of Company'/>
                <h3>StartDate</h3>
                <input type="month"></input>
                <h3>End Date</h3>
                <input type="month"></input>

            </form>
        </div>
    )
}