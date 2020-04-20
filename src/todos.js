import React from "react";
import Todo from "./todo";

export default function todos({ items }) {
  if (items.length === 0) return <p>تسکی وجود ندارد</p>;
  return (
    <ul>
      {items.map((todo) => (
        <li className="todo">
          <Todo key={todo.id} details={todo} />
        </li>
      ))}
    </ul>
  );
}
