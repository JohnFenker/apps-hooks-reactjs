import { useCounter, useFetch } from "../hooks";
import {LoadingQuote, Quote} from '../03-examples'


export const Layout = () => {
    const {counter, increment} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://breakingbadapi.com/api/quotes/${counter}`);
    const {author, quote} = !!data && data[0];
     
    

    return (
        <>
            <h2>BreackingBad Frases copadas.</h2>
            <hr /> 
            {
                isLoading
                ? <LoadingQuote />
                : <Quote author={author} quote = {quote}/>
            } 

            <button type="button" className="btn btn-secondary btn-sm" onClick={increment}>Siguiente ...</button>
        </>
    )
}
