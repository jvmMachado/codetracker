import React from 'react';
import Head from 'next/head';

import styles from './tasks.module.scss';
import { TasksTable } from '../components/TasksTable';
import ModalAddTask from '../components/ModalAddTask';
import ModalEditTask from '../components/ModalEditTask';
import { TFood } from '../types';

interface HomeProps {
  modalOpen: boolean;
  editModalOpen: boolean;
  toggleModal: () => void;
  toggleEditModal: () => void;
}

export default function Home({ modalOpen, toggleModal, editModalOpen, toggleEditModal }: HomeProps) {

  const handleAddTask = async (task: TFood) => {
    console.log('adding task')
  }

  const handleUpdateTask = async (task: TFood) => {
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

      <TasksTable />
    </>
  )
}