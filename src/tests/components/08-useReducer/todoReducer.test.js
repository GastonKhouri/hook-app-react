import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";


describe('Pruebas en todoReducer', () => {
   
    test('Debe de retornar el estado por defecto', () => {
       
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);

    });

    test('Debe de agregar un TODO', () => {

        const newTodo = {
            id: 3,
            desc: 'Aprender Node',
            done: false
        }

        const action = {
            type: 'add', 
            payload: newTodo
        }
       
        const state = todoReducer(demoTodos, action);
        
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);

    });

    test('Debe de eliminar un TODO', () => {

        const action = {
            type: 'delete', 
            payload: 2
        }

        const state = todoReducer(demoTodos, action);

        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[0]]);

    });    

    test('Debe de hacer el toggle del TODO', () => {
       
        const action = {
            type: 'toggle', 
            payload: 2
        }

        const state = todoReducer(demoTodos, action);

        expect(state[1].done).toBe(true);
        expect(state[0]).toEqual(demoTodos[0]);

    });    

});
