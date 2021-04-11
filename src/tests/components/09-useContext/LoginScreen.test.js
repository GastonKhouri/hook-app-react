import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en <LoginScreen />', () => {

    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={ { setUser } }>
            <LoginScreen />
        </UserContext.Provider>
    )
    
    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de ejecutar el setUser con el argumento esperado', () => {

        const data = {
            id: 1234,
            nombre: 'Gaston',
            email: 'gaston@gmail.com'
        }
       
        wrapper.find('button').simulate('click');

        expect(setUser).toHaveBeenCalledTimes(1);
        expect(setUser).toHaveBeenCalledWith(data);

    });   
    
});
