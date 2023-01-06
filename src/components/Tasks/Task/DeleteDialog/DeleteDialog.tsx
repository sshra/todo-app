import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useAppDispatch } from '../../../../hooks/hooks';
import { deleteTask } from '../../../../store/tasks';
// import s from './DeleteDialog.module.scss';

interface IProps {
  taskID: string
  show: boolean
  setShow: CallableFunction
}

export const DeleteDialog = ({ taskID, show, setShow }: IProps): React.ReactElement => {
  const dispatch = useAppDispatch();

  const handleClose = (): void => { setShow(false); }

  const handleCloseAndDelete = (): void => {
    dispatch(deleteTask(taskID));
    setShow(false);
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Delete the Record</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you really sure you want to delete this record?</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="danger" onClick={handleCloseAndDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
