import React from 'react';
import CheckoutButtons from '../CheckoutButtons';
import OrdersSummary from './OrdersSummary';

export default function Confirmation() {
  return (
    <div className="user-detail">
      <h3>Order Summary</h3>
      <OrdersSummary />
      <CheckoutButtons next="" previous="creditCard" previousName="Previous" nextName="" />
    </div>
  );
}
