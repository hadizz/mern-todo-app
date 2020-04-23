import React from "react";
import Tag from "../assets/img/tag.svg"

// import SvgIcon from '@material-ui/core/SvgIcon';
// // or
// import { SvgIcon } from '@material-ui/core';

import { Label, Edit, Delete } from '@material-ui/icons'


export default function todo({ details }) {
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
            <Edit className="tag-icon" style={{ color: "rgba(200, 200, 200)", marginRight: 5 }} />
            <Delete className="tag-icon" style={{ color: "rgba(200, 200, 200)" }} />
          </div>
        </div>
      </div>
    </>
  );
}
