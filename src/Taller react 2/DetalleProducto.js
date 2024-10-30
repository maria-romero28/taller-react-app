import React from "react";
const DetalleProducto = ({nombre, precio, descripcion}) => {
  return(
    <div>
      <h2>{nombre}</h2>
      <p>Precio: ${precio}</p>
      <p>Descripcion: {descripcion}</p>
    </div>
  );
};
const App = () => {
  return(
    <div>
      <h1>Detalle Del Producto</h1>
      <DetalleProducto
      nombre="Lapto"
      precio={1200}
      descripcion="Una lapto de alto rendimiento con 16GB de RAM y 512GB de SSD."
      />
    </div>
  );
};
export default App;