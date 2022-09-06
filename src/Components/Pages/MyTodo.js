import * as React from "react";

export default function MyTodo() {
  return (
    <section id="todo">
      <h1 className="m-3">Liste de tâches</h1>
      <ul className="list-group m-3">
        <li className="list-group-item d-flex align-tiems-center">
          Tâche 1
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
        <li className="list-group-item d-flex align-tiems-center">
          Tâche 2
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
        <li className="list-group-item d-flex align-tiems-center">
          Tâche 3
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
        <li className="list-group-item d-flex align-tiems-center">
          Tâche 4
          <button className="btn btn-sm ml-auto btn-outline-success">
            &#x2713;
          </button>
        </li>
      </ul>
      <footer
        className="d-flex justify-content-between bg-secondary p-3"
        id="mainFooter"
      ></footer>
    </section>
  );
}
