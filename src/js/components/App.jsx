import React from "react"
import ProductList from "./ProductList.jsx"
import ShoppingCartList from "./ShoppingCartList.jsx"
import { Provider } from "react-redux"
import { store, persistor } from "../store/index.js"
import { PersistGate } from 'redux-persist/integration/react'


const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <div>
                <ProductList />
                <ShoppingCartList />
            </div>
        </PersistGate>
    </Provider>
)

export default App