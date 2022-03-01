import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { registrarProductoAsincrono, mostrarProductosAsincrono } from '../../redux/actions/actionProducts'

const middlewares = [thunk]
const mockstore = configureStore(middlewares)

const initState = {
    add: {
        product: '',
        brand: '',
        quantity: '',
        price: 0
    }
}

let store = mockstore(initState)

describe('Pruebas con las acciones de los Productos', () => {
    beforeEach(() => {
        store = mockstore(initState);
    })

    test('Crear Producto', async () => {
        await store.dispatch(registrarProductoAsincrono({
            product: 'Cafe',
            brand: 'Sello Rojo',
            quantity: '500 gr',
            price: 2.2
        }))
    })

})