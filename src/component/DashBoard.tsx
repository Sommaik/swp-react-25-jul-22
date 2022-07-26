import { FC, Fragment } from "react";
import { Typography as Text, Button } from "@mui/material";
import BigText from "./BigText";
import BigText2 from "./BigText2";
import TitleText from "./TitleText";
import Parent from "./Parent";
import AppContainer from "./AppContainer";

const name = "Dashboard Page";


const elem = <Fragment>

    <h1>{ name }</h1>
    

</Fragment> 

const DashBoard: FC = () => {
    return elem
}

export default DashBoard