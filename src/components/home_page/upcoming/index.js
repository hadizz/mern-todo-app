import React from "react";
import "./style.css";

import Todo from "./todo";
import { connect } from "react-redux";
import { todoRemove, todoModify } from "../../../redux/actions";
import NoTasks from './NoTasks'
// import { todoss } from '../../../data/dataArray'

function Upcoming({ todos, tags, deleteTodo, modifyTodo }) {
  console.log("todos: ", todos);

  return (
    <div className="upcoming">
      <h2>برنامه‌های من</h2>
      <div className="card">
        {todos ? (
          todos.length === 0 ? (
            <NoTasks />
          ) : (
            todos.map((todo) => (
              <Todo key={todo.id} details={todo} tags={tags}deleteTodo={deleteTodo} modifyTodo={modifyTodo}/>
            ))
          )
        ) : (
            <NoTasks />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  tags: state.tags
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => dispatch(todoRemove(id)),
  modifyTodo: (id, date, description, tag) => dispatch(todoModify(id, date, description, tag)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Upcoming);
