import React from 'react';
import { shallow } from 'enzyme';

import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en <TodoListItem />', () => {

    const mockHandleDelete = jest.fn();
    const mockHandleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem 
            todo={ demoTodos[0] }
            index={ 0 }
            handleDelete={ mockHandleDelete }
            handleToggle={ mockHandleToggle }
        />
    );
    
    test('Debe de mostrarse correctamente ', () => {
        
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de llamar a la funcion handleDelete', () => {
        
        wrapper.find('button').simulate('click');
        expect(mockHandleDelete).toBeCalledTimes(1);
        expect(mockHandleDelete).toBeCalledWith(demoTodos[0].id);

    });

    test('Debe de llamar a la funcion handleToggle', () => {
        
        wrapper.find('p').simulate('click');
        expect(mockHandleToggle).toBeCalledTimes(1);
        expect(mockHandleToggle).toBeCalledWith(demoTodos[0].id);

    });
    
    test('Debe de mostrar el texto correctamente', () => {
        
        const texto = wrapper.find('p');
        expect(texto.text().trim()).toBe('1. Aprender React');

    });

    test('Debe de mostrar el texto correctamente', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe('1. Aprender React');

    });

    test('Debe de tener la clase complete si el TODO.done = true', () => {

        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem 
                todo={ todo }
                index={ 0 }
                handleDelete={ mockHandleDelete }
                handleToggle={ mockHandleToggle }
            />
        );

        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    });

});
