import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { ContextType } from '../types/ContextTypes';

type PageProps = { next: string; previous: string; previousName: string; nextName: string };
export default function CheckoutButtons({ next, previous, previousName, nextName }: PageProps) {
  const { onPreviousChange, onNextChange } = useContext(AppContext) as ContextType;
  const onPrevious = () => {
    onPreviousChange(previous);
  };
  const onNext = () => {
    onNextChange(next);
  };

  return (
    <div className="actions checkout-buttons">
      <span onClick={onPrevious}>{previousName}</span>
      <span onClick={onNext}>{nextName}</span>
    </div>
  );
}
