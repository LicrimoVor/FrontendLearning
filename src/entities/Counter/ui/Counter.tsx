import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from 'shared/ui/Button/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/CounterSlice';

/** Счетчик */
export const Counter: FC = () => {
    const { t } = useTranslation();
    const counterValue = useSelector(getCounterValue);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="counter-value">
                {counterValue}
            </h1>
            <Button
                onClick={increment}
                data-testid="counter-increment"
            >
                {t('Increment')}
            </Button>
            <Button
                onClick={decrement}
                data-testid="counter-decrement"
            >
                {t('Decrement')}
            </Button>
        </div>
    );
};
