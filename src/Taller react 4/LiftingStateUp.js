import React, { useState } from "react";

function App() {
  const [numero, setNumero] = useState(""); // Estado que compartiremos

  return (
    <div>
      <Formulario setNumero={setNumero} />
      <Resultado numero={numero} />
    </div>
  );
}

function Formulario({ setNumero }) {
  const manejarCambio = (e) => {
    setNumero(e.target.value); // Actualizamos el estado en el componente padre
  };

  return (
    <div>
      <label>Introduce un número:</label>
      <input type="text" onChange={manejarCambio} />
    </div>
  );
}

function Resultado({ numero }) {
  return (
    <div>
      <h2>El número es: {numero}</h2>
    </div>
  );
}

export default App;