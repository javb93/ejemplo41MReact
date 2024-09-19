function NavBar() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <button style={{ marginRight: "20px" }}>
        <a href="/">Lista de tareas</a>
      </button>
      <button>
        <a href="/contactos">Contactos</a>
      </button>
    </div>
  );
}
export default NavBar;
