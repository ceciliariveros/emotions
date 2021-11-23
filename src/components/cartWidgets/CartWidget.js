import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import './cartWidget.css'
import ItemCount from "../itemCount/ItemCount"



export default class CartWidget extends Component {
    render() {
        return (
            <div className="carrito">
                <Icon link name='shopping cart'  color='black' size='big' /> 
                <p>{ItemCount.couter}</p>
            </div>
        )
    }
}

