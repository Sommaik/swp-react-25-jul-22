import {FC} from "react";
import {Typography as Text} from '@mui/material';

import {ISample} from '../model/ISample'

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
const BigText: FC<IBigText> = (props) =>
{
    return (<view><Text variant="h1">{props.text}-{props.model.year}</Text></view>);
}

export default BigText;