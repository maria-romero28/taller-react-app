import React, { useState } from "react";
function App(){
    const[contador, setContador]=useState(0);

    const Styles={
        body: {
            fontFamily: 'Arial, sans-serif',
            backgroundColor: 'pink',
            margin: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
          },
          container: {
            textAlign: 'center',
            backgroundColor: '#4a90e2',
            padding: '40px',
            borderRadius: '10px',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
            color: 'white',
          },
          button: {
            fontSize: '1.5rem',
            padding: '10px 20px',
            backgroundColor: '#50e3c2',
            border: 'none',
            borderRadius: '5px',
            color: 'white',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          },
          buttonHover: {
            backgroundColor: '#4cd4a0',
          },
          buttonActive: {
            transform: 'scale(0.98)',
          }
        };
      
        return (
            <div style={Styles.body}>
              <div style={Styles.container}>
                <h1>Contador: <span>{contador}</span></h1>
                <button
                  style={Styles.button}
                  onClick={() => setContador(contador + 1)}
                  onMouseOver={e => e.target.style.backgroundColor = Styles.buttonHover.backgroundColor}
                  onMouseOut={e => e.target.style.backgroundColor = Styles.button.backgroundColor}
                  onMouseDown={e => e.target.style.transform = Styles.buttonActive.transform}
                  onMouseUp={e => e.target.style.transform = 'scale(1)'}
                >
                  Incrementar
                </button>
              </div>
            </div>
          );
        }
        
        export default App;