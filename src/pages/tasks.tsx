import React from 'react';
import Head from 'next/head';

import styles from './tasks.module.scss';
import { TasksTable } from '../components/TasksTable';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | codetracker</title>
      </Head>

      <TasksTable />
    </>
  )
}