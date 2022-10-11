import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { useForm } from "../../src/hooks/useForm"

describe('Prueba en useForm', () => {
    const initialForm = {
        name: 'Franco',
        email: 'damachio@gmail.com'
    }
    test('debe regresar los valores por default', () => { 
        const { result } = renderHook( () => useForm(initialForm));
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });
    test('debe cambiar el nobre del formulario', () => {
        const newValue = 'Juan';
        const {result} = renderHook( ()=>useForm(initialForm))
        const {onInputChange} = result.current;

        act(()=>{
            onInputChange({target:{name: 'name', value:newValue}})
        });
        expect( result.current.name).toBe( newValue);
        expect( result.current.formState.name).toBe( newValue);

    });
    test('debe hacer el reset del formulario', () => {
        const newValue = 'Juan';
        const {result} = renderHook( ()=>useForm(initialForm))
        const {onInputChange, onResetForm} = result.current;

        act(()=>{
            onInputChange({target:{name: 'name', value:newValue}});
            onResetForm();
        });
        expect( result.current.name).toBe( initialForm.name);
        expect( result.current.formState.name).toBe( initialForm.name);

    });
})