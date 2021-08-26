import React from 'react';

    export function List({list,deleteOnClick,onCheck,onInputChange,listOption}){
        var opt = null
        if (listOption === "checked") {
             opt = false
        }
        else if(listOption === "unchecked"){
            opt = true
        }
        else{
            opt = null
        }

    return(
        <div className="list">
            <ul>
            {list.filter(
                x => x.checked !== opt
            ).map(
                (member) => {
                    return(
                        <div className="item" key={member.key}>
                            <button className="btnOk" value={member.key} onClick={()=> onCheck(member.key)} >✓</button>
                            <input type="text" style={member.checked ? ({textDecoration:"line-through"}):null} defaultValue={member.name} key={member.key} onChange={onInputChange}></input>                            
                            <button className="btnClear" value={member.key} onClick={() => deleteOnClick(member.key)}>x</button>
                        </div>
                    )
                }
            )}
        </ul>
        </div>
    )
}
