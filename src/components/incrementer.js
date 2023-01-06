import React from "react";

class Incrementer extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { n: this.props.start, step: this.props.step ? this.props.step : 1 };
    this.state = { n: this.props.start, timer: null };
    this.toggle = this.toggle.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    //this.timer = window.setInterval(this.increment.bind(this), 1000);
    this.play();
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timer);
  }

  increment() {
    //this.setState({ n: this.state.n + 1 });
    /*this.setState(function (state, props) {
      return {n: state.n + 1}
    }*/
    this.setState((state, props) => ({ n: state.n + props.step }));
  }

  pause() {
    window.clearInterval(this.state.timer);
    this.setState({
      timer: null
    });
  }

  play() {
    window.clearInterval(this.state.timer);
    this.setState({
      timer: window.setInterval(this.increment.bind(this), 1000)
    });
  }

  toggle() {
    return this.state.timer ? this.pause() : this.play();
  }

  label() {
    return this.state.timer ? "Pause" : "Lecture";
  }

  reset() {
    // window.clearInterval(this.state.timer);
    // this.setState({
    //   n: this.props.start,
    //   timer: null
    // });
    this.pause();
    this.play();
    this.setState({
      n: this.props.start
    });
  }

  render() {
    return (
      <div>
        <h3>Incrementer</h3>
        Valeur : {this.state.n}{" "}
        {this.state.timer ? (
          <button onClick={this.pause.bind(this)}>Pause</button>
        ) : (
          <button onClick={this.play.bind(this)}>Play</button>
        )}{" "}
        <button onClick={this.toggle}>{this.label()}</button>{" "}
        <button onClick={this.reset}>Réinitialiser</button>
      </div>
    );
  }
}

Incrementer.defaultProps = { start: 0, step: 1 };

export default Incrementer;
