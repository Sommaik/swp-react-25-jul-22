//import React from "react";
import { FC } from "react";
import { Typography as Text } from '@mui/material';
import { IBigText } from "../model/IBigText"

const BigText: FC<IBigText> = (props) => {
    return <>
    <Text variant="h1"> {props.text} </Text>
    <div> { "year : " + props.model.year } </div>
    </>
}

export default BigText;