import React from 'react'
import './itemListContainer.css'
import ItemCount from "../itemCount/ItemCount"
import ItemList from '../itemList/ItemList'


export default function ItemListContainer({greeting}) {
    return (
        <>
        <div className="cartelGreeting">
            {greeting} 
        </div>
        {/* <ItemCount className="contenedorCounter"></ItemCount> */}
        <ItemList></ItemList>
        </>
    )
}
