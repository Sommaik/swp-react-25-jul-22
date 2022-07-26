//import React from "react";
import { FC } from "react";
import { Button, Typography as Text } from '@mui/material';
import { IBigText } from "../model/IBigText"
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useDispatch } from "react-redux";
import { increment } from "../app/counter-slice";

const BigText: FC<IBigText> = (props) => {

    const value = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return <>
    <hr/>
    <Text variant="h1"> {props.text} </Text>
    <div> { "year : " + props.model.year } </div>
    <h2>Text from redux (Increment)</h2>
    <Text variant="h2"> { value } </Text>
    <Button variant="outlined" color="secondary" onClick={() => dispatch(increment())}>Increment</Button>
    <br/><br/>


    </>
}

export default BigText;