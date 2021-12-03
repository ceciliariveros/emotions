import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'semantic-ui-react';
import './Item.css'

const Item = ({ data }) => (
      <Link to={`/item/${data.id}`}>
        <Card style={{margin:30}}>
            <img  className="imageSize" src={data.thumbnail} alt={data.title} >
            </img>
            <Card.Content>
                <Card.Header>{data.title}</Card.Header>
                <Card.Meta>
                    <span >$ {data.price}</span>
                </Card.Meta>
                <Card.Description>{data.description}</Card.Description>
                {/* <button className='buttonDetalle'>Ver detalle</button> */}
            </Card.Content>
        </Card>	
      </Link>
      
);

export default Item;

