import { useState } from "react";
// un custom hook
import { useCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {
    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);
    return (
        <>
            <h2>Counter: 
                <Small value={counter} />
            </h2>
            <hr />

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
