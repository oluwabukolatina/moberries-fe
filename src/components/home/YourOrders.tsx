import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { ContextType, PizzaAddedType } from '../../types/ContextTypes';

export default function YourOrders() {
  const { orders } = useContext(AppContext) as ContextType;

  const checkout = () => {};
  const showTotalAmount = () => {
    return orders
      .map((da) => da.amount)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
  };
  const showQuantity = () => {
    return orders
      .map((da) => da.quantity)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
  };
  const showCheckoutButton = () => {
    return (
      orders.length > 0 && (
        <div className="actions" onClick={checkout}>
          <p>Checkout({showQuantity()})</p>
          <span>${showTotalAmount()}</span>
        </div>
      )
    );
  };
  return (
    <div className="orders">
      <p>Your Orders</p>
      {orders.map((order: PizzaAddedType, i: number) => (
        <div key={i + 1} className="order">
          {i + 1}
          <p>{order.name}</p>
          <p>${order.amount}</p>
        </div>
      ))}
      {showCheckoutButton()}
    </div>
  );
}
