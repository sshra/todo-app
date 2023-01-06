import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React, { MouseEventHandler } from 'react';
import { Button, ButtonGroup, ButtonToolbar, Container } from 'react-bootstrap';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import UserLogin from './components/UserLogin';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { logout } from './store/userSlice';

function App(): React.ReactElement {
  const userName = useAppSelector(state => state.user.name);
  const dispatch = useAppDispatch();
  const logoutHandle: MouseEventHandler = (e) => {
    dispatch(logout());
  }

  return (
    <Container>
      <ButtonToolbar className="justify-content-between">
        <h1>The TODO List</h1>
        {userName.length > 0 &&
          <ButtonGroup aria-label="First group">
            <Button variant="secondary" aria-label="LogOut" onClick={logoutHandle}>
              {userName} &nbsp;
              <FontAwesomeIcon icon={faDoorOpen}></FontAwesomeIcon>
            </Button>
          </ButtonGroup>
        }
      </ButtonToolbar>

      {userName === ''
        ? <>
            <h2>Identify yourself, please:</h2>
            <UserLogin />
          </>
        : <>
            <TaskForm />
            <Tasks />
          </>}
    </Container>
  );
}

export default App;
