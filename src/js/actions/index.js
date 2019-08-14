import { ADD_SHOPPING_CART_ITEM, REMOVE_SHOPPING_CART_ITEM } from "../constants/action-types"

const addItemToShoppingCart = payload => {
    return { type: ADD_SHOPPING_CART_ITEM, payload }
}

const removeItemFromShoppingCart = payload => {
    return { type: REMOVE_SHOPPING_CART_ITEM, payload }
}

export { addItemToShoppingCart, removeItemFromShoppingCart }