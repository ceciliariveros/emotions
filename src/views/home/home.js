import React from 'react'
import ItemListContainer from '../../components/itemListContainer/ItemListContainer'

const Home = () => {
    return (
        <div>

            <ItemListContainer categoryId="MLA1246"></ItemListContainer>
            <ItemListContainer categoryId="MLA1430"></ItemListContainer>
            <ItemListContainer categoryId="MLA3937"></ItemListContainer>

        </div>
    )
}

export default Home
