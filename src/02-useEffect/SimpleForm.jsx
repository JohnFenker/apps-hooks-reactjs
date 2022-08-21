import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'strider',
        email:'fer@gmail.com',
    });
    const {email, username}= formState; 
    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    };    
    useEffect(() => {
        
    }, []);
    
    
    return (
        <>
            <h2>Formulario Simple</h2>
            <hr />
            <input type="text" className="form-control" placeholder="Username" name="username" value={username} onChange={onInputChange} />
            <input type="email" className="form-control mt-2" placeholder="google.com" name="email" value={email} onChange={onInputChange}/>
        
            {
                (username === 'strider2') && <Message />
            }
        </>
    )
}
