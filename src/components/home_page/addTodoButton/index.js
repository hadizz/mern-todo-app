import React, { useState, useCallback } from "react";
import './style.css'

import AddTodoModal from './addTodoModal'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AddIcon from '@material-ui/icons/Add';

const AddTodoBtn = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    console.log("closeModal");

    setIsModalOpen(false);
  };

  const openModal = useCallback(event => {
    event.preventDefault();
    console.log(isModalOpen);
    setIsModalOpen(true);
  }, [isModalOpen]);

  return (
    <div>
      <div className="addTodoBtn">
        <button onClick={openModal}>
          <div className="addIcon-pc">
            <AddIcon style={{ marginRight: 5, marginLeft: 5 }} />
          </div>
          <div className="addIcon-mob">
            <AddCircleIcon className="addCircleIcon" />
            <span>تسک جدید</span>
          </div>
        </button>
      </div>
      <AddTodoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}



export default AddTodoBtn;
