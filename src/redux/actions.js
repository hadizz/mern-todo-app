import * as actionTypes from "./actionTypes";

// -------------------------- T O D O S

export const todoAdd = (date, description, tag) => ({
  type: actionTypes.TODO_ADD,
  payload: {
    date,
    description,
    tag,
  },
});

export const todoRemove = (id) => ({
  type: actionTypes.TODO_REMOVE,
  payload: {
    id,
  },
});

export const todoResolved = (id) => ({
  type: actionTypes.TODO_RESOLVED,
  payload: {
    id,
  },
});

export const todoResolvedAll = () => ({
  type: actionTypes.TODO_RESOLVED_ALL,
});

export const todoModify = (id, date, description, tag) => ({
  type: actionTypes.TODO_MODIFY,
  payload: {
    id,
    date,
    description,
    tag,
  },
});

// -------------------------- T A G S

export const tagAdd = (name, color) => ({
  type: actionTypes.TAG_ADD,
  payload: {
    name,
    color,
  },
});
