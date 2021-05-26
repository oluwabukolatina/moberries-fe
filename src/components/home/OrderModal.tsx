import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import AppContext from '../../context/AppContext';
import { ContextType, PizzaTypes } from '../../types/AppTypes';

type PageProps = {
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
const sizeAndPricing = [
  { size: 'small', pricing: 3 },
  { size: 'medium', pricing: 5 },
  { size: 'large', pricing: 8 },
];

export default function OrderModal({ pizzaDetail }: PageProps) {
  const { showOrderModal, hideOrderModal, pizza, onChange, addOrderToCart, onAdd, onSubtract, quantity } = useContext(
    AppContext,
  ) as ContextType;
  const getAmountFromSize = (size: string) => {
    switch (size) {
      case 'small':
        return 3;
      case 'medium':
        return 5;
      case 'large':
        return 8;
      // the default is a small pizza
      default:
        return 3;
    }
  };
  const showTotal = () => {
    return getAmountFromSize(pizza.size) * quantity;
  };
  const addToCart = () => {
    const data = {
      name: pizzaDetail.name,
      amount: getAmountFromSize(pizza.size) * quantity,
      size: pizza.size ? pizza.size : 'small',
      quantity,
      image: pizzaDetail.image,
    };
    addOrderToCart(data);
  };

  return (
    <Modal show={showOrderModal} onHide={hideOrderModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{pizzaDetail.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{pizzaDetail.name}</p>
        <div className="pizza-image modal-image" style={{ backgroundImage: `url(${pizzaDetail.image})` }}></div>
        <form className="order-pizza-form">
          <div className="select-container">
            <p>Type</p>
            <select onChange={onChange} name="type">
              {pizzaTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <p className="qty-container">
            Quantity
            <span onChange={onChange} onClick={onSubtract}>
              -
            </span>
            {quantity}
            <span onClick={onAdd}>+</span>
          </p>
          <div className="select-container">
            <p>Size</p>
            <select onChange={onChange} name="size">
              {sizeAndPricing.map((sp) => (
                <option key={sp.pricing} value={sp.size}>
                  {sp.size}
                </option>
              ))}
            </select>
          </div>
        </form>
      </Modal.Body>

      <div className="actions" onClick={addToCart}>
        <span>${showTotal()}</span>
        <p>Add To Cart</p>
      </div>
    </Modal>
  );
}
