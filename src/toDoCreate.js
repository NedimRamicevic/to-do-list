import React,{useState} from 'react'

export function ToDoCreate({onHandleClick, onKeyUp}){

    // const [logic, setLogic] = useState(false)
    const [name, setName] = useState({})
   
    const changing = (e)=>{
        // setLogic(()=>{
        //     if(e.target.value !==""){
        //         return(true)
        //     }
        // })
        setName({
            name:e.target.value,
            key:e.target.value + (new Date()).getMilliseconds().toString(),
            checked:false
        })
            

        if(e.keyCode === 13){
            onHandleClick(name)
        }


    }
   
    return(
        <div>      
            <input onKeyDownCapture={changing}></input>
        {/* {logic? 
        (<button value = {name.id} onClick={()=>onHandleClick(name)} >Create</button>):null} */}
        </div>
    )
}