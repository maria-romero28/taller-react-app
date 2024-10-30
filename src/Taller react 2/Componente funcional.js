import React, {useState} from "react";
const Contador =() =>{
  const [contador, setContador] = useState(0);


  const Incremnetar =()=>{
    setContador(contador + 1);
  };

  return(
    <div>
      <p>Contador:{contador}</p>
      <button onClick={Incremnetar}>Incremnetar</button>
    </div>

   );
};
export default Contador;