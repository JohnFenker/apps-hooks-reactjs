
export const FocusScreen = () => {
    const onClick = () => {
        document.querySelector('input').select();
    }
    return (
        <>
            <h2>Focus Screen</h2>
            <hr />

            <input
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <button
                className="btn btn-secondary btn-sm mt-2"
                onClick={onClick}
            >Set focus</button>
        </>
    )
}
