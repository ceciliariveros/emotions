
import React from 'react';
import './ItemList.css';
import Item from '../item/Item'

// const arrayItems =[
//     {
//         id: 1,
//         title: 'Remera hombre',
//         price: '$60',
//         description: 'Remera de algodon talle L',
//         picture_url: 'https://www.guantexindustrial.com.ar/2512-large_default/remera-algodon-jersey-gris-talle-xl.jpg'
//     },
//     {
//         id: 2,
//         title: 'Remera dama',
//         price: '$50',
//         description: 'Remera de algodon talle M',
//         picture_url: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/047/907/products/remera-gris-melange-dama-sublimar1-1d7f96185361ad8e7515679844129157-480-0.jpg'
//     },
//     {
//         id: 3,
//         title: 'Remera niño',
//         price: '$40',
//         description: 'Remera de algodon talle 16',
//         picture_url: 'https://http2.mlstatic.com/D_NQ_NP_952820-MLA43530339063_092020-O.jpg'
//     },
// ]

const ItemList = ({items, category}) => {

	return (
		<div className='itemList'>
				<h3>{category}</h3>
                <div className='Item'>
                    {items.map((item) => {
                       return  <Item data={item} key={item.id}/>
                    })}
			    </div>            
		</div>
	);
};

export default ItemList;


