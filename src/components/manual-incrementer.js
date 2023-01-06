import React from "react";
import ReactDOM from "react-dom";

class ManualIncrementer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { n: 0 };
  }

  increment(e) {
    console.log(e);
    this.setState((state, props) => ({ n: state.n + 1 }));
  }

  render() {
    return (
      <div>
        <h3>Manual incrementer</h3>
        Valeur: {this.state.n}{" "}
        <button onClick={this.increment.bind(this)}>Incrémenter</button>
      </div>
    );
  }
}

export default ManualIncrementer;
