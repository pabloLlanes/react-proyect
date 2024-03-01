import { useState } from 'react';
import AgregarFrutaForm from './AgregarFrutaForm';
import ListaDeFrutas from './ListaDeFrutas';
import './Verduleria.css';

function Verduleria() {
    const [frutas, setFrutas] = useState([]);

    const cargarFrutas = () => {
        const frutasAlmacenadas = JSON.parse(localStorage.getItem('frutas')) || [];
        setFrutas(frutasAlmacenadas);
    };

    const agregarFruta = (fruta) => {
        const nuevasFrutas = [...frutas, fruta]; // fruta ya es un objeto aquí
        setFrutas(nuevasFrutas);
        localStorage.setItem('frutas', JSON.stringify(nuevasFrutas));
    };

    return (
        <div>
            <h1>Lista de Frutas</h1>
            <AgregarFrutaForm agregarFruta={agregarFruta} />
            <ListaDeFrutas frutas={frutas} />
            <button onClick={cargarFrutas}>Cargar Frutas</button>
        </div>
    );
}

export default Verduleria;
