import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, reset, incrementByAmount} from './counterSlice';
import {useState} from 'react';

export const Counter = () => {
    const count = useSelector((state: any) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrementAmount] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = (state: any) => {
        setIncrementAmount(0);
        dispatch(reset());
    };

    return (
        <>
            <section>
                <p>{count}</p>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </section>
            <input
                type='text'
                value={incrementAmount}
                onChange={(e: any) => setIncrementAmount(e.target.value)}
            />
            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>
                    Add Amount
                </button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </>
    );
};
