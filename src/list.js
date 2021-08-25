import React, {useEffect} from 'react';

    export function List({list,deleteOnClick,onCheck}){
        useEffect(() => {
            console.log(list)
        }, [])

    return(
        <div className="list">
            <ul>
            {list.map(
                (member) => {
                    return(
                        <div className="item" key={member.key}>
                            <button className="btnOk" value={member.key} onClick={()=> onCheck(member.key)} >✓</button>
                            <input style={member.checked ? ({textDecoration:"line-through"}):null} value={member.name} ></input>                            
                            <button className="btnClear" value={member.key} onClick={() => deleteOnClick(member.key)}>x</button>
                        </div>
                    )
                }
            )}
        </ul>
        </div>
    )
}
