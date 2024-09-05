import "./Header.css"; // Imports de librerias, archivos locales, componentes,estilos,etc

//Datos, funciones, estructuras,clases, etc

const getRandomNum = () => {
  return Math.random();
};
let valor = 1;

// Declaracion de la funcion del componente, con la declaracion de sus propiedades
// Hay dos formas principales de recibir propiedades, directa o de estructurando
function Header({ services }) {
  //Al igual que fuera de la funcion componente, podemos seguir declarando variables funciones, etc
  const valor1 = getRandomNum();
  // HOOKS, metodos especificos de react para manejar el estado del componente, TIENEN QUE IR DENTRO DE LA FUNCION COMPONENTE

  //Declaracion del retorno, debe ser JSX con un elemento padre.....por lo regular....
  return (
    <header className="App-header">
      Header
      <div>
        <ul>
          <li className="Custom">Home</li>
          <li>{valor1}</li>
          <li>{services}</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
}

//Exportaciones, comunmente se exporta el componente actual, o podemos exportar multiples componentes, funciones, etc
export default Header;
