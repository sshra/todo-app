import React, { ChangeEventHandler, useState, useEffect } from 'react';
import { Badge, Form, Stack } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { EImportance, IToDoTask } from '../../api/tasks';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { setNewTask, setTask } from '../../store/currentTaskSlice';
import { addTask } from '../../store/tasks';
import s from './TaskForm.module.scss';

export const TaskForm = (): React.ReactElement => {
  const taskData: IToDoTask = useAppSelector(state => state.task);
  const dispatch = useAppDispatch();
  const [isDisabled, setIsDisabled] = useState(taskData.title.length === 0);

  useEffect(() => {
    setIsDisabled(taskData.title.length === 0);
  }, [taskData])

  const changeHandler: ChangeEventHandler<Element> = e => {
    const newState: IToDoTask = Object.assign({}, taskData);
    if (e.target instanceof HTMLInputElement) {
      newState.title = e.target.value;
      setIsDisabled(newState.title.length === 0);
    }
    if (e.target instanceof HTMLSelectElement) {
      newState.importance = e.target.value as EImportance;
    }
    dispatch(setTask(newState));
  }

  const submitHandler = (e: React.FormEvent<EventTarget>): void => {
    e.preventDefault();
    const newState: IToDoTask = Object.assign({}, taskData);
    dispatch(addTask(newState));
    dispatch(setNewTask());
  };

  const clearHandle = (e: React.MouseEvent<EventTarget>): void => {
    dispatch(setNewTask());
  }

  return (
    <Form onSubmit={submitHandler} className={s.form}>
      <Stack direction="horizontal" gap={1}>
        <Badge bg="dark">
          {taskData.taskUID === '' ? 'New item' : 'Editing mode'}
        </Badge>
        {taskData.isDone &&
          <Badge bg="dark">{'It\'s Done'}</Badge>
        }
      </Stack>
      <Row className={s.gapped}>
        <Col xs={'auto'}>
          <Form.Group className="mb-0">
            <Form.Control type="text"
              value={taskData.title}
              placeholder="Enter a task"
              onChange={changeHandler}
              required />
          </Form.Group>
        </Col>
        <Col xs={'auto'}>
          <Form.Select aria-label="Default select example"
            value={taskData.importance}
            onChange={changeHandler}>
            {Object.values(EImportance).map((value) =>
              <option key={value} value={value}>{value}</option>
            )}
          </Form.Select>
        </Col>
        <Col xs>
          <Stack direction="horizontal" gap={3}>
            <Button variant="primary" type="submit" disabled={isDisabled}>
              Save
            </Button>
            <Button variant="warning" type="reset" onClick={clearHandle}>
              Clear
            </Button>
          </Stack>
        </Col>
      </Row>
    </Form>
  );
};
