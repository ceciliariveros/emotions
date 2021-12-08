import React, {useState, useEffect} from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import { Loader } from 'semantic-ui-react'
import './ItemDetailContainer.css'
import { useParams } from 'react-router'


const ItemDetailContainer = () => {
   const [item, setItem] = useState([])
   const [loading,setLoading] = useState(true)
   let paramsId = useParams();
   let id = paramsId.id;

   useEffect(() => {
     setTimeout(()=>{
         fetch(`https://api.mercadolibre.com/items/${id}`)
         .then((response)=>response.json())
         .then((respJSON)=>{
             console.log('respuesta', respJSON)
             setItem(respJSON);
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
