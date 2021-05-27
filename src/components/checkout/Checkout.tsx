import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { ContextType } from '../../types/AppTypes';
import Confirmation from './Confirmation';
import CreditCard from './CreditCard';
import UserDetail from './UserDetail';

export default function Checkout() {
  const { page } = useContext(AppContext) as ContextType;
  const showPage = () => {
    switch (page) {
      case 'userDetail':
        return <UserDetail />;
      case 'creditCard':
        return <CreditCard />;
      case 'confirmation':
        return <Confirmation />;
      default:
        return <UserDetail />;
    }
  };
  return <div className="checkout">{showPage()}</div>;
}
