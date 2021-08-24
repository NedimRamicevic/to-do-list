import React,{useState} from 'react'

export function ToDoCreate({onHandleClick}){

    const [logic, setLogic] = useState(false)
    const [item, setİtem] = useState({})
   
    const changing = ({target})=>{
        setLogic(()=>{
            if(target.value !==""){
                return(true)
            }
        })
        setİtem(()=>(
            {
                key:target.value + (new Date()).getMilliseconds().toString(),
                name:target.value,}
        ))
        console.log(item)        
    }
   
    return(
        <div>
            <input onChange={changing}></input>
        {logic? 
        (<button value = {item.name} key={item.key} onClick={onHandleClick} >Create</button>):null}
        </div>
    )
}