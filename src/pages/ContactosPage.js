import { useEffect, useState } from "react";
import { useThemeStore } from "../utils/themeStore";
function ContactosPage() {
  const [contactos, setContactos] = useState([]);
  const { theme } = useThemeStore();
  /*function getContactos() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setContactos(data);
      });
  }
  Version con promises de manejar operacion asyncrona
  */
  //Version con async await para manejar operaciones asyncronas
  async function getContactoAsync() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setContactos(data);
  }
  useEffect(() => {
    getContactoAsync();
    console.log("Cargado correctamente");
  }, []);

  return (
    <div>
      <h1>Contactos</h1>
      <ul>
        {contactos.map((contacto) => (
          <li
            style={{
              margin: "10px",
              color: theme === "light" ? "white" : "black",
              backgroundColor: theme === "light" ? "black" : "white",
            }}
            key={contacto.id}
          >
            {contacto.name} - {contacto.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ContactosPage;
