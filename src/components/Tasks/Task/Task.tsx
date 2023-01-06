import React, { MouseEventHandler, useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { IToDoTask } from '../../../api/tasks';
import s from './Task.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faCheck, faEdit, faCalendarCheck }
  from '@fortawesome/free-solid-svg-icons';
import DeleteDialog from './DeleteDialog';
import { useAppDispatch } from '../../../hooks/hooks';
import { toggleTodo } from '../../../store/tasks';
import { setTask } from '../../../store/currentTaskSlice';

interface IProps {
  task: IToDoTask
  index: number
}

const TaskDraft = ({ task, index }: IProps): React.ReactElement => {
  const [show, setShow] = useState(false);
  const dispatch = useAppDispatch();

  const handleDeleteDialog: MouseEventHandler = (e) => {
    setShow(true);
  }

  const handleDoneToggle: MouseEventHandler = (e) => {
    dispatch(toggleTodo(task.taskUID));
  }

  const handleEdit: MouseEventHandler = (e) => {
    dispatch(setTask(task));
  }

  return (
    <tr className={s[`type-${task.importance}`]}>
      <td>{index + 1}</td>
      <td className={s.task}>
        {task.isDone ? <s>{task.title}</s> : task.title}
      </td>
      <td>{task.isDone ? 'done' : 'in progress'}</td>
      <td>{task.importance}</td>
      <td>
        <Stack direction="horizontal" gap={2}>
          <Button variant="danger">
            <FontAwesomeIcon icon={faTrash} onClick={handleDeleteDialog}/>
          </Button>
          {show &&
            <DeleteDialog taskID={task.taskUID} show={show} setShow={setShow} />
          }
          {task.isDone
            ? <Button variant="success">
                <FontAwesomeIcon icon={faCalendarCheck} onClick={handleDoneToggle} />
              </Button>
            : <Button variant="success">
                <FontAwesomeIcon icon={faCheck} onClick={handleDoneToggle} />
              </Button>
          }
          <Button variant="success">
            <FontAwesomeIcon icon={faEdit} onClick={handleEdit}/>
          </Button>
        </Stack>
      </td>
    </tr>
  );
};

export const Task = React.memo(TaskDraft);
