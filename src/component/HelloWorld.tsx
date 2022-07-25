import React from "react";
import { Typography as Text, Button } from "@mui/material";

const name = "Hello World";
const sayName = (n?:string) => {
    return "This is your " + (n ?? '');
}

const showName = (n?:string) => {
    if(n) {
       return <Text variant="body1">{ n }</Text>
    }
    else {
       return <Button variant="contained" color="primary">No name</Button>
    }
}

const elem = <React.Fragment>
    
    <h1>{ sayName() }</h1>
    <Text variant="h3">Simple</Text>
    <Text variant="h3"> {sayName('Another Name') } </Text>
    <div>{ showName() }</div>
    <div>{ showName("Text Test") } </div>

</React.Fragment> 

const HelloWorld: React.FC = () => {
    return elem
}

export default HelloWorld