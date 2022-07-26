import { FC, Fragment } from "react";
import { Typography as Text, Button } from "@mui/material";
import BigText from "./BigText";
import BigText2 from "./BigText2";
import TitleText from "./TitleText";
import Parent from "./Parent";
import AppContainer from "./AppContainer";

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

const elem = <Fragment>

    <h1>{ sayName() }</h1>
    <Text variant="h3">Simple</Text>
    <Text variant="h3"> {sayName('Another Name') } </Text>
    <div>{ showName() }</div>
    <div>{ showName("Text Test") } </div>
    <BigText text="I am BigText" code="" model={ {year:2022,day:1} } />  
    <BigText2 text="I am BigText" code="" model={ {year:2022,day:1} } />  
    <TitleText value="Title Text Test"/>
    <Parent title="Parent Container">

        <TitleText value="Title Text from Parent" />
    </Parent>

    <AppContainer>
        <TitleText value="Title Text from AppContainer" />

    </AppContainer>

</Fragment> 

const HelloWorld: FC = () => {
    return elem
}

export default HelloWorld