import "./styles.css";

import React from "react";
import ReactDOM from "react-dom";

let n = 0;

function numberFormat(n) {
  return n.toString().padStart(2, "0");
}
//Bonjour les gens <span>{n % 2 ? numberFormat(n) : null}</span>
function render() {
  const items = ["Tache 1", "Tache 2", "Tache 3"];
  const lis = items.map((item, k) => <li key={k}>{item}</li>);
  const title = (
    <>
      <h1 className="title" id={"title" + n}>
        Bonjour les gens <span>{n}</span>
      </h1>
      <ul>{lis}</ul>
    </>
  );

  ReactDOM.render(title, document.querySelector("#root"));
}

render();
console.log("ok");

window.setInterval(() => {
  n++;
  render();
}, 1000);
