import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import CheckoutButtons from '../layouts/CheckoutButtons';
import CustomInput from '../layouts/CustomInput';
import { ContextType } from '../../types/AppTypes';

export default function UserDetail() {
  const { onOrderChange, checkedOutOrder } = useContext(AppContext) as ContextType;
  const { firstName, lastName, email, street } = checkedOutOrder;

  return (
    <div className="user-detail">
      <h3>User Data</h3>
      <form className="order-pizza-form">
        <div className="select-container">
          <p>First Name</p>
          <CustomInput onchange={onOrderChange} name="firstName" value={firstName} />
        </div>

        <div className="select-container">
          <p>LastName</p>
          <CustomInput onchange={onOrderChange} name="lastName" value={lastName} />
        </div>

        <div className="select-container">
          <p>Email</p>

          <CustomInput onchange={onOrderChange} name="email" value={email} />
        </div>

        <div className="select-container">
          <p>Address</p>
          <CustomInput onchange={onOrderChange} name="street" value={street} />
        </div>
      </form>

      <CheckoutButtons next="creditCard" previous="home" previousName="Previous" nextName="Next" />
    </div>
  );
}
