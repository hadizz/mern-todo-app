import * as actionTypes from "./actionTypes";

let lastId = 0;

export default function reducer(state = [], action) {
  switch (action.type) {
    case actionTypes.TODO_ADD:
      return [
        ...state,
        {
          id: ++lastId,
          date: action.payload.date,
          description: action.payload.description,
          tag: action.payload.tag,
        },
      ];

    case actionTypes.TODO_REMOVE:
      return state.filter((todo) => todo.id !== action.payload.id);

    case actionTypes.TODO_MODIFY:
      return state.map((todo) =>
        todo.id !== action.payload.id
          ? todo
          : { ...todo, date, description, tag }
      );

    default:
      return state;
  }
}
