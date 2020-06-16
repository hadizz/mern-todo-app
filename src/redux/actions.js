import * as actionTypes from "./actionTypes";

export const todoAdd = (date, description, tag) => ({
  type: actionTypes.TODO_ADD,
  payload: {
    date,
    description,
    tag,
  },
});

export const todoRemove = (id) => ({
  type: actionTypes.TODO_ADD,
  payload: {
    id,
  },
});

export const todoModify = (id) => ({
  type: actionTypes.TODO_ADD,
  payload: {
    id,
    date,
    description,
    tag,
  },
});
