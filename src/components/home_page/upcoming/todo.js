import React, { useState } from "react";
import './todo.css'

import { Label, Edit, Delete } from '@material-ui/icons'

import Modal from "./modal"

export default function Todo({ details }) {

  const [show, setShow] = useState(false);
  const [active, setActive] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleActive = () => {
    console.log("clicked on todo box");
    console.log("active : " + active);
    setActive(!active);
    console.log("active : " + active);
  }

  return (
    <>
      <div className="todoBox" onClick={handleActive} style={{ transform: active ? "scale(1.03)" : "scale(1)", boxShadow: active ? `0 0 20px -10px ${details.tag.color}` : "0 0 0 0 rgb(0,0,0)", borderColor: active ? details.tag.color : "#eff0f5" }}>
        <span className="todobox-line1">{details.description}</span>
        <div className="todobox-line2">
          <div className="tag-info">
            <Label className="tag-icon" style={{ color: details.tag.color }} />
            <span>{details.tag.name}</span>
          </div>
          <div className="functions" style={{ display: active ? "block" : "none" }}>
            <Edit className="tag-icon" onClick={handleShow} style={{ color: "rgba(200, 200, 200)", marginRight: 5 }} />
            <Delete className="tag-icon" style={{ color: "rgba(200, 200, 200)" }} />
          </div>
        </div>
      </div>

      <Modal
        show={show}
        close={handleClose}
        header={"ادیت تسک"}
        preTask={details.description}
        tag={details.tag}
      >
      </Modal>

    </>
  );
}
