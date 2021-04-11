import React from 'react';
import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../fixtures/demoTodos";


describe('Pruebas en <TodoList />', () => {

    const mockHandleDelete = jest.fn();
    const mockHandleToggle = jest.fn();

    const wrapper = shallow(
        <TodoList 
            todos={ demoTodos }
            handleDelete={ mockHandleDelete }
            handleToggle={ mockHandleToggle }
        />
    );
   
    test('Debe de mostrarse correctamente', () => {
       
        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de tener dos <TodoListItem />', () => {

        const todoListItem = wrapper.find('TodoListItem');
       
        expect(todoListItem.length).toBe(demoTodos.length);
        expect(todoListItem.at(0).prop('handleDelete')).toEqual(expect.any(Function));
        expect(todoListItem.at(0).prop('handleToggle')).toEqual(expect.any(Function));

    });
    

});
