import React, { Component } from "react"
import ProductListItem from "./ProductListItem.jsx"
import { connect } from "react-redux"

const mapStateToProps = state => {
    return { products: state.products };
}

class ConnectedProductList extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div id="products">
                <h2>Products</h2>
                <ul>
                    {this.props.products.map((item, index) => {
                        return (<ProductListItem item={item} key={index} />)
                    })}
                </ul>
            </div>
        );
    }
}

const ProductList = connect(mapStateToProps)(ConnectedProductList)

export default ProductList;