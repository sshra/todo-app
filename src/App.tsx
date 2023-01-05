import React from 'react';
import { Container } from 'react-bootstrap';
import TaskForm from './components/TaskForm';
import Tasks from './components/Tasks';
import UserLogin from './components/UserLogin';
import { useAppSelector } from './hooks/hooks';

function App(): React.ReactElement {
  const userName = useAppSelector(state => state.user.name);

  return (
    <Container>
      <h1>The TODO List</h1>
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
