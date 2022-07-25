
import React, { Fragment } from 'react';
import {Button, Typography as Text} from '@mui/material';
import BigText from './BigText';// no {} for export Default

import TitleText from './TitleText';
import Parent from './Parent';
import AppContainer from './AppContainer';

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
const bigTextEle = <Fragment>
<BigText text='su' code='admin' model={{year:2022, day:1}} sample={{year:2022, day:1}}/>
</Fragment>

//==========================================================================
/*const titleTextEle = <Fragment>
<TitleText value='Parent'/>
<Parent>
    <TitleText value='Child'></TitleText>
</Parent>
</Fragment>*/
//==========================================================================
const titleTextEle = <Fragment>
<TitleText value='Click me'/>
</Fragment>

//==========================================================================
const appConEle = <Fragment>
<TitleText value='Parent'/>
<AppContainer>
    <Parent>
        <TitleText value='Child'></TitleText>
        <AppContainer>
            <Text>{showName(name)}</Text>
        </AppContainer>
    </Parent>
</AppContainer>
</Fragment>

const HelloWorld: React.FC = () => {
    return (titleTextEle);
}

export default HelloWorld;