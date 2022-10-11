const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoItem } = require("../../src/08-useReducer/TodoItem");


describe('Pruebas en <TodoItem/>', () => {

    const todo = {
        id: 1,
        description: 'Piedra del alma.',
        done: false
    };
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    // si ambas f mockeada seran llamadas mas de una vez, entonces
    // se debe limpiar para evitar estados no contemplados.
    beforeEach(()=> jest.clearAllMocks());


    test('debe de mostrar el Todo pendiente de completar', () => { 
        render(<TodoItem todo={todo} onToggleTodo={onToggleTodoMock} onDeleteTodo={onDeleteTodoMock} />);
        
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
    });

    test('span debe de llamar el ToggleTodo cuando se hace click', () => {
        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock } 
            /> 
        );
        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
    });

    test('button debe de llamar el deleteTodo', () => {
        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock } 
            /> 
        );
        const deleteButton = screen.getByRole('button');
        fireEvent.click( deleteButton );
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    });
})