import { ADD_SHOPPING_CART_ITEM, REMOVE_SHOPPING_CART_ITEM } from "../constants/action-types"

const initialState = {
    shoppingCartItems: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SHOPPING_CART_ITEM:
            {
                const index = state.shoppingCartItems.map(item => item.id).indexOf(action.payload.id)
                if (index !== -1) {
                    let newItem = action.payload
                    newItem.quantity++
                    return Object.assign({}, state, {
                        shoppingCartItems: state.shoppingCartItems.map((item, i) => {
                            if (i === index)
                                return newItem
                            return item
                        })
                    })
                } else
                    return Object.assign({}, state, {
                        shoppingCartItems: state.shoppingCartItems.concat(action.payload)
                    })
            }
        case REMOVE_SHOPPING_CART_ITEM:
            {
                const index = state.shoppingCartItems.map(item => item.id).indexOf(action.payload.id)
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