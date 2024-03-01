function ListaDeTareas(props) {

    const { tareas } = props;

    return (
        <div>
            <ul>
                {tareas.map((tarea, indice) => (
                    <li key={indice}>{tarea}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListaDeTareas;

