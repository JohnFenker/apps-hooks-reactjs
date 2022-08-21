import { useState, useMemo } from "react";
// un custom hook
import { useCounter } from "../hooks"
// f pesada
const heavyStuff=(iterationNumber = 100)=>{
    for(let i = 0; i < iterationNumber; i++){
        console.log('Ahi vamos...');
    }
    return `${iterationNumber} iteraciones realizadas`;
}

export const MemoHook = () => {
    const {counter, increment} = useCounter(40);
    const [show, setShow] = useState(true);
    // memorizamos un valor, el resultado de un f pesado, y se actualiza dependiendo del valor
    // de la variable counter.
    const memorizedValue = useMemo(()=> heavyStuff(counter), [counter])

    return (
        <>
            <h2>Counter: <small>{counter}</small> </h2>
            <hr />
            <h4>{memorizedValue}</h4>
            <button
                className="btn btn-secondary"
                onClick={()=> increment() }    
            >
                +1
            </button>
            
            <button
                className="btn btn-outline-primary"
                onClick={ ()=> setShow( !show)}
            
            >
                Mostrar/Ocultar {JSON.stringify(show)}
            </button>
        </>
    )
}
