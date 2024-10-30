import React, { Component } from 'react';

class ContadorClase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }
  Incrementar = () => {
    this.setState((prevState) => ({
      contador: prevState.contador + 1
    }));
  };

  render() {
    return (
      <div>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.Incrementar}>Incrementar</button>
      </div>
    );
  }
}

export default ContadorClase;
