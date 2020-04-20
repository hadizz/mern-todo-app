import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTag } from '@fortawesome/free-solid-svg-icons'

export default function todo({ details }) {
  return (
    <>
      <div className="todoBox">
        <span className="todobox-line1">{details.description}</span>
        <div className="todobox-line2">
          <div className="tag-info">
            <FontAwesomeIcon icon={faTag} className="tag-icon" style={{ color: "orange" }} />
            <span>خرید</span>
          </div>
        </div>
      </div>
    </>
  );
}
