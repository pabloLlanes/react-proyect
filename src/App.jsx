import './App.css';
import ListadoDeCajas from './componentes/Cajas/ListadoCajas';
import JurassicPark from './componentes/JurassicPark/JurassicPark';


function App() {

  const saludoInicial = "Bienvenido a React, los saluda el componente APP"

  return (
    <div>
      <h1>{saludoInicial}</h1>

      {/*<ListadoDeCajas />*/}

      <JurassicPark />



    </div>
  );
}

export default App;
