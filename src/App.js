import "./App.css";
import Contador from "./Contador";
import Header from "./Header";
import { useState } from "react";
// Componente funcional
function App() {
  const [isLoading, setIsLoading] = useState(true);

  console.log("Cargando");
  console.log(isLoading);
  function handleClick() {
    console.log("boton presionado");
    setIsLoading(false);
    console.log(isLoading);
  }
  return (
    <div className="App">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Header services="Servicio de ejemplo"></Header>
      )}
      <Contador></Contador>
      <button onClick={handleClick}>- MUESTRA EL HEADER</button>
    </div>
  );
}

export default App;
