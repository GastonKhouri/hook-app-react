import React from 'react';
import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';

import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';


describe('Pruebas en <TodoApp />', () => {

    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn();
   
    test('Debe de mostrarse correctamente', () => {
       
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de agregar un TODO', () => {
    
        const wrapper = mount(<TodoApp />);
        const handleAddTodo = wrapper.find('TodoAdd').prop('handleAddTodo');

        act(() => {
            handleAddTodo(demoTodos[0]);
            handleAddTodo(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe(`TodoApp (2)`);
        expect(localStorage.setItem).toBeCalledTimes(2);

    });

    test('Debe de eliminar un TODO', () => {
    
        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );

        expect(wrapper.find('h1').text().trim()).toBe(`TodoApp (0)`);

    });   

});
