import React, { Component } from "react"
import ShoppingCartListItem from "./ShoppingCartListItem.jsx"
import { connect } from "react-redux"

const mapStateToProps = state => {
    return { shoppingCartItems: state.shoppingCartItems };
}

class ConnectedShoppingCartList extends Component {
    constructor() {
        super()
    }

    render() {
        console.log(this.props.shoppingCartItems)
        return (
            <div>
                <h2>Shopping Cart</h2>
                <ul>
                    {this.props.shoppingCartItems.map((item, index) => {
                        return (<ShoppingCartListItem item={item} key={index} />)
                    })}
                </ul>
                <p>Total: ${this.props.shoppingCartItems.reduce((total, item) => {
                    return total + (item.price * item.quantity)
                }, 0).toFixed(2)}</p>
            </div>

        )
    }
}

const ShoppingCartList = connect(mapStateToProps)(ConnectedShoppingCartList)

export default ShoppingCartList