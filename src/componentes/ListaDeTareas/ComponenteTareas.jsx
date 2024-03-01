import { useState } from 'react';
import FormularioDeTareas from './FormularioDeTareas';
import ListaDeTareas from './ListaDeTareas';

function ComponenteTareas() {
    const [tareas, setTareas] = useState([]);

    const agregarTarea = (tarea) => {
        setTareas([...tareas, tarea]);
    };

    return (
        <div className="App">
            <h1>Lista de Tareas</h1>
            <FormularioDeTareas agregarTarea={agregarTarea} />
            <ListaDeTareas tareas={tareas} />
        </div>
    );
}

export default ComponenteTareas;
