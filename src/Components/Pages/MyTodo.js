import * as React from "react";

export default function MyTodo() {
  return (
    <section className="card">
      <h1>Liste de tâches</h1>
      <ul>
        <li>
          Tâche 1<button>&#x2713;</button>
        </li>
        <li>
          Tâche 2<button>&#x2713;</button>
        </li>
        <li>
          Tâche 3<button>&#x2713;</button>
        </li>
        <li>
          Tâche 4<button>&#x2713;</button>
        </li>
      </ul>
    </section>
  );
}
