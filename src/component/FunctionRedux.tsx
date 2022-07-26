import { FC } from "react";
import { Button, Typography as Text } from '@mui/material';

import { ISample } from '../model/ISample'
import { RootState } from "../app/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment } from "../app/slice/counter-slice";

interface IModel
{
    year: number;
    day: number;
}
interface IBigText
{
    code: string;
    text: string;
    model: IModel;
    sample: ISample;
}

/*const BigText: FC<IBigText> = ({text}) =>
{
    return (<view><Text variant="h1">{text}</Text></view>);
}*/
const FunctionRedux: FC<IBigText> = (props) =>
{
    const value = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();
    return (<>
        <Text variant="h1">{props.text}</Text>
        <Text variant="h2">{value}</Text>
        <Button variant="outlined" color="secondary" onClick={() => dispatch(increment())}>Click me</Button>
        </>);
}

export default FunctionRedux;