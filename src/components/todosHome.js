import React from "react";
import "./todosHome.css";

import HeaderSection from "./headerSection";
import Categories from "./categories";
import Upcoming from "./upcoming";
import AddTodo from "./addTodo";

function todosHome() {
  return (
    <div>
      <HeaderSection />
      <Categories />
      <Upcoming />
      <AddTodo />
    </div>
  );
}

export default todosHome;
