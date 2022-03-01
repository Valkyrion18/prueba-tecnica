import '@testing-library/jest-dom';
import { registerSincrono } from '../../redux/actions/actionRegister';
import { types } from '../../redux/types/types';

describe('Verificar las acciones de Regstro', () => {
    test('Validar Registro Sincrono', () => {
        const email = 'juan@gmail.com'
        const password = 'ABCDEF'
        const name = 'Jose'

        const loginAction = registerSincrono(email, password, name)

        expect(loginAction).toEqual({
            type: types.register,
            payload: {
                email,
                password,
                name
            }
        })
    })
})