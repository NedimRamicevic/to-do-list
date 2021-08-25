import React,{useState} from 'react'

export function ToDoCreate({onHandleClick, onKeyUp}){

    const [logic, setLogic] = useState(false)
    const [name, setName] = useState({})
   
    const changing = ({target})=>{
        setLogic(()=>{
            if(target.value !==""){
                return(true)
            }
        })
        setName({
            name:target.value,
            key:target.value + (new Date()).getMilliseconds().toString()})

    }
   
    return(
        <div>
            <input onChange={changing} onKeyUp={onKeyUp}></input>
        {logic? 
        (<button value = {name.id} onClick={()=>onHandleClick(name)} >Create</button>):null}
        </div>
    )
}