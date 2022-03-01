import '@testing-library/jest-dom';
import { loginSincrono, logoutSincrono } from '../../redux/actions/actionLogin';
import { types } from '../../redux/types/types';


describe('Verificar las acciones de Login', () => {
    test('Validar Login Sincrono', () => {
        const id = 'ABCDEFG'
        const displayname = 'Jose'

        const loginAction = loginSincrono(id, displayname)

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                id,
                displayname
            }
        })
    })
    test('Validar Logout Sincrono', () => {
        const logoutAction = logoutSincrono()
        
        expect(logoutAction).toEqual({
            type: types.logout,
            payload: {}
        })
    })
})