import { cajas } from '../../constantes/cajas';

function ListadoDeCajas() {

    console.log(cajas);

    const urlImagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZyX7dz_k6SPH7xRKxp7h21fVENeN-NKNRhLgaeLSX0A&s'

    return (
        <div>
            <h1>ListadoDeCajas</h1>
            <img src={urlImagen} alt="las cajas" />

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
