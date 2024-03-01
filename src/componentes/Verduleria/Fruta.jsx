
function Fruta(props) {

    const { nombre, imagen } = props;

    return (
        <div className="fruta">
            <img src={imagen} alt={nombre} />
            <span>{nombre}</span>
        </div>);

}

export default Fruta;
