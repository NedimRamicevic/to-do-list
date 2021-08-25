import './App.css';
import {useState} from 'react'
import {List} from './list'
import {ToDoCreate} from './toDoCreate'
function App() {
  const [list, setList] = useState([
    {
    key:"1",
    name:"naber"
    },
    {
      key:"2",
      name:"canım"
    }
])
  const [item, setİtem] = useState({})

  const onKeyUp = (e) =>{
    setİtem(
      {
        key:e.target.value + (new Date()).getMilliseconds().toString(),
        name:e.target.value
      }
    )
  }
  const onHandleClick = (newMember)=>{
    console.log(newMember)
    setList((prev)=>{
      return[...prev,
        newMember]
    })
  }
  const deleteOnClick = (id) =>{
    setList((prev) =>(
      prev.filter(
        e => e.key !== id
      )
    ))
  }
  return (
    <div className="App">
      <ToDoCreate onHandleClick={onHandleClick} onKeyUp ={onKeyUp}></ToDoCreate>
      <List list={list} deleteOnClick={deleteOnClick}></List>
    </div>
  );
}

export default App;
