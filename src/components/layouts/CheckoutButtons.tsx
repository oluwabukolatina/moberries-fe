import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import AppContext from '../../context/AppContext';
import { ContextType } from '../../types/AppTypes';

type PageProps = { next: string; previous: string; previousName: string; nextName: string; validate: boolean };
export default function CheckoutButtons({ validate, next, previous, previousName, nextName }: PageProps) {
  const history = useHistory();
  const { onPreviousChange, onNextChange } = useContext(AppContext) as ContextType;
  const onPrevious = () => {
    if (previous === 'home') {
      history.push('/');
    }
    onPreviousChange(previous);
  };
  const onNext = () => {
    if (!validate) {
      toast.info('All fields required!');
    } else {
      onNextChange(next);
    }
  };

  return (
    <div className="actions checkout-buttons">
      <span onClick={onPrevious}>{previousName}</span>
      <span onClick={onNext}>{nextName}</span>
    </div>
  );
}
