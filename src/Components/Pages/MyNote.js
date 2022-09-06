import * as React from "react";

export default function MyTodo() {
  return (
    <section id="todo">
      <h1 className="m-3">Liste des Notes</h1>
      <ul className="list-group">
        <li className="list-group-item d-flex align-item-items-center">
          Note 1
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
        <li className="list-group-item d-flex align-item-items-center">
          Note 2
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
        <li className="list-group-item d-flex align-item-items-center">
          Note 3
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
        <li className="list-group-item d-flex align-item-items-center">
          Note 4
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
      </ul>
    </section>
  );
}
