import { useEffect, useReducer } from 'react';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import {useTodos} from '../hooks'

export const TodoApp = () => {
    const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos();
    
    return (
        <>
            <h2>To Do App<i className="bi bi-watch"></i></h2>
            <span>Tareas: {todosCount}<i className="bi bi-check2-square"></i></span> 
            <span className='p-2'>Pendientes: { pendingTodosCount }<i className="p-1 bi bi-list-stars"></i></span>
            <hr />

                <div className="row  ">
                    <div className="col-7">
                        <TodoList todos={todos} onDeleteTodo={ handleDeleteTodo } onToggleTodo={ handleToggleTodo } />
                    </div>
                    <div className="col-5">
                        <h4>Agregar Tarea</h4>
                        <hr />
                        {/* Form Add. Este componente posea una prop/evento
                        que se emite hacia aqui, onNewTodo*/}
                        <TodoAdd onNewTodo={(todo)=>handleNewTodo(todo)} />
                        {/* FIN Form Add */}
                    </div>
                </div>
            
            

        </>
    )
}
