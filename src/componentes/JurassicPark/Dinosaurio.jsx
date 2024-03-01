function Dinosaurio(props) {

    // eslint-disable-next-line react/prop-types
    const { nombre, especie } = props;

    return (
        <div>
            <h3>{nombre}</h3>
            <p>Especie: {especie}</p>
        </div>
    );
}

export default Dinosaurio;
