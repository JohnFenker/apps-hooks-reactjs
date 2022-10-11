import { todoReducer } from "../../src/08-useReducer/todoReducer"


describe('Pruebas en todoReducer', ()=>{

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }];


    test('debe regresar el estado inicial', () => {  
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    });

    test('debe agregar un ToDo', () => {  
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo ToDo #2',
                done: false,
            }
        };
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload);
    });

    test('debe eliminar un ToDo', () => {  
        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        };
        // iniciamos los datos a analizar
        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0);
    });

    test('debe realizar un Toggle del ToDo', () => {  
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        };
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBeTruthy();
    });
});