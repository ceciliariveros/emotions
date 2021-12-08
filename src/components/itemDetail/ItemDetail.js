import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({item}) => {
    return (
        <div className="contenedor">
            <div className="cardItem">
                <img className="imgCard" src={item.thumbnail} alt={item.title} width={350}></img>
                <h4>$ {item.price}</h4>
                <h3>{item.title}</h3>
            </div>
        </div>
    )
}

export default ItemDetail
