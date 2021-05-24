import { useState } from 'react';
import { PizzaAddedType } from '../../../types/ContextTypes';
import { PizzaData } from '../../../utils/PizzaData';

const usePizzas = () => {
  const initialState = { name: '', amount: 0, size: '', quantity: 0, image: '' };
  const [pizzas] = useState(PizzaData);
  const [showOrderModal, setOrderModal] = useState(false);
  const [pizza, setPizza] = useState(initialState);
  const [orders, setOrders] = useState<PizzaAddedType[]>([]);

  const hideOrderModal = () => {
    setOrderModal(!showOrderModal);
  };
  const openOrderModal = () => {
    setOrderModal(true);
  };
  const onChange = (e: { target: { name: any; value: any } }) =>
    setPizza({ ...pizza, [e.target.name]: e.target.value });

  const addOrderToCart = (param: PizzaAddedType) => {
    console.log(param, 'param');
    const newOrders = orders;
    newOrders.push(param);
    setOrders(newOrders);
    console.log(orders);
  };

  return { pizzas, showOrderModal, hideOrderModal, openOrderModal, pizza, onChange, addOrderToCart };
};
export default usePizzas;
