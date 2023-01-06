import React from "react";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "Jean"
    };
  }

  handleChange(e) {
    console.log(e);
  }

  render() {
    return (
      <div>
        <label htmlFor="nom">Mon nom</label>
        <input
          type="text"
          id="nom"
          name="nom"
          value={this.state.nom}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
