import React, { useState } from 'react'
import OnEvent from "react-onevent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Card = ({ students, updateTags, tags, averageGrade }) => {

    // Grades status
    const [ status, setStatus ] = useState(true)

    let grades = students.grades;


    

    // changing if the grades are showing or not
    function changeStatus(){
        setStatus(!status)
    }

    function addTag(e){
        const { value } = e.target;
        updateTags(students.id, value)
        e.target.value = '';
    }

  return (
    <div id="student">
        <img id="image" src={students.pic} alt="Student" />

        <div id="box">
            <h1 id="name">{students.firstName.toUpperCase()} {students.lastName.toUpperCase()}</h1>
            <div id="info">
                <p id="email">Email: {students.email}</p>
                <p id="company">Company: {students.company}</p>
                <p id="skill"> Skill: {students.skill}</p>
                <p id="average" className="spacing" >Average: {window.onload = averageGrade(grades)}%</p>


                <div className={status ? "grades hide spacing": "grades spacing"}>
                    {grades.map((element, index) => {
                        return <p key={index}>Test {index + 1}:  <span className="grade">{element}%</span></p>
                        })}
                </div>

                
                <div id="tags" className="spacing" >
                    {/* {
                    tags&&
                    tags.map((tag, index) => <p key={index}>{tag}</p>)} */}

                </div>

                <OnEvent enter={addTag} >
                    <input className="tag" type="text" placeholder="Add a tag" />
                </OnEvent>

            </div>

            <FontAwesomeIcon id="icon" onClick={changeStatus} icon={status ? faPlus: faMinus} />
        </div> 
    </div>
  )
}

export default Card