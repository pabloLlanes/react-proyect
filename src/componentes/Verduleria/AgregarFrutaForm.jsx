import { useState } from 'react';

function AgregarFrutaForm({ agregarFruta }) {
    const [nombreFruta, setNombreFruta] = useState('');
    const [imagenFruta, setImagenFruta] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        agregarFruta({ nombre: nombreFruta, imagen: imagenFruta });
        setNombreFruta('');
        setImagenFruta('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Introduce una fruta"
                value={nombreFruta}
                onChange={(e) => setNombreFruta(e.target.value)}
            />
            <input
                type="text"
                placeholder="URL de la imagen"
                value={imagenFruta}
                onChange={(e) => setImagenFruta(e.target.value)}
            />
            <button type="submit">Agregar Fruta</button>
        </form>
    );
}


export default AgregarFrutaForm;
