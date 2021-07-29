import { useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';
// import api from '../../services/api';
import { TTask } from '../../types';

interface TaskProps {
  task: TTask;
  handleEditTask: (data: TTask) => void;
  handleDelete: (taskId: number) => void;
}

const Task = (props: TaskProps) => {
  const { available } = props.task;
  const [isAvailable, setIsAvailable] = useState(available);

  const toggleAvailable = async () => {
    // const { task } = props;

    // // await api.put(`/tasks/${task.id}`, {
    // //   ...task,
    // //   available: !isAvailable,
    // // });

    setIsAvailable(!isAvailable);
  }

  const setEditingTask = () => {
    const { task, handleEditTask } = props;

    handleEditTask(task);
  }

  const { task, handleDelete } = props;

  return (
    <Container available={isAvailable}>
      <header>
      </header>
      <section className="body">
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        {/* <p className="price">
          R$ <b>{task.price}</b>
        </p> */}
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={setEditingTask}
            data-testid={`edit-task-${task.id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(task.id)}
            data-testid={`remove-task-${task.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

          <label htmlFor={`available-switch-${task.id}`} className="switch">
            <input
              id={`available-switch-${task.id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={toggleAvailable}
              data-testid={`change-status-task-${task.id}`}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  );
};

export default Task;
