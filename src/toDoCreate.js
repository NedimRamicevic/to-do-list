import React,{useState} from 'react'

export function ToDoCreate({onHandleClick}){

    const [logic, setLogic] = useState(false)
    const [name, setName] = useState()
   
    const changing = ({target})=>{
        setLogic(()=>{
            if(target.value !==""){
                return(true)
            }
        })
        setName(target.value)

    }
   
    return(
        <div>
            <input onChange={changing} onKeyUp={}></input>
        {logic? 
        (<button value = {name} onClick={onHandleClick} >Create</button>):null}
        </div>
    )
}