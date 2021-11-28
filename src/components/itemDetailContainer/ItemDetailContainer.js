import React, {useState, useEffect} from 'react'
import ItemDetail from '../itemDetail/ItemDetail'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
   const [item, setItem] = useState({})

   useEffect(() => {
     setTimeout(()=>{
         fetch('https://api.mercadolibre.com/sites/MLA/search?=q=Adidas&limit=1')
         .then((response)=>response.json())
         .then((respJSON)=>{setItem(respJSON.results[0]); console.log(respJSON.result[0])})
         .catch((error)=>console.log('Error inesperado: ',error))
     },2000)
   }, [])
    return (
        <div>
            <ItemDetail item={item}></ItemDetail>
        </div>
    )
}

export default ItemDetailContainer
