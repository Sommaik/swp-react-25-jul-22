import React, { ReactNode }  from "react";
import { Typography as Text, Button } from '@mui/material';

//=================================================================
import { increment } from '../app/counter-slice';
import { connect, ConnectedProps } from 'react-redux';

type Props = { value: string;}
type State = { cnt: number; }

//=================================================================
interface RootState
{
    counter:
    {
        value: number;
    }
}

const mapState = (state: RootState) =>
({
    value: state.counter.value,
})

const mapDispatch =
{
    increment,
};

//=================================================================
const connector = connect(mapState, mapDispatch);

//=================================================================
type PropsFromRedux = ConnectedProps<typeof connector>;

class ActionRedux extends React.Component<PropsFromRedux, State>
{
    //constructor(props:Props)
    //{
    //    super(props);
    //    this.state = {cnt: 0};
    //}

    onClick(): void
    {
        this.setState((state, props) =>
        ({
            cnt: state.cnt + 1,
        }));
    }

    onTextChange(event: any): void
    {
        this.setState((state, props) => ({
            cnt: event.target.value,
        }));
    }

    render(): React.ReactNode {
        return <>
            <input type='text' onChange={(event)=>this.onTextChange(event)}/>
            <Button variant='contained' color="primary" onClick={(_) => this.onClick()}>
                {this.props.value} - {this.state?.cnt}
            </Button>
            <h1>From Redux State</h1>
            <h2>{this.props.value}</h2>
            <Button variant='contained' color="primary" onClick={this.props.increment}>Increment</Button>
        </>
    }
}

export default ActionRedux;