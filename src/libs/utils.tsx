import { PizzaAddedType } from '../types/AppTypes';

const Helper = {
  showTotalAmount(orders: PizzaAddedType[]) {
    return orders
      .map((da) => da.amount)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
  },
  showQuantity(orders: PizzaAddedType[]) {
    return orders
      .map((da) => da.quantity)
      .reduce(function (a, b) {
        return a + b;
      }, 0);
  },
};
export default Helper;
