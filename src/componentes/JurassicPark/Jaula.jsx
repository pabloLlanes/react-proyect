import Dinosaurio from './Dinosaurio';
function Jaula(props) {

    const { rigurosidad, proteccion, dinosaurios } = props

    return (
        <div>
            <h2>Jaula - Rigurosidad: {rigurosidad}, Protección: {proteccion}</h2>
            {dinosaurios.map((dino, index) => (
                <Dinosaurio key={index} nombre={dino.nombre} especie={dino.especie} />
            ))}
        </div>
    );
}

export default Jaula;
