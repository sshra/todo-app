import React, { useRef } from 'react';
import { Users, IToDoUser } from '../../api/users';
import Button from 'react-bootstrap/esm/Button';
import { Form } from 'react-bootstrap';
import { useAppDispatch } from '../../hooks/hooks';
import { setUser } from '../../store/userSlice';
import s from './UserLogin.module.scss';

export const UserLogin = (): React.ReactElement => {
  const userList: IToDoUser[] = Users.getList();
  const dispatch = useAppDispatch();
  const nameRef = useRef<HTMLInputElement>(null);

  const handleUserSelect = (e: React.MouseEvent<EventTarget>): void => {
    if (e.target instanceof HTMLButtonElement) {
      const uid: string = e.target.getAttribute('data-uid') ?? '';
      const user = Users.getUserByID(uid);
      if (user !== null) {
        dispatch(setUser(user));
      }
    }
  }

  const submitHandler = (e: React.FormEvent<EventTarget>): void => {
    if (nameRef !== null) {
      const name = nameRef.current?.value ?? '';
      let user: IToDoUser | null = Users.getUserByName(name);
      if (user === null) {
        user = Users.addUser(name)
        dispatch(setUser(user));
      }
      dispatch(setUser(user));
    }
  }

  return (
    <>
      <div className={s.existingUsersList}>
      { userList.map((user: IToDoUser) => (
        <Button
          key={user.uid}
          data-uid={user.uid}
          onClick={handleUserSelect}
          type="button">
          {user.name}
        </Button>
      ))}
      </div>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>New User Name:</Form.Label>
          <Form.Control ref={nameRef}
            type="text"
            placeholder="Enter your name"
            required />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
