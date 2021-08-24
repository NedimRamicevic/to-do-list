import React, {useEffect} from 'react';

    export function List({list,deleteOnClick}){
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
                            <li>{member.name}</li> 
                            <button value={member.key} onClick={() => deleteOnClick(member.key)}>clear</button>
                        </div>
                    )
                }
            )}
        </ul>
        </div>
    )
}
