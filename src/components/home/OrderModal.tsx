import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { PizzaTypes } from './Home';

type PageProps = {
  show: boolean;
  onHide: () => void;
  pizzaDetail: PizzaTypes;
};
export default function OrderModal({ show, onHide, pizzaDetail }: PageProps) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{pizzaDetail.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{pizzaDetail.name}</p>
        <div className="pizza-image modal-image" style={{ backgroundImage: `url(${pizzaDetail.image})` }}></div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={onHide}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
