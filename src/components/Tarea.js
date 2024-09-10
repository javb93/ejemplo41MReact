function Tarea({ tarea }) {
  return (
    <div
      style={{
        border: "solid blue",
        borderRadius: "30%",
        margin: "10px",
        width: "50%",
      }}
    >
      <p>{tarea}</p>
      <button>Eliminar</button>
    </div>
  );
}
export default Tarea;
