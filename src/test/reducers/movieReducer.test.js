import '@testing-library/jest-dom';
import { productReducer} from '../../redux/reducers/productReducer'
import { typesProducts } from '../../redux/types/types';

describe('Pruebas en Movie Reducer', () => {
    test('Registrar la pelicula', () => { 

        const initState = {
            products: []
        }
        const action = {
            type: typesProducts.register,
            payload: {
                id: '1',
                displayname: 'Cafe'
            }
        };
        const state = productReducer(initState, action);
        expect(state).toEqual({
            products: [action.payload]
        })
    })
})