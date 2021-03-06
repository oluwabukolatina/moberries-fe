import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import { ContextType, PizzaTypes } from '../../types/AppTypes';
import OrderModal from './OrderModal';
import YourOrders from './YourOrders';

const Home = () => {
  const { pizzas, openOrderModal } = useContext(AppContext) as ContextType;
  const [pizzaDetails, setPizzaDetails] = useState({ id: 0, name: '', description: '', image: '' });

  const getOnePizza = (param: PizzaTypes) => {
    setPizzaDetails(param);
  };
  const displayPizzas = pizzas.map((pizza: PizzaTypes) => {
    return (
      <div
        onClick={() => {
          openOrderModal();
          getOnePizza(pizza);
        }}
        className="pizza"
        key={pizza.id}
      >
        <div>
          <p className="pizza-name">{pizza.name}</p>
          <p className="pizza-description">{pizza.description}</p>
        </div>
        <div className="pizza-image" style={{ backgroundImage: `url(${pizza.image})` }} />
      </div>
    );
  });

  return (
    <div className="home">
      <div className="pizzas">{displayPizzas}</div>
      <YourOrders />
      <OrderModal pizzaDetail={pizzaDetails} />
    </div>
  );
};

export default Home;
