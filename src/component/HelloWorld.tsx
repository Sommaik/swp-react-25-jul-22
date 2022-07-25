
import React, { Fragment } from 'react';
import {Button, Typography as Text} from '@mui/material';

//==========================================================================
const name = "Hello World";
const element = <>
<h1>{name}</h1>
<h2></h2>
</>;

//==========================================================================
const sayName = (name?: string) =>
{
    if (name)
    {
        return "This is your name: " + name;
    } else
    {
        return "Your name is " + (name ?? "");
    }
}
const sayNameEle = <>
<h1>{sayName(name)}</h1>
<Text variant='h1'>{sayName(name)}</Text>
<Button>{sayName()}</Button>
</>

//==========================================================================
const showName = (input?: string) =>
{
    let output;
    if (input)
    {
        output = <Text variant='body1'>{input}</Text>
    } else
    {
        output = <Button variant='contained' color='primary'>No Name</Button>
    }
    return output;
}

const showNameEle = <Fragment>
<div>{showName(name)}</div><div>{showName()}</div>
</Fragment>

//==========================================================================

const HelloWorld: React.FC = () => {
    return (showNameEle);
}

export default HelloWorld;