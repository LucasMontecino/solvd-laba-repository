import { useState } from "react";

export default function useModal() {
  const [showModal, setShowModal] = useState(false);
  const [editTask, setEditTask] = useState(null);

  function openModal(task) {
    setEditTask(task);
    setShowModal(true);
  }

  function closeModal() {
    setEditTask(null);
    setShowModal(false);
  }

  return {
    showModal,
    editTask,
    openModal,
    closeModal,
  };
}
