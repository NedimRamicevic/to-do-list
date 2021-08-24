import React from 'react';

    export function List(list){
    

    return(
        <div>
            <ul>
            {list.list.map(
                (member, index) => {
                    return(
                        <li key={index}>{member}</li>
                    )
                }
            )}
        </ul>
        </div>
    )
}
