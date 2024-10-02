import React, { useState } from "react";
import { useThemeStore } from "../utils/themeStore";
function AgregarTarea({ setTareas }) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const { theme } = useThemeStore();

  function handleAgregar() {
    if (isValid) {
      setTareas((prevTareas) => {
        return [...prevTareas, value];
      });
    }
    setIsValid(false);
    setValue("");
  }
  return (
    <div>
      <h1>Agregar Tarea</h1>
      <div>
        <input
          type="text"
          placeholder="Nombre de la tarea"
          value={value}
          onChange={(event) => {
            if (event.target.value.length > 4) {
              setIsValid(true);
            } else {
              setIsValid(false);
            }
            setValue(event.target.value);
          }}
        />
        <button
          style={{
            margin: "10px",
            color: theme === "light" ? "white" : "black",
            backgroundColor: theme === "light" ? "black" : "white",
          }}
          onClick={handleAgregar}
        >
          Agregar
        </button>
        {isValid ? null : <p>Las tareas deben de tener al menos 5 letras</p>}
      </div>
    </div>
  );
}

export default AgregarTarea;
