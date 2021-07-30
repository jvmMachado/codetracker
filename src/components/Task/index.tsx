import { useState } from 'react';
import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';
// import api from '../../services/api';
import { TTask } from '../../types';

interface TaskProps {
  task: TTask;
  handleEditTask: (data: TTask) => void;
  handleDelete: (taskId: string) => void;
}

const Task = (props: TaskProps) => {


  const setEditingTask = () => {
    const { task, handleEditTask } = props;

    handleEditTask(task);
  }

  const { task, handleDelete } = props;

  return (
    <Container >
      <header>
      </header>
      <section className="body">
        <h2>{task.title}</h2>
        <p>{task.description}</p>
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

        <div className="status-container">
          <p>{task.status}</p>
        </div>
      </section>
    </Container>
  );
};

export default Task;
