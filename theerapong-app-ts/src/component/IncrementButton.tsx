import { FC } from 'react';
import { Button, Typography as Text } from '@mui/material';
import { IBigText } from '../model/IBigText';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { increment } from '../app/counter-slice';

const IncrementButton: FC<IBigText> = (props) => {

    const value = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return <>
        <p>-- Begin component IncrementButton --</p>
        <Button variant='outlined' color='secondary'
            onClick={()=>dispatch(increment())}>Increment Click</Button>
        <p>-- End component IncrementButton --</p>
    </>
}

export { IncrementButton }