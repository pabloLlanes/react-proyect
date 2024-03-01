import './App.css';

import ListadoDeCajas from './componentes/Cajas/ListadoCajas';
import JurassicPark from './componentes/JurassicPark/JurassicPark';
import ComponenteTareas from './componentes/ListaDeTareas/ComponenteTareas';
import RickAndMorty from './componentes/RickAndMorty/page';
import Verduleria from './componentes/Verduleria/Verduleria';

function App() {

  const saludoInicial = "Bienvenido a React, los saluda el componente APP"

  return (
    <div>
      <p>{saludoInicial}</p>

      {/*<ListadoDeCajas />*/}

      {/* <JurassicPark /> */}

      {/* <ComponenteTareas /> */}

      {/* <RickAndMorty /> */}

      <Verduleria />

    </div>
  );
}

export default App;
