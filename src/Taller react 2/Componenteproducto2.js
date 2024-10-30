import React from 'react';

const Producto = ({ nombreProducto, precio }) => {
  return (
    <div style={styles.producto}>
      <h2>{nombreProducto}</h2>
      <p>Precio: ${precio}</p>
    </div>
  );
};


const ListaDeProductos = ({ productos }) => {
  return (
    <div style={styles.lista}>
      {productos.map((producto, index) => (
       
        <Producto key={index} nombreProducto={producto.nombre} precio={producto.precio} />
      ))}
    </div>
  );
};


const styles = {
  producto: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    backgroundColor: '#f5f5f5',
    textAlign: 'center',
    width: '200px',
  },
  lista: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
};


const App = () => {
  
  const productos = [
    { nombre: 'Laptop', precio: 1000 },
    { nombre: 'Smartphone', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Monitor', precio: 200 },
  ];

  return (
    <div>
      <h1>Lista de Productos</h1>
      <ListaDeProductos productos={productos} />
    </div>
  );
};

export default App;