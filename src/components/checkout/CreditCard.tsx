import React, { useContext } from 'react';
import CheckoutButtons from '../layouts/CheckoutButtons';
import AppContext from '../../context/AppContext';
import { ContextType } from '../../types/AppTypes';
import CustomInput from '../layouts/CustomInput';

export default function CreditCard() {
  const { onOrderChange, checkedOutOrder } = useContext(AppContext) as ContextType;
  const { cardNumber, cardExpiration, cardSecurityCode } = checkedOutOrder;
  const validateForm = () => {
    return cardNumber.length > 0 && cardExpiration.length > 0 && cardSecurityCode.length > 0;
  };

  return (
    <div className="user-detail">
      <h3>Credit Card</h3>
      <form className="order-pizza-form">
        <div className="select-container">
          <p>Card Number</p>
          <CustomInput
            type="text"
            onchange={onOrderChange}
            name="cardNumber"
            value={cardNumber}
            maxlength={Number('16')}
          />
        </div>

        <div className="select-container">
          <p>Card Expiration Date</p>
          <CustomInput
            placeholder="03/06"
            type="text"
            maxlength={Number('5')}
            onchange={onOrderChange}
            name="cardExpiration"
            value={cardExpiration}
          />
        </div>

        <div className="select-container">
          <p>Card Security Code</p>
          <CustomInput
            type="string"
            placeholder="560"
            maxlength={Number('3')}
            onchange={onOrderChange}
            name="cardSecurityCode"
            value={cardSecurityCode}
          />
        </div>
      </form>

      <CheckoutButtons
        validate={validateForm()}
        next="confirmation"
        previous="userDetail"
        previousName="Previous"
        nextName="Next"
      />
    </div>
  );
}
