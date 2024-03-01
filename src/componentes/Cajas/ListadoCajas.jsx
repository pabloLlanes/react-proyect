import { cajas } from '../../constantes/cajas';


function ListadoDeCajas() {

    console.log(cajas);

    return (
        <div>
            <h1>ListadoDeCajas</h1>

            <div>
                <ul>
                    {
                        cajas.map((caja) =>
                            <li key={caja.id}>
                                {caja.id} - {caja.color}
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
}

export default ListadoDeCajas;
