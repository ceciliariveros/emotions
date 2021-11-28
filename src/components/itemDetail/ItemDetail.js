import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    return (
        <div>
            <img src={item.thumbnail} alt={item.title} width={350}></img>
            <h2>{item.price}</h2>
            <h3>{item.title}</h3>
        </div>
    )
}

export default ItemDetail
