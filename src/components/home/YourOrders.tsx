import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { ContextType, PizzaAddedType } from '../../types/ContextTypes';
import { useHistory } from 'react-router-dom';
import Helper from '../../libs/utils';
export default function YourOrders() {
  const history = useHistory();
  const { orders } = useContext(AppContext) as ContextType;

  const checkout = () => {
    history.push('/checkout');
  };

  const showCheckoutButton = () => {
    return (
      orders.length > 0 && (
        <div className="actions" onClick={checkout}>
          <p>Checkout({Helper.showQuantity(orders)})</p>
          <span>${Helper.showQuantity(orders)}</span>
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
