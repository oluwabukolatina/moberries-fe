import { useState } from 'react';
import { PizzaAddedType } from '../../../types/ContextTypes';
import { PizzaData } from '../../../utils/PizzaData';

const usePizzas = () => {
  const initialState = { name: '', amount: 0, size: '', quantity: 0, image: '' };
  const [pizzas] = useState(PizzaData);
  const [showOrderModal, setOrderModal] = useState(false);
  const [pizza, setPizza] = useState(initialState);
  const [orders, setOrders] = useState<PizzaAddedType[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [page, setPage] = useState('userDetail');
  const onPreviousChange = (param: string) => setPage(param);
  const onNextChange = (param: string) => setPage(param);

  const onAdd = () => {
    setQuantity(quantity + 1);
  };
  const onSubtract = () => {
    if (quantity < 1) return;
    setQuantity(quantity - 1);
  };

  const hideOrderModal = () => {
    setOrderModal(!showOrderModal);
  };
  const openOrderModal = () => {
    setOrderModal(true);
  };
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setPizza({ ...pizza, [e.target.name]: e.target.value });

  const addOrderToCart = (param: PizzaAddedType) => {
    const newOrders = orders;
    newOrders.push(param);
    setOrders(newOrders);
    setOrderModal(!showOrderModal);
    setPizza(pizza);
    setQuantity(1);
  };

  return {
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
  };
};
export default usePizzas;
