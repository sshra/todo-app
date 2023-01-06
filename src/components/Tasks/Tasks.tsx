import React, { ReactNode } from 'react';
import { Table } from 'react-bootstrap';
// import s from './Tasks.module.scss';
import { useAppSelector } from '../../hooks/hooks';
import Task from './Task';

export const Tasks = (): React.ReactElement => {
  const { elms: tasks } = useAppSelector(state => state.tasks);

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>Status</th>
          <th>Type</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {tasks.length === 0
          ? <tr><td colSpan={4}>No records!</td></tr>
          : tasks.map<ReactNode>((item, index) =>
            <Task key={item.taskUID} task={item} index={index} />
          )
        }
      </tbody>
    </Table>
  );
};
