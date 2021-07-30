import React, { useState } from 'react';
import Head from 'next/head';
import { uuid } from 'uuidv4';

import styles from './tasks.module.scss';
import ModalAddTask from '../components/ModalAddTask';
import ModalEditTask from '../components/ModalEditTask';
import { TTask } from '../types';
import Task from '../components/Task';
import initialTasks from '../tasks.json';

interface HomeProps {
  modalOpen: boolean;
  editModalOpen: boolean;
  toggleModal: () => void;
  toggleEditModal: () => void;
}

export default function Tasks({ modalOpen, toggleModal, editModalOpen, toggleEditModal }: HomeProps) {
  const [tasks, setTasks] = useState(initialTasks);
  const [editingTask, setEditingTask] = useState<TTask>({} as TTask);

  const handleAddTask = async (task: TTask) => {
    const newTask = {...task, id: uuid()};

    setTasks([...tasks, newTask]);
  }

  const handleUpdateTask = async (task: TTask) => {
    const newTasks = tasks.map(oldTask => 
      oldTask.id !== task.id ? oldTask : task
      )
      console.log(newTasks);
    setTasks(newTasks);
  }

  const handleDeleteTask = async (id: string) => {
    const TasksFiltered = tasks.filter(task => task.id !== id);

    setTasks(TasksFiltered);
  }

  const handleEditTask = (task: TTask) => {
    setEditingTask(task);
    toggleEditModal();
  }

  return (
    <>
      <Head>
        <title>Home | codetracker</title>
      </Head>

      <ModalAddTask
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddTask={handleAddTask}
      />
      <ModalEditTask
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingTask={editingTask}
        handleUpdateTask={handleUpdateTask}
      />
      <div  className={styles.TasksContainer}>
        {tasks.map(task => (
          <Task key={task.id} task={task} handleEditTask={ () => {handleEditTask(task)}} handleDelete={() => {handleDeleteTask(task.id)}} />
        ))}
      </div>
    </>
  )
}