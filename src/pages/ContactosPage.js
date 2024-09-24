import { useEffect, useState } from "react";

function ContactosPage() {
  const [contactos, setContactos] = useState([]);
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
          <li key={contacto.id}>
            {contacto.name} - {contacto.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ContactosPage;
