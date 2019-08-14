import React, { Component } from "react"
import { removeItemFromShoppingCart } from "../actions/index.js"
import { connect } from "react-redux"


const mapDispatchToProps = dispatch => {
    return {
        removeItemFromShoppingCart: item => dispatch(removeItemFromShoppingCart(item))
    }
}

class ConnectedShoppingCartListItem extends Component {
    constructor() {
        super()
        this.handleClickRemove = this.handleClickRemove.bind(this)
    }

    handleClickRemove(event) {
        event.preventDefault()
        this.props.removeItemFromShoppingCart(this.props.item)
    }

    render() {
        return (
            <li>
                <p>{this.props.item.name}</p>
                <p>{this.props.item.quantity}</p>
                <p>${(this.props.item.price * this.props.item.quantity).toFixed(2)}</p>
                <a onClick={this.handleClickRemove} href="#">remove from cart</a>
            </li>

        )
    }
}

const ShoppingCartListItem = connect(null, mapDispatchToProps)(ConnectedShoppingCartListItem)

export default ShoppingCartListItem