import { useState } from "react"

export const CounterApp = () => {
    //const [counter, setCounter] = useState(10);
    const [ state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });
    const {counter1, counter2, counter3} = state;

    return (
        <>
            <h2>Counter 1: {counter1}</h2>
            <h2>Counter 2: {counter2}</h2>
            <h2>Counter 3: {counter3}</h2>
            <hr />
            <button 
                type="button" 
                className="btn btn-primary btn-sm" 
                onClick={ ()=> setCounter({
                    ...state, 
                    counter1: counter1 + 1,
                })} >+1</button>
        </>

    )
}
