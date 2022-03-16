import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import SearchName from './components/SearchName';
import SearchTag from './components/SearchTag';


function App() {

  window.onload = Request()

  // Value of the name input 
  const [ nameTerm, setNameTerm ] = useState('')

  // value of the tags input 
  const [ tagsTerm, setTagsTerm ] = useState('')

  // All the current tags
  const [ tags, setTags ] = useState([])

  // Holding info avout each person
  const [ data, setData ] = useState([])

  


  // Requesting the API info
  function Request(){
  useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result.students)
        }
      )
      
  }, [])
}

// Updating the value of the tags
function updateTags(e){
  setTags(prevTags => [...prevTags, e])
}

// Changing the value of the search term used to filter by name 
  function updateName(item){
    setNameTerm(item)
  }

  // changing the value of the search term used to filter by tags 
  function updateTag(item){
    setTagsTerm(item)
  }


  return (
    <div className="App">
      <div id="container" >
        <div id="collection" >

          {/* Name search input */}
          <SearchName update={updateName} />

          {/* Tag search input */}
          <SearchTag update={updateTag} />
          <div id="students">
            {data.filter(val => {
              if(nameTerm === ""){
                return val
              }else if(
                // Searching for Firstname
                val.firstName.toLowerCase().includes(nameTerm.toLowerCase()) || 
                // Searching for Lastname
                val.lastName.toLowerCase().includes(nameTerm.toLowerCase())
                ){
                return val
              }}).map((student) => <Card updateTags={updateTags} students={student} key={student.id} />)}

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
