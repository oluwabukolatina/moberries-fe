import { PizzaTypes } from '../components/home/Home';

export interface PizzaAddedType {
  name: string;
  amount: number;
  size: string;
  image: string;
}
export type ContextType = {
  pizzas: PizzaTypes[];
  hideOrderModal: () => void;
  openOrderModal: () => void;
  showOrderModal: boolean;
  pizza: PizzaAddedType;
  onChange: () => void;
  addOrderToCart: (param: PizzaAddedType) => void;
};
