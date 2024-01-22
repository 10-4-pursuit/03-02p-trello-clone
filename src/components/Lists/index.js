import React from "react";
import Cards from "../Cards";

export default function Lists({ title, cards }) {
    
    return (
        <div className="list">
            <h3>{title}</h3>
            {cards.map(card => (
                <Cards key={card.id} {...card} />
            ))}
        </div>
    )
}