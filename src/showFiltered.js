import React from 'react';

export function ShowFiltered({getOption}){

    return(
        <div className="filter">
            <button onClick={()=>getOption("All")}>All</button>
            <button onClick={()=>getOption("checked")}>Done</button>
            <button onClick={()=>getOption("unchecked")}>Doing</button>
        </div>
    )
}