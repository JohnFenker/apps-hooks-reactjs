import { useForm } from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {
    // usamos el custom hook para manejar campos de formulario.
    const { description, onInputChange, onResetForm } = useForm({
        description: ''
    });
    // f que se activa cuadno el formulario es enviado
    const onFormSubmit = (event) => {
        //anulamos refresco web
        event.preventDefault();
        // validamos que tenga al menos 1 char
        if (description.length < 2 ) return;

        // tarea nueva creada que se enviara 
        const newTodo = {
              id: new Date().getTime(),         
              done: false,
              description,
        }
        // llamamos 
        onNewTodo(newTodo);
        // luego de enviar la nueva tarea, limpiamos la caja de imputs
        onResetForm();
    }
    return (
        <form onSubmit={onFormSubmit}>
            <input name='description' value={ description } onChange={onInputChange} type="text" className="form-control" placeholder="¿Que hay que hacer?" />
            <button type="submit" className='btn btn-outline-primary mt-2'>Agregar</button>
        </form>
    )
}
