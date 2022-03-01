import '@testing-library/jest-dom';
import { types } from '../../redux/types/types';
import { registerReducer} from '../../redux/reducers/registerReducer'

describe('Pruebas en Register Reducer', () => {
    test('Realizar el registro con los datos Ingresados', () => { 

        const initState = {}
        const action = {
            type: types.register,
            payload: {
                email: 'jsanlo57@gmail.com',
                password: '123456',
                name: 'Jose'
            }
        };
        const state = registerReducer(initState, action);
        expect(state).toEqual({
            email: 'jsanlo57@gmail.com',
            password: '123456',
            name: 'Jose'
        })
    })
     
})