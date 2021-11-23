import React from 'react'
import './itemListContainer.css'
import ItemCount from "../itemCount/ItemCount"


export default function ItemListContainer({greeting}) {
    return (
        <>
        <div className="cartelGreeting">
            {greeting} 
        </div>
        <ItemCount className="contenedorCounter"></ItemCount>
        </>
    )
}
