import { useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(5);
    // vamos a tener una f memorizada  
    const incrementFather = useCallback(
      () => {
        setCounter((value) => value +1);
      },
      [],
    )
    
    // const incrementFather = () =>{
    //     setCounter(counter+1);
    // }
  
    return (
    <>
        <h2>useCallback Hook: {counter}</h2>
        <hr />
        <ShowIncrement increment={incrementFather} />
    </>
    )
}
