import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {
  const {counter, increment, decrement, reset} = useCounter();
  
  return (
     <>
        <h2>Counter with Hook: {counter}</h2>
        <hr />

        <button 
                className="btn btn-primary btn-sm" 
                onClick={increment} >+1</button>
        <button 
                className="btn btn-primary btn-sm" 
                onClick={reset} >Reset</button>
        <button 
                className="btn btn-primary btn-sm" 
                onClick={decrement} >-1</button>
     </>
  )
}
