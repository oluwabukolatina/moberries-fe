import React, { useContext } from 'react';
import CheckoutButtons from '../layouts/CheckoutButtons';
import OrdersSummary from './OrdersSummary';
import AppContext from '../../context/AppContext';
import { ContextType } from '../../types/AppTypes';

export default function Confirmation() {
  const { orders } = useContext(AppContext) as ContextType;
  const showPageContent = () => {
    return orders.length > 0 && <OrdersSummary />;
  };

  return (
    <div className="user-detail">
      <h3>Order Summary</h3>
      {showPageContent()}
      <CheckoutButtons validate={false} next="" previous="creditCard" previousName="Previous" nextName="" />
    </div>
  );
}
