import Fruta from './Fruta';

function ListaDeFrutas({ frutas }) {
    return (
        <div className="lista-frutas">
            {frutas.map((fruta, index) => (
                <Fruta key={index} nombre={fruta.nombre} imagen={fruta.imagen} />
            ))}
        </div>
    );
}


export default ListaDeFrutas;
