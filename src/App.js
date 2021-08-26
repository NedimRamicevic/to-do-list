import './App.css';
import {useState} from 'react'
import {List} from './list'
import {ToDoCreate} from './toDoCreate'
import {ShowFiltered} from './showFiltered'
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
const [option, setOption] = useState("checked")

const getOption = (opt)=>{
  setOption(opt)
}

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
  const onInputChange = ({target}) =>{
    const tempList = list
    for (const member in list) {
        if (Object.hasOwnProperty.call(list, member)) {
            const element = list[member];
            if (element.key === target.key) {
                element.name = target.value
            }
        }
    }
    setList([...tempList])
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
      <List list={list} listOption ={option} deleteOnClick={deleteOnClick} onCheck={onCheck} onInputChange={onInputChange}></List>
      <ShowFiltered getOption={getOption} />
    </div>
  );
}

export default App;
