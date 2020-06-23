import * as actionTypes from "../actionTypes";
import { initTags } from "../initState";

let lastId = -1;

export default function todos(state = [], action) {
  switch (action.type) {
    case actionTypes.TODO_ADD:
      console.log("TODO_ADD called");

      return [
          ...state,
          {
            id: ++lastId,
            done: false,
            date: action.payload.date,
            description: action.payload.description,
            tag: action.payload.tag,
          },
        ];

    case actionTypes.TODO_REMOVE:
      console.log("TODO_REMOVE called");

      return state.filter(
          (todo) => todo.id !== action.payload.id
        );

    case actionTypes.TODO_MODIFY:
      console.log("TODO_MODIFY called");

      return state.map((todo) =>
        todo.id !== action.payload.id
          ? todo
          : {
              ...todo,
              date: action.payload.date,
              description: action.payload.description,
              tag: action.payload.tag,
            }
      );

    case actionTypes.TODO_RESOLVED:
      console.log("TODO_RESOLVED called");

      return state.map((todo) =>
        todo.id !== action.payload.id ? todo : { ...todo, done: !todo.done }
      );

    case actionTypes.TODO_RESOLVED_ALL:
      console.log("TODO_RESOLVED_ALL called");

      return state.map((todo) =>
        1 === 1 ? { ...todo, done: !todo.done } : todo
      );

    default:
      return state;
  }
}
