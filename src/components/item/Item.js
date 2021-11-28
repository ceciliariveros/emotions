import React from 'react'

import { Card, Image } from 'semantic-ui-react';
import './Item.css'

const Item = ({ data }) => (
        <Card style={{margin:30}}>
            <Image src={data.picture_url} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{data.title}</Card.Header>
                <Card.Meta>
                    <span >{data.price}</span>
                </Card.Meta>
                <Card.Description>{data.description}</Card.Description>
                <button className='buttonDetalle'>Ver detalle</button>
            </Card.Content>
        </Card>	
);

export default Item;

