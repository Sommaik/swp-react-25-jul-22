import { FC, Fragment } from "react";
import { Typography as Text, Button } from "@mui/material";

const name = "Dashboard Page";


const elem = <Fragment>

    <h1>{ name }</h1>
    

</Fragment> 

const DashBoard: FC = () => {
    return elem
}

export default DashBoard