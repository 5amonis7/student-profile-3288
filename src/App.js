import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';
import Search from './components/Search';


function App() {


  // Test
  const [ test, setTest ] = useState([])


  // Value of the name input 
  const [ nameTerm, setNameTerm ] = useState('')

  const [ tags, setTags ] = useState([])
  // console.log(tags)

  // Holding info avout each person
  const [ data, setData ] = useState([])

  let info = {items: test};

  // API Data
  window.onload = useEffect(() => {
    fetch("https://api.hatchways.io/assessment/students")
      .then(res => res.json())
      .then(
        (result) => {
          setData(result.students)
        }
      )
      .then(() => {
        info = {items: [{ students: [data]}]};
        setTest(info)
      })
      
  }, [])

  


  function updateTags(a, b){

    if(tags.hasOwnProperty(a)){
      setTags((prevTags) => {
        return {
          ...prevTags,
          [a]: Array.isArray(prevTags[a]) ? [...prevTags[a], b] : [prevTags[a], b]
        }
      })
    } else {
      setTags((prevTags) => {
        return {
          ...prevTags,
          [a]: b
        }
      })
    }
}
console.log(tags)

function combine(){
  // for(let i = 0; i < tags[1].length; i++){
  // if(info[i].hasOwnProperty(tags)){
  //   console.log('yes')
  // }else{
  //   console.log('no')
  //   info[i].tags.append(tags[1])
  // }
  // console.log(info)
// }
  // info.forEach( (object, index) => {
  //   object.tags = [tags[index]]
  // })
  // for(let i = 0; i < tags.length; i++){
  //   for(let j = 0; j < info.length; j++){
  //     info[j].tags = tags[i]
  //   }
  // }
  // console.log(info)
  //  setTest(info)
}

  
    function averageGrade(item){
      let avg = 0;
      let total = 0;
      for(let i = 0; i < item.length; i++){
            total += parseFloat(item[i]);
        }
      avg = total / item.length;
      return avg;
    }


  return (
    <div className="App">
      <div id="container" >
        <div id="collection" >

          
          <Search holder= 'Search by Name' />

          
          <Search holder='Search by Tag' />


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
              }}).map((student) =>  <Card onChange={combine} averageGrade={averageGrade} updateTags={updateTags} students={student} key={student.id} />)}

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
