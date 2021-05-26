export interface PizzaTypes {
  id: number;
  name: string;
  description: string;
  image: string;
}
export interface PizzaAddedType {
  name: string;
  amount: number;
  size: string;
  image: string;
  quantity: number;
}
export interface CheckedOutTypes {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  cardNumber: string;
  cardExpiration: string;
  cardSecurityCode: string;
  terms: boolean;
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
  onSubmitCheckedOutOrders: () => void;
  onOrderChange: () => void;
  checkedOutOrder: CheckedOutTypes;
  checked: boolean;
  checkTerms: () => void;
};
