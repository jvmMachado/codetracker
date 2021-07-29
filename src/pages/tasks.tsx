import React, { useState } from 'react';
import Head from 'next/head';

import styles from './tasks.module.scss';
import { TasksTable } from '../components/TasksTable';
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

  const handleAddTask = async (task: TTask) => {
    console.log('adding task')
  }

  const handleUpdateTask = async (task: TTask) => {
    console.log('updating task')
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
        // editingTask={editingTask}
        handleUpdateTask={handleUpdateTask}
      />
      <div  className={styles.TasksContainer}>
        {tasks.map(task => (
          <Task key={task.id} task={task} handleEditTask={ () => {}} handleDelete={() => {}} />
        ))}
      </div>
      {/* <TasksTable /> */}
    </>
  )
}