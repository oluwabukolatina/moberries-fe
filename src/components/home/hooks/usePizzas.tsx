import { useState } from 'react';
import { PizzaData } from '../../../utils/PizzaData';
import { PizzaAddedType } from '../../../types/AppTypes';
import { toast } from 'react-toastify';

const usePizzas = () => {
  const initialState = { name: '', amount: 0, size: '', quantity: 0, image: '' };
  const orderState = {
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    cardNumber: '',
    cardExpiration: '',
    cardSecurityCode: '',
  };
  const [pizzas] = useState(PizzaData);
  const [showOrderModal, setOrderModal] = useState(false);
  const [pizza, setPizza] = useState(initialState);
  const [orders, setOrders] = useState<PizzaAddedType[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [page, setPage] = useState('userDetail');
  const onPreviousChange = (param: string) => setPage(param);
  const onNextChange = (param: string) => setPage(param);
  const [checkedOutOrder, setCheckedOutOrder] = useState(orderState);
  const [checked, setChecked] = useState(false);
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
  const onOrderChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setCheckedOutOrder({ ...checkedOutOrder, [name]: value });
  };
  const checkTerms = () => {
    setChecked(!checked);
  };
  const addOrderToCart = (param: PizzaAddedType) => {
    const newOrders = orders;
    newOrders.push(param);
    setOrders(newOrders);
    setOrderModal(!showOrderModal);
    setPizza(pizza);
    setQuantity(1);
  };
  const onSubmitCheckedOutOrders = () => {
    const { firstName, lastName, email, street, cardExpiration, cardNumber, cardSecurityCode } = checkedOutOrder;
    const data = {
      firstName,
      lastName,
      email,
      street,
      cardExpiration,
      cardNumber,
      cardSecurityCode,
      orders,
      terms: checked,
    };
    // eslint-disable-next-line no-console
    console.log(data);
    toast.success(
      `Hi ${firstName}, your ${
        orders.length > 1 ? 'orders have' : 'order has'
      } been taken and will be delivered to ${street}`,
    );
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
    onSubmitCheckedOutOrders,
    onOrderChange,
    checkedOutOrder,
    checkTerms,
    checked,
  };
};
export default usePizzas;
