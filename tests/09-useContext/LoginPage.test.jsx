const { render, screen, fireEvent } = require("@testing-library/react");
const { LoginPage } = require("../../src/09-useContext/LoginPage");
const { UserContext } = require("../../src/context/UserContext");


describe('Pruebas en <LoginPage/>', () => {  


    test('debe mostrar el componente sin el usuario', () => {  
        render(
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toBe('null');
    });
    test('debe de llamar el setUser cuando se hace click en el boton', () => {  
        const setUserMock = jest.fn();
        
        render(
            <UserContext.Provider value={{ user:null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );
        const button = screen.getByRole('button');
        fireEvent.click( button );

        expect( setUserMock ).toHaveBeenCalledWith({id:4845, name: 'Juan', email: 'juan@google.com'});
    });
})