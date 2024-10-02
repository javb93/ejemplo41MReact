import { useThemeStore } from "../utils/themeStore";
import { Link } from "react-router-dom";
function NavBar() {
  const { toogleTheme } = useThemeStore();
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <button style={{ marginRight: "20px" }}>
        <Link to="/">Lista de tareas</Link>
      </button>
      <button>
        <Link to="/contactos">Contactos</Link>
      </button>
      <button onClick={toogleTheme}>Cambiar tema</button>
    </div>
  );
}
export default NavBar;
