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

  const onHandleClick = ({target})=>{
    setList((prev)=>{
      return[...prev,{
        key:target.key,
        name: target.value}]
    })
    console.log(target)
  }
  const deleteOnClick = ({target}) =>{
    setList((prev) =>(
      prev.filter(
        e => e.key !== target.value
      )
    ))
    console.log(list)
  }
  return (
    <div className="App">
      <ToDoCreate onHandleClick={onHandleClick}></ToDoCreate>
      <List list={list} deleteOnClick={deleteOnClick}></List>
    </div>
  );
}

export default App;
