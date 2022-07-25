import { Button, SliderThumb } from '@mui/material';
import { Component, ReactNode } from 'react';

type Props = {
    value: string;
}

type State = {
    cnt: number;
}

class TitleText extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = { cnt: 0 };
    }

    onClick2(): void {
        this.setState((state, props) => ({
          cnt: state.cnt + 1,
        }));
    }

    onTextChange(event: any): void {
        this.setState((state, props) => ({
            cnt: event.target.value,
        }));
    }

    render(): ReactNode {
        return <>
            <input type="text" onChange={(evt) => this.onTextChange(evt)} />
            <Button variant='contained' color='primary' onClick={() => this.onClick2()}>  
                { this.props.value } - {this.state.cnt}
            
            </Button>
        </>;   
    } 
}

export default TitleText;