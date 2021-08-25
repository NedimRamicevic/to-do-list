import './App.css';
import {useState} from 'react'
import {List} from './list'
import {ToDoCreate} from './toDoCreate'
function App() {
  const [list, setList] = useState([
    {
    key:"1",
    name:"naber",
    checked:true
    },
    {
      key:"2",
      name:"canım",
      checked:false
    }
])
  // const [item, setİtem] = useState({})

  // const onKeyUp = (e) =>{
  //   setİtem(
  //     {
  //       key:e.target.value + (new Date()).getMilliseconds().toString(),
  //       name:e.target.value
  //     }
  //   )
  // }
  const onCheck = (id) =>{
    const tempList = list
    for (const member in tempList) {
      if (Object.hasOwnProperty.call(tempList, member)) {
        const element = tempList[member];
        if (element.key === id) {
          element.checked = !element.checked
        }
      }
    }
    setList(()=>{
      return [...tempList]
    })
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
      <ToDoCreate onHandleClick={onHandleClick} ></ToDoCreate>
      <List list={list} deleteOnClick={deleteOnClick} onCheck={onCheck}></List>
    </div>
  );
}

export default App;
