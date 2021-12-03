import React, {useState, useEffect} from 'react'
import './itemListContainer.css'
import ItemList from '../itemList/ItemList'
import { Loader } from 'semantic-ui-react'


const ItemListContainer = ({categoryId}) => {
    const [items,setItems] = useState([])
    const [category, setCategory] =useState('Otras categorias');
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(()=>{
            fetch(`https://api.mercadolibre.com/categories/${categoryId}`)
            .then((response)=>response.json())
            .then((respJSON)=>{
                setCategory(respJSON.name);
               })
            .catch((error)=>console.log('Error inesperado: ',error))

            fetch(`https://api.mercadolibre.com/sites/MLA/search?category=${categoryId}&limit=3`)
            .then((response)=>response.json())
            .then((respJSON)=>{
                setItems(respJSON.results);
                setLoading(false);
               })
            .catch((error)=>console.log('Error inesperado: ',error))
            
        },2000)

      }, [categoryId])

    return (
        <div>
            {
                loading ?
                <div>
                    <Loader active />
                </div>
                :
                <ItemList items={items} category={category}></ItemList>
            }
        </div>
    )
}

export default ItemListContainer
