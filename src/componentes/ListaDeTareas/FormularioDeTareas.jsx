import { useState } from "react";

function FormularioDeTareas(props) {

    const { agregarTarea } = props;

    const [valorInput, setValorInput] = useState('');

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (!valorInput.trim()) return;
        agregarTarea(valorInput);
        setValorInput('');
    };

    return (
        <form onSubmit={manejarEnvio}>
            <input
                type="text"
                value={valorInput}
                onChange={(e) => setValorInput(e.target.value)}
            />
            <button type="submit">Agregar Tarea</button>
        </form>
    );
}

export default FormularioDeTareas;