import React from "react";
import './style.css'

import Todo from "./todo";

import { todos } from '../../../data/dataArray'

function upcoming() {
  return (
    <div className="upcoming">
      <h2>برنامه‌های من</h2>
      <div className="card">
        {todos.map((todo, index) => (
          <Todo details={todo} />
        ))}
      </div>
    </div>
  );
}

export default upcoming;
