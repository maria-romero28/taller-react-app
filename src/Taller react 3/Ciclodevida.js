
import React, { Component } from 'react';

class ciclodevida extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
    console.log('Constructor: el componente se está construyendo');
  }

  componentDidMount() {
    console.log('ComponentDidMount: el componente se ha montado');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('ComponentDidUpdate: el componente se ha actualizado');
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount: el componente se va a desmontar');
  }

  incrementarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.incrementarContador}>Incrementar</button>
      </div>
    );
  }
}

export default ciclodevida;