import { Button, SliderThumb } from '@mui/material';
import { Component, ReactNode } from 'react';
import { ConnectedProps } from 'react-redux';
import { connect } from 'react-redux';
import { increment } from "../app/counter-slice";

type Props = {
    value: string;
}

type State = {
    cnt: number;
}

interface RootState {
    counter: {
        value: number;
    };
}

const mapState = (state: RootState) => ({
    value: state.counter.value,
});

const mapDispatch = {
    increment,
};

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>;

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
            <hr/>
            <input type="text" onChange={(evt) => this.onTextChange(evt)} />
            <Button variant='contained' color='primary' onClick={() => this.onClick2()}>  
                { this.props.value } - {this.state.cnt}
            
            </Button>
            
        </>;   
    } 

    componentDidMount(): void{
        console.log("when after create, call one time only");
    }
}

export default TitleText;