import { FC } from 'react';
import { Button, Typography as Text } from '@mui/material';
import { IBigText } from '../model/IBigText';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';

const BigText: FC<IBigText> = (props) => {

    const value = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return <>
        <p>-- Begin Component BigText --</p>
        <Text variant='h1'>{props.text} {props.model.year}</Text>
        {/* <Button variant='outlined' color='secondary'
            onClick={()=>dispatch(increment())}>Increment Click</Button> */}
        <Text variant='h2'>{value}</Text>
        <p>-- End Component BigText --</p>
    </>
}

export { BigText };