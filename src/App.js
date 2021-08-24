import './App.css';
import {useState} from 'react'
import {List} from './list'
import {ToDoCreate} from './toDoCreate'
function App() {
  const [list, setList] = useState(["naber","canım"])

  const onHandleClick= ({target})=>{
    setList((prev)=>{
      return[prev,target.value]
    })
  }
  return (
    <div className="App">
      <ToDoCreate onHandleClick={onHandleClick}></ToDoCreate>
      <List list={list}></List>
    </div>
  );
}

export default App;
