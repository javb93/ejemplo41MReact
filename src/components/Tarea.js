function Tarea({ tarea }) {
  return (
    <div>
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
