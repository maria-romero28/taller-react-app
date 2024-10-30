import React from "react";
const Producto =({nombre, precio})=>{
  return(
    <div>
      <h2>{nombre}</h2>
      <p>$Precio:{precio}</p>
    </div>
  );
};
const Listaproducto =({productos}) => {
  return(
    <div>
      {productos.map((producto,index)=>(
        <Producto
        key={index}
        nombre={producto.nombre}
        precio={producto.precio}
        />
      ))}
    </div>
  );
};
const App = () =>{
  const productos =[
    {nombre:"Camiseta", precio: 25},
    {nombre:"Pantalones", precio: 40},
    {nombre:"Zapatos", precio: 60}
  ];
  return(
    <div>
      <h1>Listaproducto</h1>
      <Listaproducto productos={productos}/>
    </div>
  );
};
export default App;