import '@testing-library/jest-dom';
import { types, typesProducts } from '../../redux/types/types';


describe('Verificar Types', () => {
    test('Comparar propiedades del objeto para hacer Login ', () => { 
        expect(types).toEqual({
            login: 'login',
            logout: 'logout',
            register: 'register',            
        })
    })
    test('Comparar propiedades del objetos para CRUD de Productos ', () => { 
        expect(typesProducts).toEqual({
            register: 'Register',
            list: 'List',
            update: 'Update',
            delete: 'Delete'          
        })
    })
})