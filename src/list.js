import React, {useState} from 'react';

export function List(list){

    

    return(
        <ul>
            {list.map((member, index) => (
                <li key={index}>{member}</li>
            )

            )}
        </ul>
    )
}