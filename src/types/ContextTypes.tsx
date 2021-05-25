import { PizzaTypes } from '../components/home/Home';

export interface PizzaAddedType {
  name: string;
  amount: number;
  size: string;
  image: string;
  quantity: number;
}
export type ContextType = {
  pizzas: PizzaTypes[];
  hideOrderModal: () => void;
  openOrderModal: () => void;
  showOrderModal: boolean;
  pizza: PizzaAddedType;
  onChange: () => void;
  addOrderToCart: (param: PizzaAddedType) => void;
  orders: PizzaAddedType[];
  onAdd: () => void;
  onSubtract: () => void;
  quantity: number;
  page: string;
  onPreviousChange: (page: string) => void;
  onNextChange: (page: string) => void;
};
