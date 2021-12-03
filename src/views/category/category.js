import React from 'react'
import {useParams} from 'react-router-dom'
import ItemListContainer from '../../components/itemListContainer/ItemListContainer';

const Category = () => {
    const params= useParams();
    return (
        <div>
            <ItemListContainer categoryId={params.id}></ItemListContainer>
        </div>
    )
}

export default Category
