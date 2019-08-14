import React, { Component } from "react"
import ProductListItem from "./ProductListItem.jsx"
import uuidv1 from "uuid"

class ProductList extends Component {
    constructor() {
        super()

        this.products = [
            { name: "Sledgehammer", price: 125.75 },
            { name: "Axe", price: 190.50 },
            { name: "Bandsaw", price: 562.13 },
            { name: "Chisel", price: 12.9 },
            { name: "Hacksaw", price: 18.45 }
        ]

        this.products.forEach(product => { product.id = uuidv1(), product.quantity = 1 })

    }

    render() {
        return (
            <div>
                <h2>Products</h2>
                <ul>
                    {this.products.map((item) => {
                        return (<ProductListItem item={item} key={item.id} />)
                    })}
                </ul>
            </div>
        );
    }
}

export default ProductList;