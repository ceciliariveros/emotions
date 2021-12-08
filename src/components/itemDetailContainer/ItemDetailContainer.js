import React, {useState, useEffect} from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import { Loader } from 'semantic-ui-react'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
   const [item, setItem] = useState([])
   const [loading,setLoading] = useState(true)

   useEffect(() => {
     setTimeout(()=>{
         fetch(`https://api.mercadolibre.com/items/${item.id}`)
         .then((response)=>response.json())
         .then((respJSON)=>{
             setItem(respJSON.results[0]);
             setLoading(false);
            })
         .catch((error)=>console.log('Error inesperado: ',error))
     },2000)
   }, [])
    return (
        <div className="containerDetail">
            {
                loading ?
                <div>
                    <h5>Cargando detalle del producto...</h5>
                    <Loader active />
                </div>
                :
                <ItemDetail item={item}></ItemDetail>
            }
        </div>
    )
}

export default ItemDetailContainer
