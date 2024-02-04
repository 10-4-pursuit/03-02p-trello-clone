import React, { Children } from "react";
import Lists from "../Lists";

export default function Board({ lists }) {
    
    return (
        <div className="board">
            {lists.map(list => (
                <Lists key={list.id} listId={list.id} title={list.title} cards={list.cards} />
            ))}
            
        </div>
    )
}