import { typesProducts } from "../types/types"

const initialState = {
    products: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProducts.register:
            return {
                products: [action.payload]
            }
        case typesProducts.list:
            return {
                products: [...action.payload]
            }
        case typesProducts.update:
            return {
                // products: [...action.payload]
            }
        case typesProducts.delete:
            return {
                products: state.products.filter(product => product.product !== action.payload)
            }
        default:
            return state;
    }
}


