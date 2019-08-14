import React, { Component } from "react"
import { addItemToShoppingCart } from "../actions/index.js"


import { connect } from "react-redux"

const mapDispatchToProps = dispatch => {
    return {
        addItemToShoppingCart: item => dispatch(addItemToShoppingCart(item))
    }
}

class ConnectedProductListItem extends Component {
    constructor() {
        super()
        this.handleClickAdd = this.handleClickAdd.bind(this)
    }

    handleClickAdd(event) {
        event.preventDefault()
        this.props.addItemToShoppingCart(this.props.item)
    }

    render() {
        return (
            <li>
                <p>{this.props.item.name}</p>
                <p>{this.props.item.price}</p>
                <a onClick={this.handleClickAdd}>add to cart</a>
            </li>

        )
    }
}

const ProductListItem = connect(null, mapDispatchToProps)(ConnectedProductListItem)

export default ProductListItem