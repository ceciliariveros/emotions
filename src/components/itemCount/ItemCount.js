import React, {useState} from 'react'
import './ItemCount.css'

export default function ItemCount({onAdd}) {
    // const maxStock=10;
    // const [counter, setCounter] = useState(0)
    // const [stock, setStock] =useState(10)
    // const agregarAlCarrito = ()=>{
    //     if(counter<maxStock){
    //         setCounter(counter+1)
    //         setStock(maxStock-(counter+1))
    //     }

    // }
    // const quitarDelCarrito = ()=>{
    //     if(counter>0){
    //         setCounter(counter-1)
    //         setStock(maxStock-(counter-1))
    //     }
    // }
    return (
        <div className="contenedorCouter" >

            {/* <p className="textP">Cantidad en el Carrito: {counter}</p> */}
            <div className="groupButton">
                <button className="buttonAgregar" onClick={()=>onAdd(1)} >Agregar al Carrito</button>
                <button className="buttonQuitar" onClick={()=>onAdd(-1)}> Quitar del Carrito</button>
            </div>
            {/* <p className="textStock">Stock Disponible: {stock}</p> */}

           
        </div>
    )

}
