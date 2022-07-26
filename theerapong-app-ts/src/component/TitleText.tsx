import { Component, ReactNode } from 'react';
import { Typography as Text } from '@mui/material';
import { TextField } from '@mui/material';
import { Props } from '../model/Props';
import { State } from '../model/State';
import { Button } from '@mui/material';
import { VoidExpression } from 'typescript';

class TitleText extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { cnt: 0 };
    }

    onClick(): void {
       this.setState((state, props) => ({
            cnt: state.cnt + 1
       }));
    }

    onTextChange(e: any): void {
        this.setState((state, props) => ({
            cnt: e.target.value
        }));
    }

    render(): ReactNode {
        return <>
            <TextField label="Outlined" variant="outlined" />
            <input type="text" onChange={(e) => this.onTextChange(e)} />
            <Button variant='outlined' color='primary' onClick={(_) => this.onClick()}>
                {this.props.value} - {this.state.cnt}
            </Button>
        </>
    }

    componentDidMount(): void {
        console.log("when after create");
    }
}

export { TitleText };