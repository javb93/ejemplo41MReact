import Tarea from "./Tarea";

function ListaTareas({ tareas }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {tareas.map((tarea) => {
        return <Tarea tarea={tarea} />;
      })}
    </div>
  );
}

export default ListaTareas;
