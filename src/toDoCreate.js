import React,{useState} from 'react'

export function ToDoCreate(onHandleClick){

    const [logic, setLogic] = useState(false)
   
    const changing = ({target})=>{
        setLogic(()=>{
            if(target.value !==""){
                return(true)
            }
        })

    }

    return(
        <div>
            <input onChange={changing}></input>
        {logic? 
        (<button onClick={onHandleClick}>Create</button>):null}
        </div>
    )
}