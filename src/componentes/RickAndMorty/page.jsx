// Importamos el hook useState desde React para manejar el estado del componente.
import { useState } from 'react';

// Definimos el componente funcional RickAndMortyPersonajes02.
function RickAndMorty() {
    // Inicializamos el estado 'personajes' con un array vacío. 'setPersonajes' es la función para actualizar este estado.
    const [personajes, setPersonajes] = useState([]);

    // Definimos la función asincrónica 'fetchPersonajes' para cargar los personajes desde la API
    const fetchPersonajes = async () => {
        try {
            // Realizamos la solicitud a la API y esperamos la respuesta.
            const respuesta = await fetch('https://rickandmortyapi.com/api/character');
            // Convertimos la respuesta a formato JSON.
            const data = await respuesta.json();
            // Actualizamos el estado 'personajes' con los resultados obtenidos.
            setPersonajes(data.results);
        } catch (error) {
            // Capturamos y mostramos en consola cualquier error que ocurra durante la solicitud o el procesamiento de datos.
            console.error('Error al obtener los datos:', error);
        }
    };

    // Renderizamos el componente.
    return (
        <div>
            <h1>Personajes de Rick y Morty</h1>
            {/* Botón para cargar los personajes. Al hacer clic, se llama a 'fetchPersonajes'. */}
            <button onClick={fetchPersonajes}>Cargar Personajes</button>
            {/* Lista de personajes. Iteramos sobre el array 'personajes' y mostramos cada uno. */}
            <ul>
                {personajes.map(personaje => (
                    // Para cada personaje, renderizamos un elemento de lista 'li' con una imagen y el nombre.
                    <li key={personaje.id}>
                        <img src={personaje.image} alt={personaje.name} style={{ width: '50px', height: '50px' }} />
                        {personaje.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RickAndMorty;
