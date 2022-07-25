import {FC, Fragment} from 'react';
import {Typography as Text, Button } from '@mui/material'; 

const name = "Hello World";

const sayName = (n?: string) => `
    Hello ${name}

`;

const showName = (n?: string) =>{
    let elm = <Button variant='contained' color='primary'>No name</Button>
    if(n) {
        elm = <Text variant='body1'>{ n }</Text>
    }
    return elm;
}

const elem = <Fragment>
<h1>{ sayName()}</h1>
<Text variant='h1'>Simple</Text>
<Text variant='h1'>{ sayName('Another name')}</Text>
<div>{ showName() }</div>
<div>{ showName('Text') }</div>
</Fragment>;

const HelloWorld: FC = () => {
    return elem;
}

const BigText: FC = () => {
    return <Text>Big</Text>
}

// export {HelloWorld, HelloWorld as HW, BigText};
export default HelloWorld;