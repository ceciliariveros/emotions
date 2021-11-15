import React, { Component } from 'react'
import { Icon } from 'semantic-ui-react'
import './cartWidget.css'

export default class CartWidget extends Component {
    render() {
        return (
            <div className="carrito">
                <Icon link name='shopping cart'  color='black' size='big' /> 
            </div>
        )
    }
}

