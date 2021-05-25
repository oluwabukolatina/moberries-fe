import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Helper from '../../libs/utils';
import { ContextType } from '../../types/ContextTypes';

export default function OrdersSummary() {
  const { orders } = useContext(AppContext) as ContextType;
  return (
    <div className="orders-summary">
      <p>Your Orders</p>
      {orders.map((order, i: number) => (
        <div key={i + 1} className="order">
          {order.quantity}
          <p>{order.name}</p>
          <p>${order.amount}</p>
        </div>
      ))}
      <input type="checkbox" id="" name="" value="" />
      <label> I agree to terms & conditions</label>
      <div className="confirm-details">
        <p>Checkout({Helper.showQuantity(orders)})</p>
        <span>${Helper.showTotalAmount(orders)}</span>
      </div>
      <div className="confirm-order">
        <p>Confirm Order</p>
      </div>
    </div>
  );
}
