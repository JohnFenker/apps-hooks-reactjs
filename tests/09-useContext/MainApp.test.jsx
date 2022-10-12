const { render, screen } = require("@testing-library/react")
const { MemoryRouter } = require("react-router-dom");
const { MainApp } = require("../../src/09-useContext/MainApp");



describe('Pruebas en <MainApp/>', () => {  


    test('debe mostrar el LoginPage', () => {  
        render(
            <MemoryRouter initialEntries={['/login']}>
                <MainApp />
            </MemoryRouter>
        );
        expect(screen.getByText('Login Page') ).toBeTruthy();
        screen.debug();
    })
})