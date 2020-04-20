import React from "react";
import Todo from "./todo";
const todos = [
  { id: 1, date: "2019/01/01", description: "به نام خدا", },
  { id: 2, date: "2019/01/02", description: "با رمز یا زهرا" },
  { id: 3, date: "2019/01/03", description: "یا هیچکس" },
  { id: 4, date: "2019/01/05", description: "شروع می‌کنیم" },
  { id: 6, date: "2019/01/10", description: "تسک 5" },
  { id: 7, date: "2019/01/15", description: "تسک 6" },
  { id: 8, date: "2019/02/01", description: "تسک 7" },
  { id: 5, date: "2019/02/08", description: "تسک 8" },
  { id: 9, date: "2019/03/01", description: "تسک 9" },
  { id: 10, date: "2019/09/01", description: "تسک 10" },
  { id: 11, date: "2019/11/01", description: "تسک 11" },
];

function upcoming() {
  return (
    <div className="upcoming">
      <h2>برنامه‌های نزدیک</h2>
      <div className="card">
        {todos.map((todo, index) => (
          <Todo details={todo} />
        ))}
      </div>
    </div>
  );
}

export default upcoming;
