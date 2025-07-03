import { useCallback, useEffect, useRef, useState } from 'react';
import ListItems from '../ListItems/ListItems';
import FormList from '../FormList/FormList';
import Errors from '../Errors/Errors';
import Modal from '../Modal/Modal';
import capitalizeTask from '../../utils/capitalizeTask';
import {
  ADD_TODO,
  CLEAR_ALL,
  DELETE_COMPLETED,
  DELETE_TODO,
  TOGGLE_TODO,
  useTodos,
} from '../../hooks/useTodos';
import useValidation from '../../hooks/useValidation';
import useModal from '../../hooks/useModal';
import ShowSelect from '../ShowSelect/ShowSelect';

export default function ToDo() {
  const { filterList, dispatch } = useTodos();
  const { errors, validate } = useValidation();
  const { showModal, editTask, openModal, closeModal } = useModal();
  const [task, setTask] = useState('');
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [filterList]);

  const handleChange = useCallback((e) => {
    setTask(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (validate(task)) {
        const newTask = {
          id: crypto.randomUUID(),
          task: capitalizeTask(task),
          isCompleted: false,
        };
        dispatch({ type: ADD_TODO, payload: newTask });
        setTask('');
      }
    },
    [task, validate, dispatch]
  );

  const handleDeleteTask = useCallback(
    (id) => {
      dispatch({ type: DELETE_TODO, payload: id });
    },
    [dispatch]
  );

  const handleToggleCompleteTask = useCallback(
    (id) => {
      dispatch({ type: TOGGLE_TODO, payload: id });
    },
    [dispatch]
  );

  const handleDeleteCompletedTasks = useCallback(() => {
    dispatch({ type: DELETE_COMPLETED });
  }, [dispatch]);

  const handleDeleteAllTasks = useCallback(() => {
    dispatch({ type: CLEAR_ALL });
    localStorage.removeItem('list');
  }, [dispatch]);

  return (
    <>
      <div
        className={`ToDo ${showModal ? 'opacity' : null}`}
        onClick={showModal ? closeModal : null}
      >
        <FormList
          task={task}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText={'Add Task'}
          inputRef={inputRef}
        />
        {errors && <Errors errors={errors} />}
        {filterList.length > 0 ? (
          <>
            <ShowSelect />
            <ListItems
              handleDeleteTask={handleDeleteTask}
              handleToggleCompleteTask={handleToggleCompleteTask}
              openModal={openModal}
            />
          </>
        ) : (
          <h4 className="initialMessage">
            Start adding tasks using the input text above!
          </h4>
        )}

        {filterList.length > 0 && (
          <div className="btnContainer">
            <button
              onClick={
                filterList.some((item) => item.isCompleted)
                  ? handleDeleteCompletedTasks
                  : null
              }
              className={`btnContainer__delete tasksCompleted ${
                filterList.every((item) => !item.isCompleted)
                  ? 'disabled'
                  : null
              }`}
            >
              Delete All Completed Tasks
            </button>
            <button
              onClick={handleDeleteAllTasks}
              className="btnContainer__delete"
            >
              Delete All Tasks
            </button>
          </div>
        )}
      </div>
      {showModal && <Modal setShowModal={closeModal} editTask={editTask} />}
    </>
  );
}
