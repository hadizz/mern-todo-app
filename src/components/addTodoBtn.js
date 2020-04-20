import React, { useState, useCallback } from "react";

import AddTodoModal from './addTodoModal'

const AddTodoBtn = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    console.log("closeModal");

    setIsModalOpen(false);
  };

  const openModal = useCallback(event => {
    event.preventDefault();
    console.log(isModalOpen);
    console.log("clicked");

    setIsModalOpen(true);
    console.log(isModalOpen);

  }, [isModalOpen]);

  return (
    <div>
      <div className="addTodoBtn">
        <button onClick={openModal}>تسک جدید</button>
      </div>
      <AddTodoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}



export default AddTodoBtn;
