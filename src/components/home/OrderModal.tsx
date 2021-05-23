import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { PizzaTypes } from './Home';

type PageProps = {
  show: boolean;
  onHide: () => void;
  pizzaDetail: PizzaTypes;
};

const pizzaTypes = [
  'Neapolitan Pizza',
  'Chicago Pizza',
  'Sicilian Pizza',
  'Greek Pizza',
  'California Pizza',
  'Detroit Pizza',
];
const sizes = ['small', 'medium', 'large'];

export default function OrderModal({ show, onHide, pizzaDetail }: PageProps) {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{pizzaDetail.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{pizzaDetail.name}</p>
        <div className="pizza-image modal-image" style={{ backgroundImage: `url(${pizzaDetail.image})` }}></div>
        <form className="order-pizza-form">
          <div className="select-container">
            <p>Type</p>
            <select name="cars">
              {pizzaTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <p className="qty-container">
            Quantity
            <span>-</span>3<span>+</span>
          </p>
          <div className="select-container">
            <p>Size</p>
            <select name="cars">
              {sizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={onHide}>
          Close
        </Button> */}
        <Button variant="primary" onClick={onHide}>
          Add To Cart
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
