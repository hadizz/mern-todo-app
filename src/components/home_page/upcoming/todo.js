import React, { useState } from "react";
import './todo.css'

import { Label, Edit, Delete } from '@material-ui/icons'

import Modal from "./modal"

export default function Todo({ details }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="todoBox">
        <span className="todobox-line1">{details.description}</span>
        <div className="todobox-line2">
          <div className="tag-info">
            <Label className="tag-icon" style={{ color: details.tag.color }} />
            <span>{details.tag.name}</span>
          </div>
          <div className="functions">
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
