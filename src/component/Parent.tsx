import React, { ReactNode } from "react";
import { Typography as Text } from '@mui/material';

interface Props { children: ReactNode; }

class Parent extends React.Component<Props>
{
    render(): React.ReactNode {
        return <>
            <Text>{this.props.children}</Text>
        </>
    }
}

export default Parent;