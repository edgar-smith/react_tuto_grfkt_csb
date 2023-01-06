import React from "react";
import ReactDOM from "react-dom";
import Clock from "./components/Clock";
import Home from "./components/Home";
import Incrementer from "./components/incrementer";
import ManualIncrementer from "./components/manual-incrementer";

function Main() {
  return (
    <div>
      <Home />
      <Welcome name="Dorothée" />
      <Welcome name="Jean" />
      <Clock />
      <ManualIncrementer />
      <Incrementer start={10} />
      <Incrementer start={100} step={10} />
    </div>
  );
}

/** function Welcome(props) {
  console.log(props.name);
  return <h1>Bonjour</h1>;
}*/
function WelcomeFunc({ name, children }) {
  console.log(name);
  return (
    <div>
      <h1>Bonjour {name}</h1>
      <p>{children}</p>
    </div>
  );
}

class Welcome extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>Bonjour {this.props.name}</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

//ReactDOM.render(<Welcome name="Jean" />, document.querySelector("#root"));
/*ReactDOM.render(
  <WelcomeFunc name="Jean">Bonjour tout le monde</WelcomeFunc>,
  document.querySelector("#root")
);*/

/*ReactDOM.render(
  <Welcome name="Dorothée">Bonjour tout le monde</Welcome>,
  document.querySelector("#root")
);*/

ReactDOM.render(<Main />, document.querySelector("#root"));
