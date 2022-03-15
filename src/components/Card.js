import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const Card = ({ students, updateTags }) => {


    // Holding tags to be displayed
    const [ tags, setTags ] = useState([]);

    // are the grades showing or not
    const [ status, setStatus ] = useState(true)

    let grades = students.grades;

    // Finding the average of the grades
    let avg = 0;
    function averageGrade(item){
        let total = 0;
        for(let i = 0; i < item.length; i++){
            total += parseFloat(item[i]);
        }
        avg = total / item.length;
    }
    averageGrade(students.grades)

    // changing if the grades are showing or not
    function changeStatus(){
        setStatus(!status)
    }

    // adding a tag the list
    function addTag(e){
        const { value } = e.target;
        if(e.key == 'Enter'){
            setTags(prevTags => [...prevTags, value])
            e.target.value = ''
            updateTags(value)
        }
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
                <p id="average" className="spacing" >Average: {avg}%</p>


                {/* Looping through each grade */}
                <div className={status ? "grades hide spacing": "grades spacing"}>
                    {grades.map((element, index) => {
                        return <p key={index}>Test {index + 1}:  <span className="grade">{element}%</span></p>
                        })}
                </div>

                {/* Looping through each tag */}
                <div id="tags" className="spacing" >
                    {tags.map((tag, index) => {
                        return <p key={index}>{tag}</p>
                    })}
                </div>
                <input onKeyPress={addTag} className="tag" type="text" placeholder="Add a tag" />
            </div>

            <FontAwesomeIcon id="icon" onClick={changeStatus} icon={status ? faPlus: faMinus} />
        </div> 
    </div>
  )
}

export default Card