import React from "react";
import "./todosHome.css";

import HeaderSection from "./headerSection";
import Categories from "./categories";
import Upcoming from "./upcoming";
import AddTodoBtn from "./addTodoBtn";

function todosHome() {
  return (
    <div>
      <HeaderSection />
      <Categories />
      <Upcoming />
      <AddTodoBtn />
    </div>
  );
}

export default todosHome;
