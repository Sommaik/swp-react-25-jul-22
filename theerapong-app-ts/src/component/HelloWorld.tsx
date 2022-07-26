import { Button, Typography as Text } from '@mui/material';
import { FC } from 'react';
import { BigText } from './BigText';
import { TitleText } from './TitleText';
import { Parent } from './Parent';
import { AppContainer } from './AppContainer';

const sayName = (n: string) => {
    return "This is your " + n;
}

const sayName2 = (n?: string) => {
    let ret = <Button variant='contained' color='primary'>No Name</Button>;
    if (n) {
        ret = <Text>{ n }</Text>;
    }
    return ret;
}

const arr: string[] = ["One", "Two"];

const name = "Theerapong Thongprom";
const elem = <>
    <h1>Hello, {name}</h1>
    <Text variant='h3'>{ sayName(name) } { sayName2() }</Text>
    <BigText text='Sawasdee' code='' model={{year: 2022, day: 219}}/>
    <TitleText value='titleText'/>
    <Parent title='Parent Container'>
        <TitleText value='Child Btn'/>
    </Parent>
    <AppContainer/>
    <AppContainer>
        <TitleText value='Hello'></TitleText>
    </AppContainer>

    {
        arr.map((v) => {
            return <h2 key={v}>{v}</h2>
        })
    }
</>

const HelloWorld: FC = () => {
    return elem;
}

const HelloWorld2: FC = () => {
    return elem;
}

export { HelloWorld, HelloWorld2 };
//export default HelloWorld;