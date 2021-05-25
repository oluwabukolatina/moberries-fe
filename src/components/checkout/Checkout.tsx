import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { ContextType } from '../../types/ContextTypes';
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
  return (
    <div className="checkout">
      {showPage()}

      {/* <Carousel interval={null} controls={false}>
        <Carousel.Item>
          <UserDetail />
        </Carousel.Item>
        <Carousel.Item>
          <CreditCard />
        </Carousel.Item>
      </Carousel> */}
    </div>
  );
}
