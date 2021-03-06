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
                <p className="price">${this.props.item.price.toFixed(2)}</p>
                <a onClick={this.handleClickAdd} href="#">add to cart</a>
            </li>

        )
    }
}

const ProductListItem = connect(null, mapDispatchToProps)(ConnectedProductListItem)

export default ProductListItem