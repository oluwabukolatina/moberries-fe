import React, { useState } from 'react';
import { PizzaData } from '../../utils/PizzaData';
import OrderModal from './OrderModal';
// import YourOrders from './YourOrders';
export interface PizzaTypes {
  id: number;
  name: string;
  description: string;
  image: string;
}
const Home = () => {
  const [pizzas] = useState(PizzaData);
  const [showOrderModal, setOrderModal] = useState(false);
  const [pizzaDetails, setPizzaDetails] = useState({ id: 0, name: '', description: '', image: '' });

  const hideOrderModal = () => {
    setOrderModal(!showOrderModal);
  };
  const openOrderModal = () => {
    setOrderModal(true);
  };
  const getOnePizza = (param: PizzaTypes) => {
    setPizzaDetails(param);
  };
  const displayPizzas = pizzas.map((pizza) => {
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
        <div className="pizza-image" style={{ backgroundImage: `url(${pizza.image})` }}></div>
      </div>
    );
  });

  return (
    <div className="home">
      <div className="pizzas">{displayPizzas}</div>
      {/* <YourOrders /> */}
      <OrderModal show={showOrderModal} onHide={hideOrderModal} pizzaDetail={pizzaDetails} />
    </div>
  );
};

export default Home;
