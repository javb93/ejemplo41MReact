import React, { useState } from "react";
import AgregarTarea from "../components/AgregarTarea";
import ListaTareas from "../components/ListaTareas";

const TareaPage = () => {
  const [tareas, setTareas] = useState([]);
  return (
    <div>
      <AgregarTarea setTareas={setTareas}></AgregarTarea>
      <ListaTareas tareas={tareas}></ListaTareas>
    </div>
  );
};
export default TareaPage;
