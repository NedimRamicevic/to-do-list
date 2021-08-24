import React,{useState} from 'react'

export function ToDoCreate(onHandleClick){

    const [logic, setLogic] = useState(false)
    const [item, setİtem] = useState()
   
    const changing = ({target})=>{
        setLogic(()=>{
            if(target.value !==""){
                return(true)
            }
        })
        setİtem(()=>(
            target.value
        ))

    }
   
    return(
        <div>
            <input onChange={changing}></input>
        {logic? 
        (<button value = {item} onClick={onHandleClick.onHandleClick} >Create</button>):null}
        </div>
    )
}