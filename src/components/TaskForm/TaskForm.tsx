import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
// import s from './TaskForm.module.scss';

export const TaskForm = (): React.ReactElement => {
  console.log('TaskForm');
  return (
    <Form>
      <Row>
        <Col xs={'auto'}>
          <Form.Group className="mb-0">
            <Form.Control type="text" placeholder="Enter a task" />
          </Form.Group>
        </Col>
        <Col xs>
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Col>
        <Col xs>
          <Button variant="warning" type="reset">
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
