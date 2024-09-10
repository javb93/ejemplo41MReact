import { useState } from "react";
import "./App.css";
import AgregarTarea from "./components/AgregarTarea";
import ListaTareas from "./components/ListaTareas";

// Componente funcional
function App() {
  const [tareas, setTareas] = useState([]);
  return (
    <div className="App">
      EN CONSTRUCCION
      <AgregarTarea setTareas={setTareas}></AgregarTarea>
      <ListaTareas tareas={tareas}></ListaTareas>
    </div>
  );
}

export default App;
