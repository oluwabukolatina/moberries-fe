import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import AppContext from '../../context/AppContext';
import Helper from '../../libs/utils';
import { ContextType } from '../../types/AppTypes';

export default function OrdersSummary() {
  const { orders, onSubmitCheckedOutOrders, checked, checkTerms } = useContext(AppContext) as ContextType;
  const confirmUserOrder = () => {
    if (checked) {
      onSubmitCheckedOutOrders();
    } else {
      toast.info('Kindly agree to the terms');
    }
  };
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

      <input type="checkbox" onChange={checkTerms} defaultChecked={checked} />
      <label> I agree to terms & conditions</label>
      <div className="confirm-details">
        <p>Checkout({Helper.showQuantity(orders)})</p>
        <span>${Helper.showTotalAmount(orders)}</span>
      </div>
      <div className="confirm-order" onClick={confirmUserOrder}>
        <p>Confirm Order</p>
      </div>
    </div>
  );
}
