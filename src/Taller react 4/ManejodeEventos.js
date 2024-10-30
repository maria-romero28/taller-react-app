import React from "react";
const Click=()=>{
    const handleClick=()=>{
        alert("¡Boton Clickeado!");
    };
    return(
        <div>
            <button onClick={handleClick}>Haz click aqui</button>
        </div>
    );
};
export default Click;