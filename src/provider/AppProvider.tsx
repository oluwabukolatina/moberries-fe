import React, { FC, ReactNode } from 'react';
import usePizzas from '../components/home/hooks/usePizzas';
import AppContext from '../context/AppContext';

const AppProvider: FC<ReactNode> = ({ children }) => {
  const {
    pizzas,
    showOrderModal,
    hideOrderModal,
    openOrderModal,
    pizza,
    onChange,
    addOrderToCart,
    orders,
    onAdd,
    onSubtract,
    quantity,
    page,
    onPreviousChange,
    onNextChange,
    onSubmitCheckedOutOrders,
    onOrderChange,
    checkedOutOrder,
    checkTerms,
    checked,
  } = usePizzas();
  return (
    <AppContext.Provider
      value={{
        pizzas,
        showOrderModal,
        hideOrderModal,
        pizza,
        onChange,
        openOrderModal,
        addOrderToCart,
        orders,
        onAdd,
        onSubtract,
        quantity,
        page,
        onPreviousChange,
        onNextChange,
        onSubmitCheckedOutOrders,
        onOrderChange,
        checkedOutOrder,
        checkTerms,
        checked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
