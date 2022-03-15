import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import SearchName from './components/SearchName';
import SearchTag from './components/SearchTag';


function App() {

  window.onload = Request()

  const [ test, setTest ] = useState({
    tags: [],
    data: []
  })

  console.log(test.tags)

  // Value of the name input 
  const [ searchTerm, setSearchTerm ] = useState('')

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
  function update(item){
    setSearchTerm(item)
  }
  return (
    <div className="App">
      <div id="container" >
        <div id="collection" >
          <SearchName update={update} />
          <SearchTag update={update} />
          <div id="students">
            {data.filter(val => {
              if(searchTerm === ""){
                return val
              }else if(
                // Searchng for Firstname
                val.firstName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) || 
                // Searching for Lastname
                val.lastName.toLowerCase().includes(searchTerm.toLowerCase())

                ){
                return val
              }
            }).map((student) => <Card updateTags={updateTags} students={student} key={student.id} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
