import React, {useState} from 'react'
import './ItemDetail.css'
import ItemCount from '../itemCount/ItemCount'
import {NavLink} from 'react-router-dom'


const ItemDetail = ({item}) => {

    const maxStock=item.available_quantity;
    const [counter, setCounter] = useState(0)
    const [stock, setStock] =useState(maxStock)
    
    function onAdd (cantidad){
        if((counter<=maxStock)&& (counter>=0)){
            if(!((counter==0) && (cantidad<0))){
                setCounter(counter+cantidad)
                setStock(maxStock-(counter+cantidad))
            }
        }

    }
    
    return (
        <div className="contenedor">
            <div className="cardItem">
                <img className="imgCard" src={item.thumbnail} alt={item.title} width={350}></img>
                <h4>$ {item.price}</h4>
                <h3>{item.title}</h3>
            </div>
            <ItemCount onAdd={onAdd}></ItemCount>
            <p className="cantidadCarro">Stock disponible: {stock}</p>
            <p className="cantidadCarro">Cantidad del carrito: {counter}</p>

            {
                counter>0 ?
                    <button className="buttonCompra">
                        <NavLink to="/cart"  >Terminar compra</NavLink>
                    </button>
                    :
                    null
            }

           
        </div>
    )
}

export default ItemDetail
