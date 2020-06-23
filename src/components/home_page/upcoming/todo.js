import React, { useState } from "react";
import './todo.css'

import { Label, Edit, Delete } from '@material-ui/icons'

import Modal from "./modal"

export default function Todo({details, tags, deleteTodo, modifyTodo }) {

  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDelete = () => {
    console.log('delete icon clicked!!!');
    deleteTodo(details.id);
    // dispatch(deleteTODO(details.id));
  }
  const handleActive = () => {
    setActive(!active);
  }

  return (
    <>
      <div className="todoBox" onClick={handleActive} style={{ cursor: active ? "default" : "pointer", transform: active ? "scale(1.028)" : "scale(1)", boxShadow: active ? `0 0 20px -10px ${details.tag.color}` : "0 0 0 0 rgb(0,0,0)", borderColor: active ? details.tag.color : "#eff0f5" }}>
        <span className="todobox-line1">{details.description}</span>
        <div className="todobox-line2">
          <div className="tag-info">
            <Label className="tag-icon" style={{ color: details.tag===null ? 'white' : details.tag.color }} />
            <span>{details.tag===null ? 'empty' : details.tag.name}</span>
          </div>
          <div className="functions" style={{ display: active ? "block" : "none" }}>
            <Edit className="tag-icon" onClick={handleShow} style={{ cursor: "pointer", color: "rgba(200, 200, 200)", marginRight: 5 }} />
            <Delete className="tag-icon" onClick={handleDelete} style={{ cursor: "pointer", color: "rgba(200, 200, 200)" }} />
          </div>
        </div>
      </div>

      <Modal
        show={show}
        close={handleClose}
        thisTodo={details}
        tags={tags}
        modifyTodo={modifyTodo}
      />

    </>
  );
}
