const { render, screen, fireEvent } = require("@testing-library/react")
const { MultipleCustomHooks } = require("../../src/03-examples/MultipleCustomHooks");
const { useCounter } = require('../../src/hooks/useCounter');
const { useFetch } = require('../../src/hooks/useFetch');

jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Pruebas en <MultipleCustomHooks/>', () => {
    // seteamos un mock para una f
    const mockIncrement = jest.fn();
    // seteamos un mock para un customhook
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement // se puede llamar a un mock en cada prop.
    });
    // limpiarmos todos los mocks antes de cada test.
    beforeEach(()=>{
        jest.clearAllMocks();
    });
    
    test('debe mostrar el componente por default', () => {
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });


        render(<MultipleCustomHooks/>);
        // screen.debug();
        const nextButton = screen.getByRole('button', {name: 'Siguiente ...'});
        expect(nextButton.disabled).toBeTruthy();
    });
    test('debe mostrar el quote', () => {

        useFetch.mockReturnValue({
            data: [{author: 'Fernando Filosofo', quote:'frase frasefrase frasefrase frase'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks/>);
        // screen.debug();
        expect(screen.getByText('Fernando Filosofo')).toBeTruthy();
        const nextButton = screen.getByRole('button', {name: 'Siguiente ...'});
        expect(nextButton.disabled).toBeFalsy();
    });
    test('debe invocar a la función incrementar', () => { 
        useFetch.mockReturnValue({
            data: [{author: 'Fernando Filosofo', quote:'frase frasefrase frasefrase frase'}],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button', {name: 'Siguiente ...'});
        fireEvent.click(nextButton);

        expect(mockIncrement).toHaveBeenCalled();


    });
})