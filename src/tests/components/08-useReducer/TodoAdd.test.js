import { shallow } from 'enzyme';
import React from 'react';

import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Pruebas en <TodoAdd />', () => {

    const mockHandleAddTodo = jest.fn();
   
    const wrapper = shallow(
        <TodoAdd
            handleAddTodo={ mockHandleAddTodo }
        />
    )

    test('Debe de mostrarse correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('NO debe de llamar handleAddTodo', () => {
        
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault(){} });

        expect(mockHandleAddTodo).toBeCalledTimes(0);

    });

    test('Debe de llamar a la funcion handleAddTodo', () => {

        const value = 'Aprender React';

        wrapper.find('input').simulate('change', { 
            target: { 
                name: 'description', 
                value 
            } 
        });

        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect(mockHandleAddTodo).toBeCalledTimes(1);
        expect(mockHandleAddTodo).toBeCalledWith(expect.any(Object));
        expect(mockHandleAddTodo).toBeCalledWith({ 
            id: expect.any(Number),
            desc: value,
            done: false
        });

        expect(wrapper.find('input').prop('value')).toBe('');

    });
    
});
