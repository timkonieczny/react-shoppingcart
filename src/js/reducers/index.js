import { ADD_SHOPPING_CART_ITEM, REMOVE_SHOPPING_CART_ITEM } from "../constants/action-types"

const initialState = {
    shoppingCartItems: [],
    products: [
        { name: "Sledgehammer", price: 125.75 },
        { name: "Axe", price: 190.50 },
        { name: "Bandsaw", price: 562.13 },
        { name: "Chisel", price: 12.9 },
        { name: "Hacksaw", price: 18.45 }
    ]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SHOPPING_CART_ITEM:
            {
                const index = state.shoppingCartItems.map(item => item.name).indexOf(action.payload.name)
                let newItem = action.payload
                if (index !== -1) {
                    newItem.quantity = state.shoppingCartItems[index].quantity+1
                    return Object.assign({}, state, {
                        shoppingCartItems: state.shoppingCartItems.map((item, i) => {
                            if (i === index)
                                return newItem
                            return item
                        })
                    })
                } else{
                    newItem.quantity = 1
                    return Object.assign({}, state, {
                        shoppingCartItems: state.shoppingCartItems.concat(newItem)
                    })
                }
            }
        case REMOVE_SHOPPING_CART_ITEM:
            {
                const index = state.shoppingCartItems.map(item => item.name).indexOf(action.payload.name)
                if (state.shoppingCartItems[index].quantity === 1)
                    return Object.assign({}, state, {
                        shoppingCartItems: [
                            ...state.shoppingCartItems.slice(0, index),
                            ...state.shoppingCartItems.slice(index + 1)
                        ]
                    })
                else {
                    let newItem = action.payload
                    newItem.quantity--
                    return Object.assign({}, state, {
                        shoppingCartItems: state.shoppingCartItems.map((item, i) => {
                            if (i === index)
                                return newItem
                            return item
                        })
                    })
                }
            }
    }

    return state
}

export default rootReducer