import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { ContextType } from '../../types/AppTypes';

type PageProps = { next: string; previous: string; previousName: string; nextName: string };
export default function CheckoutButtons({ next, previous, previousName, nextName }: PageProps) {
  const history = useHistory();
  const { onPreviousChange, onNextChange } = useContext(AppContext) as ContextType;
  const onPrevious = () => {
    if (previous === 'home') {
      history.push('/');
    }
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
