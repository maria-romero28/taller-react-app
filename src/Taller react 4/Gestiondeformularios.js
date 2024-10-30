import React, { useState } from "react";
const Formulario =()=>{
    const [Nombre, setNombre]=useState('');
    const [Nombremostrado, setNombremostrado]=useState('');
    
    const handleInputChange=(e)=>{
        setNombre(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault(); 
        setNombremostrado(Nombre); 
      };
    
      return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Nombre de usuario:
              <input 
                type="text" 
                value={Nombre} 
                onChange={handleInputChange} 
                placeholder="Escribe tu nombre" 
              />
            </label>
            <button type="submit">Mostrar nombre</button>
          </form>
    
          {Nombremostrado && <h2>Nombre ingresado: {Nombremostrado}</h2>}
        </div>
      );
    };
    
    export default Formulario;
