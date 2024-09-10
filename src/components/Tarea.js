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
      <button
        onClick={(e) => {
          e.target.parentElement.remove();
        }}
      >
        Eliminar
      </button>
    </div>
  );
}
export default Tarea;
