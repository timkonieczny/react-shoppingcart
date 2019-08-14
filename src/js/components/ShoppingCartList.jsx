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
        return (
            <div>
                <h2>Shopping Cart</h2>
                <ul>
                    {this.props.shoppingCartItems.map((item, index) => {
                        return (<ShoppingCartListItem item={item} key={index} />)

                    })}
                </ul>
            </div>

        )
    }
}

const ShoppingCartList = connect(mapStateToProps)(ConnectedShoppingCartList)

export default ShoppingCartList