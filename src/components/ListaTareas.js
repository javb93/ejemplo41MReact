import { StyledTarea } from "./Styled";

function ListaTareas({ tareas }) {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {tareas.map((tarea) => {
        return <StyledTarea tarea={tarea} />;
      })}
    </div>
  );
}

export default ListaTareas;
